-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2017-12-06 12:41:51
-- 服务器版本： 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pinche`
--

-- --------------------------------------------------------

--
-- 表的结构 `trip`
--

DROP TABLE IF EXISTS `trip`;
CREATE TABLE IF NOT EXISTS `trip` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `begin` varchar(100) NOT NULL,
  `end` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `driver` varchar(100) NOT NULL,
  `day` varchar(32) NOT NULL,
  `time` varchar(32) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `trip`
--

INSERT INTO `trip` (`tid`, `begin`, `end`, `price`, `driver`, `day`, `time`) VALUES
(1, '西安', '运城', 69, 'LeBron James', '11.10', '4：30PM'),
(2, '太原', '运城', 135, 'James.KT', '11.20', '5：10PM'),
(3, '北京', '西安', 265, 'FuYun Lee', '11.25', '7：00AM'),
(4, '杭州', '三门峡', 350, 'YaoFeng Liu', '11.26', '8：00AM'),
(5, '苏州', '上海', 36, 'Lindy Lee', '11.28', '12：00AM'),
(6, '南昌', '运城', 350, 'JingYu Liu', '11.29', '5：00AM'),
(7, '大同', '太原', 110, 'Cheng Goo', '11.29', '7:30AM');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) NOT NULL,
  `upass` varchar(32) NOT NULL,
  `school` varchar(100) DEFAULT NULL,
  `yuanxi` varchar(100) DEFAULT NULL,
  `year` varchar(32) DEFAULT NULL,
  `number` varchar(32) DEFAULT NULL,
  `hometown` varchar(200) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `uname`, `upass`, `school`, `yuanxi`, `year`, `number`, `hometown`, `photo`) VALUES
(2, 'zhangsan', 'e10adc3949ba59abbe56e057f20f883e', '山西农业大学', '文理学院', '2014', '20140909840', '山西省临汾市', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
