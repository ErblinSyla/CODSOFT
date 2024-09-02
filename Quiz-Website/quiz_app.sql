-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2024 at 04:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question_text` text NOT NULL,
  `answer_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `quiz_id`, `question_text`, `answer_text`) VALUES
(1, 1, 'what is 5 + 5?', '10'),
(2, 1, 'what is 5 + 6?', '11'),
(3, 2, 'What does USA stand for?', 'United States of America'),
(4, 2, 'What is the capital of Kosovo?', 'Prishtina'),
(5, 2, 'What is the capital of USA?', 'Washington DC'),
(6, 3, '2+3?', '5'),
(7, 3, '5+1', '6'),
(8, 3, '3+4', '7'),
(9, 4, 'what is 5+7', '12'),
(10, 5, 'what is 6+1', '7'),
(11, 5, 'what does usa mean', 'united states of america'),
(12, 6, 'What is 5+5?', '10'),
(13, 6, 'What does USA stand for?', 'United States of America'),
(14, 7, 'what is 5 + 5?', '10'),
(15, 7, 'What does USA stand for?', 'United States of America'),
(16, 8, 'What is 7+1?', '8'),
(17, 8, 'What is 6+5?', '11'),
(18, 8, 'What is 8+1', '9'),
(19, 8, 'What is 1+0?', '1'),
(20, 9, 'What is 6+1?', '7'),
(21, 9, 'What is 1+9?', '10'),
(22, 9, 'What is 2+3?', '5');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `title`, `user_id`) VALUES
(1, 'Erblin\'s Quiz', 0),
(2, 'My Quiz', 0),
(4, 'Bot\'s Quizz', 2),
(7, 'Erblin\'s Quiz', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password_Hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Username`, `Password_Hash`) VALUES
(1, 'Erblin', '$2y$10$BoRy3CfOjlp46awUIOUvcuLuLr/4zCa9fyydtatSx6EBla3EYvjty'),
(2, 'Bot', '$2y$10$crxOvQVKrqd5F9OzGsy5GuaNNHwY0BL4z5ay./bP222N2sj0K..q6'),
(5, 'Hello', '$2y$10$Q/Fn4baWnGDY2bNq47POCO9NzUR/7fZBQAGbHJiWyK9gj5c9LASdS'),
(6, 'Bot123', '$2y$10$Xwodo8OwpfPUFZG/2C0a4OPxvelqwaj3avxge5sIfOrsuo/DthoeG'),
(7, 'Cimi', '$2y$10$voN52NIHquH4wRBEoN4/buAgsBJT.3eNFwWsa7d0hkxtRMr3XvGI2'),
(8, 'Bot Account', '$2y$10$fvDJyRNK1B.GgIh5hoV.iOkjtZhAxeBsnpsCelW2VtEbPaDYsoUP.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
