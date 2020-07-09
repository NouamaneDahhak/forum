-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2020 at 06:13 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forumdb2`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` int(11) NOT NULL,
  `value` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `value`, `img`) VALUES
(1, 'FORUM', NULL),
(2, 'AGORA', NULL),
(3, 'Salle Modérateur', NULL),
(4, 'CATALOGUE', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `Id` int(11) NOT NULL,
  `content` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL,
  `date` longtext DEFAULT NULL,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`Id`, `content`, `img`, `date`, `postId`, `userId`) VALUES
(1, 'comment 1 p 1 u 1', 'images.png', '02/03/2012', 1, 2),
(2, 'comment 2 p 1 u 2', 'images.png', '02/03/2012', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `Id` int(11) NOT NULL,
  `title` longtext DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL,
  `date` longtext DEFAULT NULL,
  `views` longtext DEFAULT NULL,
  `nbComment` longtext DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `nbdislike` int(11) NOT NULL DEFAULT 0,
  `nblike` int(11) NOT NULL DEFAULT 0,
  `epingler` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`Id`, `title`, `content`, `img`, `date`, `views`, `nbComment`, `userId`, `categoryId`, `nbdislike`, `nblike`, `epingler`) VALUES
(1, 'title ', 'content', 'blog-2-806x440.png', '02/03/1990', '5', '5', 1, 1, 0, 0, 1),
(2, 'title 2', 'content 2', 'blog-2-806x440.png', '02/03/1990', '10', '10', 1, 1, 0, 0, 0),
(4, 'title 3', 'content3', 'blog-2-806x440.png', '02/03/1990', '5', '5', 2, 2, 0, 0, 0),
(5, 'title 4', 'content 4', 'blog-2-806x440.png', '02/03/1990', '10', '10', 2, 2, 0, 0, 0),
(6, 'title 5', 'content5', 'blog-2-806x440.png', '02/03/1990', '5', '5', 2, 3, 0, 0, 1),
(7, 'title 6', 'content 6', 'blog-2-806x440.png', '02/03/1990', '10', '10', 2, 4, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reaction`
--

CREATE TABLE `reaction` (
  `Id` int(11) NOT NULL,
  `like` tinyint(1) NOT NULL,
  `date` longtext DEFAULT NULL,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reaction`
--

INSERT INTO `reaction` (`Id`, `like`, `date`, `postId`, `userId`) VALUES
(1, 0, '02/03/2012', 1, 2),
(2, 0, '02/03/2012', 1, 3),
(3, 1, '02/03/2012', 1, 1),
(5, 0, '02/03/2012', 1, 2),
(6, 1, '02/03/2012', 1, 2),
(7, 1, '02/03/2012', 1, 2),
(8, 0, '02/03/2012', 1, 2),
(9, 1, '02/03/2012', 1, 2),
(10, 0, '02/03/2012', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `username` longtext DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL,
  `Usertype` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `username`, `password`, `email`, `img`, `Usertype`) VALUES
(1, 'user1', 'user1', 'user1', 'images.png', NULL),
(2, 'user2', 'user2', 'user2', 'images.png', NULL),
(3, 'user3', 'user3', 'user3', 'images.png', NULL),
(4, 'user4', 'user4', 'user4', 'images.png', NULL),
(5, 'user5', 'user5', 'user5', NULL, NULL),
(6, 'user6', 'user6', 'user6', NULL, NULL),
(7, 'user5', 'user5', 'user5', NULL, NULL),
(8, 'user7', 'user7', 'user7', NULL, 'Membre'),
(9, 'aaa', 'aaa', 'aaa', NULL, 'Administrateur');

-- --------------------------------------------------------

--
-- Table structure for table `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(95) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20200628150911_InitialMigration', '3.1.5'),
('20200630194150_InitialMigration2', '3.1.5'),
('20200701092009_InitialCreate3', '3.1.5'),
('20200701163552_InitialMigration4', '3.1.5'),
('20200702150219_imm6', '3.1.5'),
('20200702184352_mig01', '3.1.5'),
('20200703100111_imm02', '3.1.5'),
('20200703203650_em04', '3.1.5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Comments_postId` (`postId`),
  ADD KEY `IX_Comments_userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Posts_userId` (`userId`),
  ADD KEY `IX_Posts_categoryId` (`categoryId`);

--
-- Indexes for table `reaction`
--
ALTER TABLE `reaction`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Reaction_postId` (`postId`),
  ADD KEY `IX_Reaction_userId` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reaction`
--
ALTER TABLE `reaction`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_Comments_Posts_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Comments_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_Posts_Category_categoryId` FOREIGN KEY (`categoryId`) REFERENCES `category` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Posts_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `reaction`
--
ALTER TABLE `reaction`
  ADD CONSTRAINT `FK_Reaction_Posts_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Reaction_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;