-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 28, 2016 at 07:38 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rotaract`
--

-- --------------------------------------------------------

--
-- Table structure for table `postHolders`
--

CREATE TABLE IF NOT EXISTS `postHolders` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `dept` text NOT NULL,
  `enroll` text NOT NULL,
  `phone` text NOT NULL,
  `post` text NOT NULL,
  `term` text NOT NULL,
  `gender` text NOT NULL,
  `photo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `postHolders`
--

INSERT INTO `postHolders` (`id`, `name`, `dept`, `enroll`, `phone`, `post`, `term`, `gender`, `photo`) VALUES
(1, 'Tirthraj Barot', 'IT', '130473116002', '9979430007', 'Vice President', '2013-2014', 'Male', 'tirthrajbarot.jpg'),
(2, 'Vivek Vaghela', 'IT', '130473116016', '8000109930', 'President', '2013-2014', 'Male', 'vivekvaghela.jpg'),
(3, 'Mohit Shah', 'IT', '120470116036', '9016310001', 'Joint-Secretary', '2014-2015', 'Male', 'mohitshah.jpg'),
(4, 'Himesh Suthar', 'IT', '130473116012', '8000109930', 'Joint-Secretary', '2014-2015', 'Male', 'himeshsuthar.jpg'),
(5, 'Dharamjeet Chauhan', 'Mechanical Engineering', '120470166005', '9925978741', 'President', '2014-2015', 'Male', 'dharamjeetchauhan.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
