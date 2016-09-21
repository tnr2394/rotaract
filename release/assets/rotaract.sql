-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 04, 2016 at 04:43 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

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
-- Table structure for table `accountdetails`
--

CREATE TABLE IF NOT EXISTS `accountdetails` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(35) NOT NULL,
  `classN` varchar(35) NOT NULL,
  `amount` int(10) NOT NULL,
  `type` text NOT NULL,
  `details` varchar(50) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `contactquery`
--

CREATE TABLE IF NOT EXISTS `contactquery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `message` text NOT NULL,
  `datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `contactquery`
--

INSERT INTO `contactquery` (`id`, `name`, `email`, `phone`, `message`, `datetime`) VALUES
(2, 'Dharamjeet', 'dharamjeetchauhan8@gmail.com', '9979430007', 'Hello Rotaractors! You all are doing pretty good job!!!', '2016-02-19 11:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `currentpostholders`
--

CREATE TABLE IF NOT EXISTS `currentpostholders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `post` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `currentpostholders`
--

INSERT INTO `currentpostholders` (`id`, `name`, `post`, `username`, `password`) VALUES
(1, 'Dhaval SecondName', 'treasurer', 'treasurer', 'password'),
(2, 'Karan Rathod', 'Admin', 'admin', 'password'),
(3, 'Dharamjeet Chauhan', 'President', 'president', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `dashboard`
--

CREATE TABLE IF NOT EXISTS `dashboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `content` text NOT NULL,
  `lastEdit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `dashboard`
--

INSERT INTO `dashboard` (`id`, `name`, `content`, `lastEdit`) VALUES
(1, 'aboutClub', 'The Rotaract Club of V.V.P. Engineering College is a college level club that was first founded in 2013. This club intends to conduct events and activities that are in welfare of students of the college and the society as well. The club also provides a platform to the students to do their best in both, cultural and social activities. Rotaract Club of V.V.P. Engineering college is the child club of Rotary Club of Rajkot midtown. Similar to its parent club, this club also has a 1-year term. At the end of the term the new batch of students take charge of the club and the passed out members guide them to achieve their goals.\n\nThe Rotaract Club of V.V.P. Engineering college is taken care of by Mr Jignesh Ajmera, Lecturer in E.C. Department. He is the in-charge faculty of Rotaract Club.  With the kind concern and  bright vision of the Principal Dr. Sachin Parikh, the club conducts all its events under his supervision. This makes  club a vital part of college from students perspective.\n\nThe club has unbiased and fair system of selection of new postholders. The club has a panel of post holders who enjoy a term of 1 year. Every year the new postholders are selected by the working postholders considering their participation in various events, their vision for the society, their dedication and the leadership they portrayed during the events and activities of the club.The club members themselves take the initiatives for conducting different activites, they make teams and work hard, with all their dedication and brilliance to achieve their objectives. They win together and celebrate. If they fail, they support each other and do no stop. They again take another such initiative and work for success.\n\nThe prime purpose of the club is to provide opportunities to students to enhance thier knowledge and skills that will assist them in personal development, to address the physical and social needs of the society. At the end of each term, the members of the club leave, carrying with them a lot of memories and achievements. Thus, the club satisfies its purpose by providing the society with few more responsible citizens who think and will work for development and welfare of the society.', '2016-02-19 06:44:31');

-- --------------------------------------------------------

--
-- Table structure for table `eventphotos`
--

CREATE TABLE IF NOT EXISTS `eventphotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventid` int(11) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=460 ;

--
-- Dumping data for table `eventphotos`
--

INSERT INTO `eventphotos` (`id`, `eventid`, `path`) VALUES
(220, 1, 'events/1/dark_blue_gradient_by_msketchley-d3gs0d8%20-%20Copy.jpg'),
(221, 1, 'events/1/IMG-20141020-WA0002%20-%20Copy.jpg'),
(222, 1, 'events/1/IMG-20141020-WA0002.jpg'),
(223, 1, 'events/1/IMG-20141020-WA0003.jpg'),
(224, 1, 'events/1/dark_blue_gradient_by_msketchley-d3gs0d8%20-%20Copy.jpg'),
(225, 1, 'events/1/IMG-20141020-WA0002%20-%20Copy.jpg'),
(226, 1, 'events/1/IMG-20141020-WA0002.jpg'),
(227, 1, 'events/1/IMG-20141020-WA0003.jpg'),
(228, 1, 'events/1/dark_blue_gradient_by_msketchley-d3gs0d8.jpg'),
(229, 1, 'events/1/IMG-20141020-WA0002.jpg'),
(230, 1, 'events/1/IMG-20141020-WA0002 - Copy.jpg'),
(231, 1, 'events/1/microsoft_machine_learning.jpg'),
(232, 1, 'events/1/IMG-20141020-WA0003.jpg'),
(233, 1, 'events/1/Picture1.png'),
(234, 1, 'events/1/Picture2.png'),
(235, 1, 'events/1/speedtest.png'),
(236, 1, 'events/1/IMG-20141020-WA0002.jpg'),
(237, 1, 'events/1/IMG-20141020-WA0002 - Copy.jpg'),
(238, 1, 'events/1/IMG-20141020-WA0003.jpg'),
(239, 1, 'events/1/microsoft_machine_learning.jpg'),
(240, 1, 'events/1/Picture1.png'),
(241, 1, 'events/1/Picture2.png'),
(242, 1, 'events/1/speedtest.png'),
(243, 1, 'events/1/DSC03975.JPG'),
(244, 1, 'events/1/DSC03976.JPG'),
(245, 1, 'events/1/DSC03979.JPG'),
(246, 1, 'events/1/DSC03981.JPG'),
(247, 1, 'events/1/DSC03983.JPG'),
(248, 1, 'events/1/DSC03982.JPG'),
(249, 1, 'events/1/DSC03984.JPG'),
(250, 1, 'events/1/DSC03985.JPG'),
(251, 1, 'events/1/DSC03986.JPG'),
(252, 1, 'events/1/DSC03989.JPG'),
(253, 1, 'events/1/DSC03991.JPG'),
(254, 1, 'events/1/DSC03990.JPG'),
(255, 1, 'events/1/DSC03992.JPG'),
(256, 1, 'events/1/DSC03993.JPG'),
(257, 1, 'events/1/DSC03994.JPG'),
(258, 1, 'events/1/DSC03995.JPG'),
(259, 1, 'events/1/DSC03998.JPG'),
(260, 1, 'events/1/DSC03997.JPG'),
(261, 1, 'events/1/DSC03999.JPG'),
(262, 1, 'events/1/DSC04001.JPG'),
(263, 1, 'events/1/DSC04002.JPG'),
(264, 1, 'events/1/DSC04004.JPG'),
(265, 1, 'events/1/DSC04003.JPG'),
(266, 1, 'events/1/DSC04005.JPG'),
(267, 1, 'events/1/DSC03975.JPG'),
(268, 1, 'events/1/DSC03976.JPG'),
(269, 1, 'events/1/DSC03979.JPG'),
(270, 1, 'events/1/DSC03981.JPG'),
(271, 1, 'events/1/DSC03982.JPG'),
(272, 1, 'events/1/DSC03983.JPG'),
(273, 1, 'events/1/DSC03984.JPG'),
(274, 1, 'events/1/DSC03985.JPG'),
(275, 1, 'events/1/DSC03986.JPG'),
(276, 1, 'events/1/DSC03989.JPG'),
(277, 1, 'events/1/DSC03990.JPG'),
(278, 1, 'events/1/DSC03991.JPG'),
(279, 1, 'events/1/DSC03992.JPG'),
(280, 1, 'events/1/DSC03993.JPG'),
(281, 1, 'events/1/DSC03994.JPG'),
(282, 1, 'events/1/DSC03995.JPG'),
(283, 1, 'events/1/DSC03997.JPG'),
(284, 1, 'events/1/DSC03998.JPG'),
(285, 1, 'events/1/DSC03999.JPG'),
(286, 1, 'events/1/DSC04001.JPG'),
(287, 1, 'events/1/DSC04002.JPG'),
(288, 1, 'events/1/DSC04003.JPG'),
(289, 1, 'events/1/DSC04004.JPG'),
(290, 1, 'events/1/DSC04005.JPG'),
(291, 1, 'events/1/DSC03975.JPG'),
(292, 1, 'events/1/DSC04001.JPG'),
(293, 1, 'events/1/DSC03975.JPG'),
(294, 15, 'events/1/DSC03832.JPG'),
(298, 15, 'events/15/DSC03820.JPG'),
(299, 15, 'events/15/DSC03825.JPG'),
(300, 15, 'events/15/DSC03832.JPG'),
(301, 15, 'events/15/DSC03835.JPG'),
(302, 15, 'events/15/DSC03838.JPG'),
(303, 15, 'events/15/DSC03841.JPG'),
(304, 15, 'events/15/DSC03843.JPG'),
(305, 15, 'events/15/DSC03844.JPG'),
(306, 15, 'events/15/DSC03845.JPG'),
(307, 15, 'events/15/DSC03847.JPG'),
(308, 15, 'events/15/DSC03850.JPG'),
(309, 15, 'events/15/DSC03975.JPG'),
(310, 15, 'events/15/DSC03976.JPG'),
(315, 15, 'events/15/DSC03984.JPG'),
(316, 15, 'events/15/DSC03985.JPG'),
(317, 15, 'events/15/DSC03986.JPG'),
(318, 15, 'events/15/DSC03989.JPG'),
(319, 15, 'events/15/DSC03990.JPG'),
(320, 15, 'events/15/DSC03991.JPG'),
(321, 15, 'events/15/DSC03992.JPG'),
(322, 15, 'events/15/DSC03993.JPG'),
(323, 15, 'events/15/DSC03994.JPG'),
(324, 15, 'events/15/DSC03995.JPG'),
(325, 15, 'events/15/DSC03997.JPG'),
(326, 15, 'events/15/DSC03998.JPG'),
(327, 15, 'events/15/DSC03999.JPG'),
(328, 15, 'events/15/DSC04001.JPG'),
(329, 15, 'events/15/DSC04002.JPG'),
(330, 15, 'events/15/DSC04003.JPG'),
(331, 15, 'events/15/DSC04004.JPG'),
(332, 15, 'events/15/DSC04005.JPG'),
(335, 15, 'events/15/DSC04044.JPG'),
(336, 15, 'events/15/DSC04045.JPG'),
(337, 15, 'events/15/DSC04047.JPG'),
(339, 15, 'events/15/DSC04051.JPG'),
(340, 15, 'events/15/DSC04070.JPG'),
(341, 15, 'events/15/DSC04072.JPG'),
(342, 15, 'events/15/DSC04073.JPG'),
(343, 15, 'events/15/DSC04074.JPG'),
(344, 15, 'events/15/DSC04075.JPG'),
(345, 15, 'events/15/DSC04076.JPG'),
(346, 15, 'events/15/DSC04077.JPG'),
(347, 15, 'events/15/DSC04078.JPG'),
(348, 15, 'events/15/DSC04079.JPG'),
(349, 15, 'events/15/DSC04083.JPG'),
(350, 15, 'events/15/DSC04084.JPG'),
(351, 15, 'events/15/DSC04085.JPG'),
(352, 15, 'events/15/DSC04087.JPG'),
(353, 15, 'events/15/DSC04092.JPG'),
(354, 15, 'events/15/DSC04093.JPG'),
(355, 15, 'events/15/DSC04094.JPG'),
(356, 15, 'events/15/DSC04095.JPG'),
(357, 15, 'events/15/DSC04096.JPG'),
(358, 15, 'events/15/DSC04097.JPG'),
(359, 15, 'events/15/DSC04098.JPG'),
(360, 15, 'events/15/DSC04099.JPG'),
(361, 15, 'events/15/DSC04100.JPG'),
(362, 15, 'events/15/DSC04101.JPG'),
(363, 15, 'events/15/DSC04102.JPG'),
(364, 15, 'events/15/DSC04103.JPG'),
(365, 15, 'events/15/DSC04104.JPG'),
(366, 15, 'events/15/DSC04105.JPG'),
(367, 15, 'events/15/DSC04106.JPG'),
(368, 15, 'events/15/DSC04107.JPG'),
(369, 15, 'events/15/DSC04108.JPG'),
(370, 15, 'events/15/DSC04109.JPG'),
(371, 15, 'events/15/DSC04112.JPG'),
(372, 15, 'events/15/DSC04115.JPG'),
(373, 15, 'events/15/DSC04116.JPG'),
(374, 15, 'events/15/DSC04117.JPG'),
(391, 3, 'events/3/dharamjeetchauhan.jpg'),
(392, 3, 'events/3/himeshsuthar.jpg'),
(393, 3, 'events/3/mohitshah.jpg'),
(394, 3, 'events/3/tirthrajbarot.jpg'),
(406, 3, 'events/3/IMG-20141020-WA0002 - Copy.jpg'),
(407, 3, 'events/3/IMG-20141020-WA0002.jpg'),
(408, 3, 'events/3/IMG-20141020-WA0003.jpg'),
(409, 3, 'events/3/microsoft_machine_learning.jpg'),
(410, 16, 'events/16/DSC03825.JPG'),
(411, 16, 'events/16/DSC03820.JPG'),
(412, 16, 'events/16/DSC03832.JPG'),
(413, 16, 'events/16/DSC03835.JPG'),
(415, 16, 'events/16/DSC03838.JPG'),
(416, 16, 'events/16/DSC03843.JPG'),
(421, 16, 'events/16/IMG-20141020-WA0002.jpg'),
(422, 16, 'events/16/IMG-20141020-WA0002 - Copy.jpg'),
(423, 16, 'events/16/IMG-20141020-WA0003.jpg'),
(425, 9, 'events/9/dharamjeetchauhan.jpg'),
(426, 9, 'events/9/DSC00119.JPG'),
(427, 9, 'events/9/aniketpandya.jpg'),
(428, 9, 'events/9/himeshsuthar.jpg'),
(429, 9, 'events/9/IMG-20141020-WA0002 - Copy.jpg'),
(430, 9, 'events/9/mohitshah.jpg'),
(431, 9, 'events/9/tirthrajbarot.jpg'),
(432, 9, 'events/9/vivekvaghela.jpg'),
(433, 17, 'events/17/10610481_523205417812289_317109204443073622_n.jpg'),
(434, 9, 'events/9/560209_612944712171692_4693219679552282524_n.jpg'),
(437, 18, 'events/18/ss3.png'),
(439, 19, 'events/19/DSC00119.JPG'),
(443, 19, 'events/19/Screenshot from 2016-02-17 21:04:53.png'),
(445, 19, 'events/19/Screenshot from 2015-09-15 15:22:53.png'),
(446, 19, 'events/19/Screenshot from 2015-10-28 08:55:28.png'),
(447, 19, 'events/19/Screenshot from 2015-11-21 13:26:55.png'),
(448, 19, 'events/19/Screenshot from 2015-12-02 11:59:37.png'),
(449, 19, 'events/19/Screenshot from 2016-02-17 21:04:53.png'),
(452, 19, 'events/19/12247144_870865336342471_3764974406760427702_n.jpg'),
(453, 19, 'events/19/Screenshot from 2015-10-28 08:55:28.png'),
(454, 19, 'events/19/Screenshot from 2015-11-21 13:26:55.png'),
(455, 19, 'events/19/Screenshot from 2015-12-02 11:59:37.png'),
(456, 19, 'events/19/Screenshot from 2016-02-17 21:04:53.png'),
(457, 19, 'events/19/Screenshot from 2016-02-17 21:27:36.png'),
(458, 18, 'events/18/Screenshot from 2016-02-17 21:04:53.png'),
(459, 18, 'events/18/Screenshot from 2016-02-17 21:27:36.png');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `place` text NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `achievement` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `date`, `place`, `name`, `description`, `achievement`) VALUES
(3, '2016-01-12', 'Rajkot', 'Utraan', 'To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. \n\nPlacing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.', 0),
(9, '2016-01-15', 'Ahmedabad', 'Test Event 1', 'To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.', 0),
(15, '2015-01-16', 'Rajkot', 'Test Event 2', 'Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing. That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.', 0),
(16, '2016-02-02', 'Ahmedabad', 'U.S.Pizza', 'Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing. That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.', 1),
(17, '2015-01-16', 'Rajkot', 'Bhagwad Saptah', 'Rotary Club of Rajkot Midtown is a leading service organization devoted to kindle kindness for mankind. Care and concern for the community is a culture cultivated by the passion and compassion of its members. It has embellished Rajkot with heart rendering and soul satisfying projects like Lapasari reservoir dam, Dolls Museum, earthquake rehabilitation township and school at Metoda, Rotary Midtown Library, Swashray vocational center for women and Manjul playschool-- all of which have brought happiness and harmony for our city.\nAs this unique service society stands on the threshold of its 21st inception-the age of maturity, the age of optimum natural growth, it asked itself a different and the difficult question--"When was the last time that you did something for the first time?"\nA medical center with basic health facilities under one roof has been a cherished dream. Medical camps and activities in collaboration with other service groups are conducted through the year. Serving and supporting, soothing and saving the sick is a surprisingly supreme satisfaction-the sanctum of "Service to man is service to God". To heal is to give hope; to give hope is to hail happiness.\nThe Shrimad Bhagwat Katha - the sacred summit of salvation was the gratifying gratitude, the blissful blessing, the divine devotion for achieving the aim. \nRotary Club of Rajkot Midtown is organizing the Shrimad Bhagwat Katha on Race Course grounds from 17th January to 23rd January, 2015. The timings are 3 pm to 6 pm and it is an open for all invitation. It is a sincere and cordial request for all to join in for this mega service project-the magnum opus-the Maha Yagna. The Vyas Peeth will be adorned by the revered Shri Yadunathji Bawa of Kadi, an orator par excellence and a service seer himself. His simple and fluent flow of language as well as understanding and explanation of the nuances of this scripture is to be seen to be believed. It will certainly be a once in a lifetime experience, not to be missed. His discourses on time management are supposed to be interesting and riveting. His sessions on a special kind of Yoga are also quite luminescent.\nThe Shrimad Bhagwat Katha is considered to be a sacred book for Hindus. It consists of divine eternal tales of supreme Lord. It is a treasure trove of lessons of life. It imparts transcendental knowledge with tremendous insight and profound vision. It offers solace, comfort and equanimity and provides emancipation from ignorance and fear. Metamorphosis may manifest. \nRace Course, Rotary and Rajkot beckon. This will be an experience to enjoy and enthrall, enlighten and enliven. An ethereal event. Celebrate the celestial charm of charity. Giving is living. Giving gives prosperity for posterity. As Sir Winston Churchill put it- "We make a living by what we get; we make a life by what we give". Come and share the sweetness of service.\nYou can also get a bit of goodness by booking POTHI which will be as sacred and lucky opportuniry as hosting a Bhagwad saptah on your own. \nAlso visit them on FB on : https://www.facebook.com/rotarybhagwatkatha', 1),
(18, '2016-02-08', 'Dikra nu Ghar-Vruddhashram, Rajkot', 'Visit to Old Age Home', 'Rotaractors went to an old age home ``Smt. R. D. Gardi ``Dikra nu Ghar – Vrudhaashram``. The owner was Mukesh Doshi and he warmly welcomed all of us. He guided us through the old age home. First of all we were taken to the divine temple of lord shiva, then we were taken to the temple of `Bharat Mata` which was the center of attraction for all of us. We observed the dining area where all elders sit together for meals, we saw their store room where they keep their groceries. There was also mini-theater and an auditorium under construction followed by a beautiful garden where elders sit and enjoy lovely sunrise and sunset. After then, he took us to elders who were living there, we visited their residency.\nElders laughed and talked their heart out with Rotaractors. They also shared some of their incidents. It was worth spending time there. There was each and every facility for those elders proper nurture. They treated us as if they have got their own kids and we were also happy for their love.\nEvery Rotaractor were really happy and got many lessons of life. Elders are treasure of love and experience, all they wish is love and small part of our time.\nThank you Mukesh Doshi for letting us visit the Old age home and congratulations to every rotaractor who were there.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `membersmessage`
--

CREATE TABLE IF NOT EXISTS `membersmessage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `message` text NOT NULL,
  `for` text NOT NULL,
  `xid` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `membersmessage`
--

INSERT INTO `membersmessage` (`id`, `name`, `message`, `for`, `xid`, `date`) VALUES
(1, 'Miloni Modi', 'To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.', 'events', 9, '2016-02-06 11:06:35'),
(2, 'Tirthraj Barot', 'Hi Giu, I am not dealing with the text when it is being input...rather when it gets displayed and break my table layout. The querystring text is displayed in a DIV called .tasks-overflow ', 'events', 9, '2016-02-06 11:52:08'),
(3, 'Dharamjeet Chauhan', 'In the rally for aiims,  the whole and soul idea was of him.  We all supported him. He guided me everytime as it was my first and the biggest event. He thought that a team of 25 would work. But i thought it to be a small team. Above all,  he had decided everyone''s work and my work was to handle everything  i. e.  The outside stuff. He manged the whole thing very well. And it was  greatly appreciable', 'postholders', 1, '2016-02-06 11:50:47'),
(4, 'Dharamjeet Chauhan', 'At this time we had managed enough of people who can work with us. Tirthraj firstly denied me to take up farewell but I said we need to take it to keep the name of Rotaract going,  so we arranged a meeting for all members in which it was finally decided to perform. We dint knew  that we had to do hardwork that was above our level but when Tirthraj was there to motivate it was okk for all of us. And that time he was just like an angry man... But it was necessary for the work to be completed on time. We all were satisfied with the performance though we didonly for a small part. After the performance,  Tirthraj opened my vision of appreciating the one who performed well and taught me a new lesson that I was of not aware of.', 'events', 9, '2016-02-06 11:51:55'),
(5, 'Dharamjeet Chauhan', 'At this time we had managed enough of people who can work with us. Tirthraj firstly denied me to take up farewell but I said we need to take it to keep the name of Rotaract going,  so we arranged a meeting for all members in which it was finally decided to perform. We dint knew  that we had to do hardwork that was above our level but when Tirthraj was there to motivate it was okk for all of us. And that time he was jus like an angry man... But it was necessary for the work to be completed on time. We all were satisfied with the performance though we didonly for a small part. After the performance,  Tirthraj opened my vision of appreciating the one who performed well and taught me a new lesson that I was of not aware of.', 'events', 17, '2016-02-06 12:00:55'),
(6, 'Aniket Pandya', 'He is a good guy', 'postholders', 1, '2016-02-07 07:09:42'),
(8, 'Heer Oza', 'I was extremely joyful distributing sweets in slums.', 'events', 3, '2016-02-07 07:12:06'),
(9, 'Bhishmapratapsinh Dabhi', 'Truly inspiration to all of us. It was great working with you.', 'postholders', 1, '2016-02-07 09:20:52'),
(10, 'Karan Rathod', 'Thirth was a great leader when I worked under his leadership.', 'postholders', 6, '2016-02-12 04:45:06'),
(11, 'Karan Maru', 'Dharamjeet chauhan is good leader and I learned many things  from him during his term', 'postholders', 5, '2016-02-15 09:59:18'),
(12, 'Tirthraj Barot', 'It was nice working with dharamjeet chauhan.', 'postholders', 5, '2016-02-15 09:59:59'),
(13, 'Father James', 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.   An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as.', 'postholders', 5, '2016-02-15 10:00:28'),
(14, 'Dharamjeet Chauhan', 'Such kind of events should be avoided.', 'events', 19, '2016-02-15 10:01:12'),
(15, 'Karan Maru', 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.   An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as.', 'events', 19, '2016-02-15 10:01:43');

-- --------------------------------------------------------

--
-- Table structure for table `postholders`
--

CREATE TABLE IF NOT EXISTS `postholders` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `dept` text NOT NULL,
  `enroll` text NOT NULL,
  `phone` text NOT NULL,
  `post` text NOT NULL,
  `term` text NOT NULL,
  `gender` text NOT NULL,
  `photo` text NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `postholders`
--

INSERT INTO `postholders` (`id`, `name`, `dept`, `enroll`, `phone`, `post`, `term`, `gender`, `photo`, `message`) VALUES
(2, 'Vivek Vaghela', 'IT', '130473116002', '9979430007', 'Treasurer', '2013-2014', 'Male', 'vivekvaghela.jpg', 'It was an excellent experience working as the vice president of the club. It is a very special occasion for us as we are actually retiring from a club of which we were the founder members. This club not only taught us the goodwill of giving to society but also the management of various events. \r\n     Fortunately I got a really good team to work with. All the members of the team were very hardworking and for that now all of us are celebrating the success of our first year. If I get a chance, I would love to work with the club ahead.'),
(3, 'Mohit Shah', 'IT', '130473116002', '9979430007', 'Treasurer', '2013-2014', 'Male', 'mohitshah.jpg', 'It was an excellent experience working as the vice president of the club. It is a very special occasion for us as we are actually retiring from a club of which we were the founder members. This club not only taught us the goodwill of giving to society but also the management of various events. \r\n     Fortunately I got a really good team to work with. All the members of the team were very hardworking and for that now all of us are celebrating the success of our first year. If I get a chance, I would love to work with the club ahead.'),
(4, 'Himesh Suthar', 'IT', '130473116002', '9979430007', 'Treasurer', '2013-2014', 'Male', 'himeshsuthar.jpg', 'It was an excellent experience working as the vice president of the club. It is a very special occasion for us as we are actually retiring from a club of which we were the founder members. This club not only taught us the goodwill of giving to society but also the management of various events. \r\n     Fortunately I got a really good team to work with. All the members of the team were very hardworking and for that now all of us are celebrating the success of our first year. If I get a chance, I would love to work with the club ahead.'),
(5, 'Dharamjeet Chauhan', 'IT', '130473116002', '9979430007', 'Secretary', '2015-2016', 'Male', 'dharamjeetchauhan.jpg', 'Rotaractors went to an old age home ``Smt. R. D. Gardi ``Dikra nu Ghar – Vrudhaashram``. The owner was Mukesh Doshi and he warmly welcomed all of us. He guided us through the old age home. First of.'),
(6, 'Tirthraj Barot', 'IT', '130473116002', '9979430007', 'Governor', '2015-2016', 'Male', 'tirthrajbarot.jpg', 'It was an excellent experience working as the vice president of the club. It is a very special occasion for us as we are actually retiring from a club of which we were the founder members. This club not only taught us the goodwill of giving to society but also the management of various events. \r\n     Fortunately I got a really good team to work with. All the members of the team were very hardworking and for that now all of us are celebrating the success of our first year. If I get a chance, I would love to work with the club ahead.'),
(7, 'Bhishmpratapsinh Dabhi', 'I.T.', '130470116007', '9429096676', 'President', '2015-2016', 'Male', '12247144_870865336342471_3764974406760427702_n.jpg', 'Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` text NOT NULL,
  `message` text NOT NULL,
  `post` text NOT NULL,
  PRIMARY KEY (`id`)
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
