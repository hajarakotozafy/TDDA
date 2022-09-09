-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 09 sep. 2022 à 03:33
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `td_device_actions_histories`
--

-- --------------------------------------------------------

--
-- Structure de la table `device`
--

DROP TABLE IF EXISTS `device`;
CREATE TABLE IF NOT EXISTS `device` (
  `dvc_id` int(11) NOT NULL AUTO_INCREMENT,
  `dvc_name` varchar(45) NOT NULL,
  `dvc_description` text NOT NULL,
  `dvc_created_at` datetime NOT NULL,
  `dvc_updated_at` timestamp NOT NULL,
  `state_state_id` int(11) NOT NULL,
  `user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`dvc_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `device`
--

INSERT INTO `device` (`dvc_id`, `dvc_name`, `dvc_description`, `dvc_created_at`, `dvc_updated_at`, `state_state_id`, `user_user_id`) VALUES
(1, 'J48', 'descri dvc j48', '2022-09-08 22:25:21', '2022-09-08 20:25:21', 3, 1),
(2, 'samsung', 'descri dvc samsung', '2022-09-08 22:25:21', '2022-09-08 20:25:21', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `device_actions`
--

DROP TABLE IF EXISTS `device_actions`;
CREATE TABLE IF NOT EXISTS `device_actions` (
  `dact_id` int(11) NOT NULL AUTO_INCREMENT,
  `dact_name` varchar(45) NOT NULL,
  `dact_description` varchar(45) NOT NULL,
  `dact_date` date NOT NULL,
  `dact_created_at` datetime NOT NULL,
  `dact_updated_at` timestamp NOT NULL,
  `device_dvc_id` int(11) NOT NULL,
  PRIMARY KEY (`dact_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `device_actions`
--

INSERT INTO `device_actions` (`dact_id`, `dact_name`, `dact_description`, `dact_date`, `dact_created_at`, `dact_updated_at`, `device_dvc_id`) VALUES
(2, 'open Calendar', 'open Calendar application', '2022-09-08', '2022-09-08 22:25:21', '2022-09-08 20:25:21', 1);

-- --------------------------------------------------------

--
-- Structure de la table `state`
--

DROP TABLE IF EXISTS `state`;
CREATE TABLE IF NOT EXISTS `state` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(45) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'CONNECTED'),
(2, 'DISCONNECTED'),
(3, 'DELETED');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_lastname` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_actived` tinyint(4) NOT NULL,
  `user_created_at` datetime NOT NULL,
  `user_updated_at` timestamp NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_lastname`, `user_email`, `user_password`, `user_actived`, `user_created_at`, `user_updated_at`) VALUES
(1, 'Rakoto', 'Rabe', 'raberakoto@gmail.com', '123456789', 0, '2022-09-08 16:56:00', '2022-09-08 14:56:00'),
(2, 'Razafy', 'randria', 'randriarazafy@gmail.com', '123456789', 0, '2022-09-08 16:56:00', '2022-09-08 14:56:00'),
(3, 'RALAY', 'Koto', 'kotoralay@gmail.com', '123456', 1, '2021-12-01 12:15:45', '2021-12-01 11:15:45');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
