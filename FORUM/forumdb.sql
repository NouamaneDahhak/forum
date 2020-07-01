-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2020 at 06:37 AM
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
-- Database: `forumdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `Id` int(11) NOT NULL,
  `content` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL,
  `date` longtext DEFAULT NULL,
  `commentId` int(11) DEFAULT NULL,
  `postId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`Id`, `content`, `img`, `date`, `commentId`, `postId`, `userId`) VALUES
(1, 'comment 1 p 1 u 1', 'img1.png', '02/03/2012', NULL, 1, 1);

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
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`Id`, `title`, `content`, `img`, `date`, `views`, `nbComment`, `userId`) VALUES
(1, 'title1', 'content1', 'img1', '02/03/1990', '5', '5', 1),
(2, 'title2', 'content2', 'img2', '02/03/1990', '10', '15', 2),
(3, 'title3', 'content3', 'img3', '02/03/1990', '10', '15', 2),
(4, 'title4', 'content4', 'img4', '02/03/1990', '10', '15', 2),
(5, 'title5', 'content5', 'img5', '02/03/1990', '50', '5', 2),
(7, 'title7', 'content7', 'img7', '02/03/1990', '50', '7', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `username` longtext DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `img` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `username`, `password`, `email`, `img`) VALUES
(1, 'Nouamane', 'Dahhak', 'nouamanedahhak@gmail.com', 'img.png'),
(2, 'Nouamane2', 'Dahhak2', 'nouamanedahhak2@gmail.com', 'img2.png'),
(3, 'Nouamane3', 'Dahhak3', 'nouamanedahhak3@gmail.com', 'img3.png'),
(4, 'Nouamane4', 'Dahhak4', 'nouamanedahhak4@gmail.com', 'img4.png'),
(5, 'Nouamane5', 'Dahhak5', 'nouamanedahhak5@gmail.com', 'img5.png');

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
('20200630194150_InitialMigration2', '3.1.5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Comments_commentId` (`commentId`),
  ADD KEY `IX_Comments_postId` (`postId`),
  ADD KEY `IX_Comments_userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Posts_userId` (`userId`);

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
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_Comments_Comments_commentId` FOREIGN KEY (`commentId`) REFERENCES `comments` (`Id`),
  ADD CONSTRAINT `FK_Comments_Posts_postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`Id`),
  ADD CONSTRAINT `FK_Comments_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_Posts_User_userId` FOREIGN KEY (`userId`) REFERENCES `user` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
