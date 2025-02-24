-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 21 jan. 2025 à 09:41
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `contact_messages`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `subject`, `message`, `created_at`) VALUES
(1, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', 'hk iv', '2025-01-18 18:57:35'),
(2, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', ' hbo', '2025-01-18 19:02:51'),
(3, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', ' hbo', '2025-01-18 19:05:13'),
(4, 'AMINE ASSOU', 'mohammedazzouzilaptop@gmail.com', 'MODIFICATION', 'HELLO EVERY BODY', '2025-01-18 19:05:44'),
(5, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', 'salam\r\n', '2025-01-18 19:48:48'),
(6, 'mohammed', 'mohammedazzouzi222@gmail.com', 'bdel koulshe', 'salam tam 3la mawlana l karime', '2025-01-18 20:22:54'),
(7, 'mohammed', 'mohammedazzouzi333@gmail.com', 'bdel koulshe', 'salam tam 3la mawlana l karime', '2025-01-18 20:23:41'),
(8, 'mohammed', 'mohammedazzouzi333@gmail.com', 'fasd', 'hello cava 3lik', '2025-01-18 20:36:32'),
(9, 'mohammed', 'mohammedazzouzi333@gmail.com', 'fasd', 'hello cava 3lik', '2025-01-18 20:40:11'),
(10, 'mohammed', 'mohammedazzouzi333@gmail.com', 'fasd', 'hello cava 3lik', '2025-01-18 20:52:48'),
(11, 'mohammed', 'mohammedazzouzi333@gmail.com', 'fasd', 'hello cava 3lik', '2025-01-18 21:01:16'),
(12, 'mohammed', 'mohammedazzouzi333@gmail.com', 'fasd', 'hello cava 3lik', '2025-01-18 21:01:31'),
(13, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', 'kvhj g', '2025-01-18 21:44:19'),
(14, 'mohammedazzouzi', 'mohammedazzouzilaptop@gmail.com', 'vhkbjln', ' gjhkbjl', '2025-01-18 21:48:33'),
(15, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:51:52'),
(16, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:57:06'),
(17, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:58:23'),
(18, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:58:54'),
(19, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:59:20'),
(20, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ' ljb', '2025-01-18 21:59:33'),
(21, 'AMINE ASSOU', 'assou-ami@upf.ac.ma', 'MODIFICATION', 'ammminne cv ', '2025-01-20 20:31:58'),
(22, 'AMINE ASSOU', 'assou-ami@upf.ac.ma', 'MODIFICATION', 'ammminne cv ', '2025-01-20 20:33:28'),
(23, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', ',jbkyfutdy', '2025-01-21 08:15:34'),
(24, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'bdel koulshe', 'kjvcg', '2025-01-21 08:18:23'),
(25, 'med', 'mohammedazzouzi333@gmail.com', 'jbkvh', 'hugiyf', '2025-01-21 08:19:53'),
(26, 'mohammed', 'mohammedazzouzilaptop@gmail.com', 'fasd', ',bjkfydt', '2025-01-21 08:40:32');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
