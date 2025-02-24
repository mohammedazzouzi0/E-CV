require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

// Connexion à la base de données
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "contact_messages",
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err.message);
    process.exit(1); // Arrête l'application en cas d'erreur critique
  }
  console.log("Connecté à la base de données MySQL");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Utilisez le service de votre fournisseur d'email
  auth: {
    user: process.env.EMAIL_USER, // Adresse email de l'expéditeur
    pass: process.env.EMAIL_PASS, // Mot de passe ou app password
  },
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Routes pour les pages HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route POST pour envoyer un message
app.post("/send-message", (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  // Vérifier que tous les champs sont remplis
  if (!name || !email || !subject || !message || !phone) {
    return res.status(400).send("Tous les champs sont obligatoires.");
  }

  // Enregistrer le message dans la base de données
  const sql =
    "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error(
        "Erreur lors de l'insertion dans la base de données :",
        err.message
      );
      return res.status(500).send("Erreur interne du serveur.");
    }

    // Envoi de l'email de confirmation à l'utilisateur
    const userMailOptions = {
      from: process.env.EMAIL_USER, // L'adresse email de l'expéditeur (vous)
      to: email, // Adresse email de l'utilisateur (destinataire)
      subject: "Confirmation de réception de votre message", // Sujet de l'email
      text:
        `Bonjour ${name},\n\nNous avons bien reçu votre message. Voici un résumé de votre message :\n\n` +
        `Nom : ${name}\n` +
        `Email : ${email}\n` +
        `Téléphone : ${phone}\n` +
        `Sujet : ${subject}\n` +
        `Message :\n${message}\n\nNous reviendrons vers vous sous peu.\n\nCordialement,\nL'équipe Azzouzi, Himmi, Assou.`, // Message de confirmation
    };

    // Envoi de l'email à l'utilisateur pour confirmer la réception
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error("Erreur lors de l'envoi de l'email à l'utilisateur :", error.message);
        return res.status(500).send("Message enregistré, mais l'email de confirmation n'a pas pu être envoyé.");
      }

      // Envoi de l'email à l'administrateur
      const adminMailOptions = {
        from: process.env.EMAIL_USER, // L'adresse email de l'expéditeur (vous)
        to: process.env.EMAIL_USER, // Adresse email à laquelle envoyer les détails du message (votre adresse)
        subject: `Nouveau message de contact de ${name}`, // Sujet de l'email
        text:
          `Bonjour,\n\nVous avez reçu un nouveau message de contact via votre site web de la part de ${name}. Voici les détails du message :\n\n` +
          `Nom : ${name}\n` +
          `Email : ${email}\n` +
          `Téléphone : ${phone}\n` +
          `Sujet : ${subject}\n` +
          `Message :\n${message}\n\nCordialement,\nL'équipe.`, // Détails du message
      };

      // Envoi de l'email à l'administrateur
      transporter.sendMail(adminMailOptions, (adminError, adminInfo) => {
        if (adminError) {
          console.error("Erreur lors de l'envoi de l'email à l'administrateur :", adminError.message);
          return res.status(500).send("Message enregistré, mais l'email à l'administrateur n'a pas pu être envoyé.");
        }

        // Réponse finale pour l'utilisateur
        res.status(200).send(`
          <script>
            alert("Message enregistré et emails envoyés. Merci de votre visite sur notre site web.");
            window.location.href = "/"; // Redirection après le message
          </script>
        `);
        
      });
    });
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
