-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2016 at 12:17 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

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
-- Table structure for table `currentpostholders`
--

CREATE TABLE IF NOT EXISTS `currentpostholders` (
`id` int(11) NOT NULL,
  `name` text NOT NULL,
  `post` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `currentpostholders`
--

INSERT INTO `currentpostholders` (`id`, `name`, `post`, `username`, `password`) VALUES
(1, 'Dhaval SecondName', 'treasurer', 'treasurer', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `eventphotos`
--

CREATE TABLE IF NOT EXISTS `eventphotos` (
`id` int(11) NOT NULL,
  `eventid` int(11) NOT NULL,
  `path` varchar(100) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=224 ;

--
-- Dumping data for table `eventphotos`
--

INSERT INTO `eventphotos` (`id`, `eventid`, `path`) VALUES
(220, 1, '../events/1/dark_blue_gradient_by_msketchley-d3gs0d8%20-%20Copy.jpg'),
(221, 1, '../events/1/IMG-20141020-WA0002%20-%20Copy.jpg'),
(222, 1, '../events/1/IMG-20141020-WA0002.jpg'),
(223, 1, '../events/1/IMG-20141020-WA0003.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `events_newname`
--

CREATE TABLE IF NOT EXISTS `events_newname` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `postholders`
--

CREATE TABLE IF NOT EXISTS `postholders` (
`id` int(5) NOT NULL,
  `name` text NOT NULL,
  `dept` text NOT NULL,
  `enroll` text NOT NULL,
  `phone` text NOT NULL,
  `post` text NOT NULL,
  `term` text NOT NULL,
  `gender` text NOT NULL,
  `photo` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `postholders`
--

INSERT INTO `postholders` (`id`, `name`, `dept`, `enroll`, `phone`, `post`, `term`, `gender`, `photo`, `message`) VALUES
(1, 'Tirthraj Barot', 'IT', '130473116002', '9979430007', 'secretary', '2013-2014', 'Male', 'tirthrajbarot.jpg', 'It was an excellent experience working as the vice president of the club. It is a very special occasion for us as we are actually retiring from a club of which we were the founder members. This club not only taught us the goodwill of giving to society but also the management of various events. \r\n     Fortunately I got a really good team to work with. All the members of the team were very hardworking and for that now all of us are celebrating the success of our first year. If I get a chance, I would love to work with the club ahead.'),
(2, 'Vivek Vaghela', 'IT', '130473116016', '8000109930', 'President', '2013-2014', 'Male', 'vivekvaghela.jpg', ''),
(3, 'Mohit Shah', 'IT', '120470116036', '9016310001', 'Joint-Secretary', '2014-2015', 'Male', 'mohitshah.jpg', ''),
(4, 'Himesh Suthar', 'IT', '130473116012', '8000109930', 'Joint-Secretary', '2014-2015', 'Male', 'himeshsuthar.jpg', 'I had a nice experience to be a part of such a club.'),
(5, 'Dharamjeet Chauhan', 'Mechanical Engineering', '120470166005', '9925978741', 'President', '2014-2015', 'Male', 'dharamjeetchauhan.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE IF NOT EXISTS `testimonials` (
`id` int(11) NOT NULL,
  `author` text NOT NULL,
  `message` text NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `author`, `message`, `post`) VALUES
(1, 'William Genske', 'If I could give 100 stars for support and attention to detail I definitely would. I’ve purchased a good number of WordPress themes from various developers that look good on Themeforest but after you buy them you find numerous problems, bugs, crazy admin and very very poor support. I purchased the Avada theme and there were a couple of problems too, but the guys from ThemeFusion were remarkable – I really mean this. The speed of support and attention to detail is quite phenomenal. If you are considering buying this theme at all then take it from me, you will be extremely pleased.', 'Author of Avada'),
(2, 'Martha M. Masters', 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.', 'Marketing Manager at WikiTravel'),
(3, 'Dave Chase', '"NGOabroad is the only volunteer organization that could really make good use of my skills and many years of experience in consulting to  non-profits. Wandering around the NGOabroad website provides the first inkling that this is not just another "fill international holes with human pegs" organization.  Your first contact with Ann will confirm your positive hunches. NGOabroad engages you in a one-to-one process intended to first get to know your needs and wants and then to optimally match your \r\nskills with certain of her grassroots partner programs. Really now - is there any other way you''d rather try to do this?" ', 'New Hampshire, USA'),
(4, 'Jigar Joshi', 'Get Active has been very beneficial for us because it has told us the diet which consists of the right amount of nutrition in all food groups. It has made us play some enjoyable Indian games such as Kho-Kho, Kabaddi etc. earlier I used to have a lot of high fat food but after this program have reduced its intake and started taking more of healthy food. I enjoyed these activities very much and learnt that we should not just sit around and laze. We should engage ourselves in some energetic activities instead. I also learnt that we should have a proper diet. The activity in which we made the food pyramid has been my favorite', 'BVM College Vidhyanagar'),
(5, 'Jonathan Mast', 'Our firm has uses Divi as the base framework for over 40 client websites and we continue to use Divi on a regular basis due to the amazing flexibility that Divi provides our clients.\r\nAs a web design firm we can work with most any theme or design; we work with Divi because it saves us time and that translates into savings for our clients. Our clients love Divi because they have the ability to create amazing web page layouts using the Divi Page Builder without needing to understand the complexities of CSS, HTML or PHP.\r\nAll of this combined with Elegant Theme''s support and active user community make Divi and Elegant Themes a great choice for us and our clients.', 'No One at No one');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currentpostholders`
--
ALTER TABLE `currentpostholders`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventphotos`
--
ALTER TABLE `eventphotos`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events_newname`
--
ALTER TABLE `events_newname`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `postholders`
--
ALTER TABLE `postholders`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `currentpostholders`
--
ALTER TABLE `currentpostholders`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `eventphotos`
--
ALTER TABLE `eventphotos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=224;
--
-- AUTO_INCREMENT for table `postholders`
--
ALTER TABLE `postholders`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
