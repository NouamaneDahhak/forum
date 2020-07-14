-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2020 at 06:06 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

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
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `Id` int(11) NOT NULL,
  `title` tinyint(1) NOT NULL,
  `date` longtext DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `epingler` tinyint(1) NOT NULL DEFAULT 0,
  `postId` int(11) NOT NULL,
  `postId1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`Id`, `title`, `content`, `img`, `date`, `views`, `nbComment`, `userId`, `categoryId`, `nbdislike`, `nblike`, `epingler`, `postId`, `postId1`) VALUES
(1, 'group1', 'content', 'blog-2-806x440.png', '02/03/1990', '7', '5', 4, 2, 0, 0, 0, 0, NULL),
(2, 'group 2', 'content 2', 'blog-2-806x440.png', '02/03/1990', '10', '10', 1, 1, 0, 0, 0, 0, NULL),
(4, 'group3', 'content3', 'blog-2-806x440.png', '02/03/1990', '7', '5', 4, 1, 0, 0, 0, 0, NULL),
(5, 'group 5', 'content 4', 'blog-2-806x440.png', '02/03/1990', '10', '10', 2, 2, 0, 0, 0, 0, NULL),
(6, 'group4 ', 'content', 'blog-2-806x440.png', '09/07/2020 4:09', '0', '0', 4, 1, 0, 0, 0, 1, NULL),
(7, 'group 6', 'contentaa', 'blog-2-806x440.png', '09/07/2020 4:09', '5', '0', 1, 2, 0, 0, 0, 0, NULL),
(8, 'post 1-1', 'contentaa', 'blog-2-806x440.png', '09/07/2020 4:09', '0', '0', 1, 2, 0, 0, 0, 5, NULL),
(9, 'post 1 -2', 'content', 'blog-2-806x440.png', '09/07/2020 4:11', '1', '0', 1, 2, 0, 0, 0, 5, NULL),
(10, 'post 2 1 -1', 'content', 'blog-2-806x440.png', '09/07/2020 4:30', '2', '0', 1, 2, 0, 0, 0, 7, NULL),
(11, 'post2 -2 ', 'content', 'blog-2-806x440.png', '14/07/2020 11:21', '0', '0', 1, 2, 0, 0, 0, 7, NULL),
(12, 'group 1 cat 2', 'group 1 cat 2', 'blog-2-806x440.png', '14/07/2020 2:06', '0', '0', 1, 2, 0, 0, 0, 7, NULL),
(13, 'group1 cat 2 2 eme post', 'group1 cat 2 2 eme post', 'blog-2-806x440.png', '14/07/2020 2:07', '0', '0', 1, 2, 0, 0, 0, 1, NULL),
(17, 'title', NULL, NULL, '14/07/2020 2:25', '0', '0', 4, 1, 0, 0, 0, 0, NULL),
(18, 'title', NULL, NULL, '14/07/2020 2:25', '0', '0', 4, 1, 0, 0, 0, 0, NULL),
(19, 'group cat 1', NULL, NULL, '14/07/2020 2:27', '0', '0', 4, 1, 0, 0, 0, 0, NULL),
(20, 'titlepost new grou cat 1', 'post new grou cat 1', 'blog-2-806x440.png', '14/07/2020 2:27', '1', '0', 1, 1, 0, 0, 0, 19, NULL),
(21, 'salle mopderateur g 1', NULL, NULL, '14/07/2020 2:40', '0', '0', 4, 3, 0, 0, 0, 0, NULL);

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
  `Usertype` longtext DEFAULT NULL,
  `Nom` longtext DEFAULT NULL,
  `Region` longtext DEFAULT NULL,
  `adresse` longtext DEFAULT NULL,
  `codePostal` longtext DEFAULT NULL,
  `emailSecondaire` longtext DEFAULT NULL,
  `metier` longtext DEFAULT NULL,
  `nomEntreprise` longtext DEFAULT NULL,
  `pays` longtext DEFAULT NULL,
  `prenom` longtext DEFAULT NULL,
  `telephone1` longtext DEFAULT NULL,
  `telephone2` longtext DEFAULT NULL,
  `ville` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `username`, `password`, `email`, `img`, `Usertype`, `Nom`, `Region`, `adresse`, `codePostal`, `emailSecondaire`, `metier`, `nomEntreprise`, `pays`, `prenom`, `telephone1`, `telephone2`, `ville`) VALUES
(1, 'user1-', 'jo', NULL, NULL, 'Modérateur', 'a', 'jo', 'jo', 'jo', 'jo', 'jo', 'entr', 'jo', 'jo', 'jo', 'jo', 'jo'),
(2, 'user2', NULL, NULL, 'images.png', 'Invité', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'user3', NULL, NULL, 'images.png', 'Invité', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'user4', 'user4', 'user4', 'images.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'user5', 'user5', 'user5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'user6', 'user6', 'user6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'aaaaaeeee', NULL, 'aaaa@aaaa.com', NULL, 'Administrateur', NULL, 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa'),
(8, 'aaaa--', NULL, 'aaaa@aaaa.com', NULL, 'Administrateur', NULL, 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa1', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa'),
(9, 'aaaa---', NULL, 'aaaa@aaaa.com', NULL, NULL, NULL, 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa');

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
('20200703203650_em04', '3.1.5'),
('20200709074321_mig03', '3.1.5'),
('20200714104040_mig003', '3.1.5'),
('20200714123755_mig008', '3.1.5'),
('20200714123858_mig009', '3.1.5'),
('20200714124252_mig0010', '3.1.5'),
('20200714124609_mig0011', '3.1.5'),
('20200714124716_mig0012', '3.1.5'),
('20200714125348_mig0015', '3.1.5'),
('20200714125507_mig0016', '3.1.5');

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
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Group_userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Posts_userId` (`userId`),
  ADD KEY `IX_Posts_categoryId` (`categoryId`),
  ADD KEY `IX_Posts_postId1` (`postId1`);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
-- Constraints for table `group`
--
ALTER TABLE `group`
  ADD CONSTRAINT `FK_Group_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_Posts_Category_categoryId` FOREIGN KEY (`categoryId`) REFERENCES `category` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Posts_Posts_postId1` FOREIGN KEY (`postId1`) REFERENCES `posts` (`Id`),
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
