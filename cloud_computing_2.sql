-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2019 at 10:53 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloud_computing_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `donate`
--

CREATE TABLE `donate` (
  `UniqueDonateId` int(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `name_of_organization` text,
  `pickup_address` text,
  `city` text,
  `zip_code` text,
  `pickup_date` text,
  `pickup_time` text,
  `onsite_contact_first_name` text,
  `onsite_contact_last_name` text,
  `contact_email` text,
  `contact_phone` text,
  `type_of_food` text,
  `is_any_of_it_frozen` text,
  `any_additional_pickup_instructions` text,
  `may_we_publicize_your_donation` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donate`
--

INSERT INTO `donate` (`UniqueDonateId`, `username`, `name_of_organization`, `pickup_address`, `city`, `zip_code`, `pickup_date`, `pickup_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`, `type_of_food`, `is_any_of_it_frozen`, `any_additional_pickup_instructions`, `may_we_publicize_your_donation`) VALUES
(18, 'darshandagly@gmail.com', '', '1005 E University Dr', 'Tempe', '85281', '2019-05-02', '13:00', 'Darshan', 'Dagly', 'darshandagly@gmail.com', '4805163478', 'Rice, Bread and Milk', 'Refrigerate Milk', 'Call me when you reach here', ''),
(19, 'v@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(20, 'v@v.com', '1', '', 'Phoenix', '', '', '', '', '', '', '', '', '', '', ''),
(21, 'v@v.com', '', '', 'Phoenix', '', '', '', '', '', '', '', '', '', '', ''),
(22, 'v@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `donate_request`
--

CREATE TABLE `donate_request` (
  `UniqueDonateId` int(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `name_of_organization` text,
  `pickup_address` text,
  `city` text,
  `zip_code` text,
  `pickup_date` text,
  `pickup_time` text,
  `onsite_contact_first_name` text,
  `onsite_contact_last_name` text,
  `contact_email` text,
  `contact_phone` text,
  `type_of_food` text,
  `is_any_of_it_frozen` text,
  `any_additional_pickup_instructions` text,
  `may_we_publicize_your_donation` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donate_request`
--

INSERT INTO `donate_request` (`UniqueDonateId`, `username`, `name_of_organization`, `pickup_address`, `city`, `zip_code`, `pickup_date`, `pickup_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`, `type_of_food`, `is_any_of_it_frozen`, `any_additional_pickup_instructions`, `may_we_publicize_your_donation`) VALUES
(1, 'vi@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, 'vii@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 'vii@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'vii@v.com', '', '', 'Tempe', '', '', '', '', '', '', '', '', '', '', ''),
(5, 'vii@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(6, 'vii@v.com', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uniqueid` int(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` varchar(1) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone_num` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uniqueid`, `username`, `password`, `type`, `name`, `phone_num`) VALUES
(17, 'darshandagly@gmail.com', '12345678', '0', 'Darshan', '4805163478'),
(18, 'ddagly@asu.edu', '12345678', '1', 'DD', '4805163478'),
(19, 'v@v.com', 'Pizza_123', '0', 'Viken', '4808429465'),
(20, 'vi@v.com', 'Pizza_123', '1', 'Viken1', '4808429465'),
(21, 'vii@v.com', 'Pizza_123', '1', 'Viken', '4851234565'),
(22, 'vparikh2@asu.edu', 'Pizza_123', '0', 'Viken', '4808429465');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer`
--

CREATE TABLE `volunteer` (
  `UniqueVolunteerId` int(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `address` text,
  `city` text,
  `zip_code` text,
  `volunteer_date` text,
  `volunteer_time` text,
  `onsite_contact_first_name` text,
  `onsite_contact_last_name` text,
  `contact_email` text,
  `contact_phone` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `volunteer`
--

INSERT INTO `volunteer` (`UniqueVolunteerId`, `username`, `address`, `city`, `zip_code`, `volunteer_date`, `volunteer_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`) VALUES
(20, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(21, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(22, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(23, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(24, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(25, 'v@v.com', '', 'Tempe', '', '', '', '1', '', '', ''),
(26, 'v@v.com', '', '', '', '', '', 'Viken', '', '', ''),
(27, 'v@v.com', '', '', '', '', '', '', '', '', ''),
(28, 'v@v.com', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donate`
--
ALTER TABLE `donate`
  ADD PRIMARY KEY (`UniqueDonateId`),
  ADD UNIQUE KEY `UniqueRequestId` (`UniqueDonateId`);

--
-- Indexes for table `donate_request`
--
ALTER TABLE `donate_request`
  ADD PRIMARY KEY (`UniqueDonateId`),
  ADD UNIQUE KEY `UniqueRequestId` (`UniqueDonateId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `uniqueid` (`uniqueid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `volunteer`
--
ALTER TABLE `volunteer`
  ADD PRIMARY KEY (`UniqueVolunteerId`),
  ADD UNIQUE KEY `UniqueVolunteerId` (`UniqueVolunteerId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donate`
--
ALTER TABLE `donate`
  MODIFY `UniqueDonateId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `donate_request`
--
ALTER TABLE `donate_request`
  MODIFY `UniqueDonateId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uniqueid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `volunteer`
--
ALTER TABLE `volunteer`
  MODIFY `UniqueVolunteerId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
