-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Gru 2022, 23:50
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Baza danych: `funwithflags`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `flags`
--

CREATE TABLE `flags` (
  `id` int(11) NOT NULL,
  `Country` varchar(35) NOT NULL,
  `Continent` varchar(10) NOT NULL,
  `Continent2` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `flags`
--

INSERT INTO `flags` (`id`, `Country`, `Continent`, `Continent2`) VALUES
(1, 'Albania', 'Europe', ''),
(2, 'Andorra', 'Europe', ''),
(3, 'Armenia', 'Europe', 'Asia'),
(4, 'Austria', 'Europe', ''),
(5, 'Azerbaijan', 'Europe', 'Asia'),
(6, 'Belarus', 'Europe', ''),
(7, 'Belgium', 'Europe', ''),
(8, 'Bosnia and Herzegovina', 'Europe', ''),
(9, 'Bulgaria', 'Europe', ''),
(10, 'Croatia', 'Europe', ''),
(11, 'Cyprus', 'Europe', ''),
(12, 'Czech Republic', 'Europe', ''),
(13, 'Denmark', 'Europe', ''),
(14, 'Estonia', 'Europe', ''),
(15, 'Finland', 'Europe', ''),
(16, 'France', 'Europe', ''),
(17, 'Germany', 'Europe', ''),
(18, 'Georgia', 'Europe', 'Asia'),
(19, 'Greece', 'Europe', ''),
(20, 'Hungary', 'Europe', ''),
(21, 'Iceland', 'Europe', ''),
(22, 'Republic of Ireland', 'Europe', ''),
(23, 'Italy', 'Europe', ''),
(24, 'Kosovo', 'Europe', ''),
(25, 'Latvia', 'Europe', ''),
(26, 'Liechtenstein', 'Europe', ''),
(27, 'Lithuania', 'Europe', ''),
(28, 'Luxembourg', 'Europe', ''),
(29, 'Malta', 'Europe', ''),
(30, 'Moldova', 'Europe', ''),
(31, 'Monaco', 'Europe', ''),
(32, 'Montenegro', 'Europe', ''),
(33, 'Netherlands', 'Europe', ''),
(34, 'North Macedonia', 'Europe', ''),
(35, 'Norway', 'Europe', ''),
(36, 'Poland', 'Europe', ''),
(37, 'Portugal', 'Europe', ''),
(39, 'Romania', 'Europe', ''),
(40, 'Russia', 'Europe', 'Asia'),
(41, 'San Marino', 'Europe', ''),
(42, 'Serbia', 'Europe', ''),
(43, 'Slovakia', 'Europe', ''),
(44, 'Slovenia', 'Europe', ''),
(45, 'Spain', 'Europe', ''),
(46, 'Sweden', 'Europe', ''),
(47, 'Switzerland', 'Europe', ''),
(48, 'Turkey', 'Europe', 'Asia'),
(49, 'Ukraine', 'Europe', ''),
(50, 'Vatican City', 'Europe', ''),
(51, 'Antigua and Barbuda', 'NAmerica', ''),
(52, 'The Bahamas', 'NAmerica', ''),
(53, 'Barbados', 'NAmerica', ''),
(54, 'Belize', 'NAmerica', ''),
(55, 'Canada', 'NAmerica', ''),
(56, 'Costa Rica', 'NAmerica', ''),
(57, 'Cuba', 'NAmerica', ''),
(58, 'Dominica', 'NAmerica', ''),
(59, 'Dominican Republic', 'NAmerica', ''),
(60, 'El Salvador', 'NAmerica', ''),
(61, 'Grenada', 'NAmerica', ''),
(62, 'Guatemala', 'NAmerica', ''),
(63, 'Haiti', 'NAmerica', ''),
(64, 'Honduras', 'NAmerica', ''),
(65, 'Jamaica', 'NAmerica', ''),
(66, 'Mexico', 'NAmerica', ''),
(67, 'Panama', 'NAmerica', ''),
(68, 'Saint Kitts and Nevis', 'NAmerica', ''),
(69, 'Saint Lucia', 'NAmerica', ''),
(70, 'Saint Vincent and the Grenadines', 'NAmerica', ''),
(71, 'Trinidad and Tobago', 'NAmerica', ''),
(72, 'United States', 'NAmerica', ''),
(73, 'Algeria', 'Africa', ''),
(74, 'Angola', 'Africa', ''),
(75, 'Benin', 'Africa', ''),
(76, 'Botswana', 'Africa', ''),
(77, 'Burkina Faso', 'Africa', ''),
(78, 'Burundi', 'Africa', ''),
(79, 'Cameroon', 'Africa', ''),
(80, 'Cape Verde', 'Africa', ''),
(81, 'Central African Republic', 'Africa', ''),
(82, 'Chad', 'Africa', ''),
(83, 'Comoros', 'Africa', ''),
(84, 'Democratic Republic of the Congo', 'Africa', ''),
(85, 'Djibouti', 'Africa', ''),
(86, 'Egypt', 'Africa', 'Asia'),
(87, 'Equatorial Guinea', 'Africa', ''),
(88, 'Eritrea', 'Africa', ''),
(89, 'Eswatini', 'Africa', ''),
(91, 'Ethiopia', 'Africa', ''),
(92, 'Gabon', 'Africa', ''),
(93, 'Ghana', 'Africa', ''),
(94, 'Guinea', 'Africa', ''),
(95, 'Guinea-Bissau', 'Africa', ''),
(96, 'Kenya', 'Africa', ''),
(97, 'Ivory Coast', 'Africa', ''),
(98, 'Lesotho', 'Africa', ''),
(99, 'Liberia', 'Africa', ''),
(100, 'Libya', 'Africa', ''),
(101, 'Madagascar', 'Africa', ''),
(102, 'Malawi', 'Africa', ''),
(103, 'Mali', 'Africa', ''),
(104, 'Mauritania', 'Africa', ''),
(105, 'Mauritius', 'Africa', ''),
(106, 'Morocco', 'Africa', ''),
(107, 'Mozambique', 'Africa', ''),
(108, 'Namibia', 'Africa', ''),
(109, 'Niger', 'Africa', ''),
(110, 'Nigeria', 'Africa', ''),
(111, 'Rwanda', 'Africa', ''),
(112, 'Senegal', 'Africa', ''),
(113, 'Seychelles', 'Africa', ''),
(114, 'Sierra Leone', 'Africa', ''),
(115, 'Somalia', 'Africa', ''),
(116, 'South Africa', 'Africa', ''),
(117, 'Republic of the Congo', 'Africa', ''),
(118, 'São Tomé and Príncipe', 'Africa', ''),
(119, 'Sudan', 'Africa', ''),
(120, 'Tanzania', 'Africa', ''),
(121, 'Gambia', 'Africa', ''),
(122, 'Togo', 'Africa', ''),
(123, 'Tunisia', 'Africa', ''),
(124, 'Uganda', 'Africa', ''),
(125, 'Zambia', 'Africa', ''),
(126, 'Zimbabwe', 'Africa', ''),
(127, 'Afghanistan', 'Asia', ''),
(128, 'Bahrajn', 'Asia', ''),
(129, 'Bangladesh', 'Asia', ''),
(130, 'Bhutan', 'Asia', ''),
(131, 'Brunei', 'Asia', ''),
(132, 'Cambodia', 'Asia', ''),
(133, 'China', 'Asia', ''),
(134, 'East Timor', 'Asia', ''),
(135, 'India', 'Asia', ''),
(136, 'Indonesia', 'Asia', ''),
(137, 'Iran', 'Asia', ''),
(138, 'Iraq', 'Asia', ''),
(139, 'Israel', 'Asia', ''),
(140, 'Japan', 'Asia', ''),
(141, 'Jordan', 'Asia', ''),
(142, 'Kazakhstan', 'Europe', 'Asia'),
(143, 'Kuwait', 'Asia', ''),
(144, 'Kyrgyzstan', 'Asia', ''),
(145, 'Laos', 'Asia', ''),
(146, 'Lebanon', 'Asia', ''),
(147, 'Malaysia', 'Asia', ''),
(148, 'Mongolia', 'Asia', ''),
(149, 'Myanmar', 'Asia', ''),
(150, 'Nepal', 'Asia', ''),
(151, 'North Korea', 'Asia', ''),
(152, 'Oman', 'Asia', ''),
(153, 'Pakistan', 'Asia', ''),
(154, 'State of Palestine', 'Asia', ''),
(155, 'Philippines', 'Asia', ''),
(156, 'Qatar', 'Asia', ''),
(157, 'Saudi Arabia', 'Asia', ''),
(158, 'Maldives', 'Asia', ''),
(159, 'Singapore', 'Asia', ''),
(160, 'South Korea', 'Asia', ''),
(161, 'Sri Lanka', 'Asia', ''),
(162, 'Syria', 'Asia', ''),
(163, 'Taiwan', 'Asia', ''),
(164, 'Tajikistan', 'Asia', ''),
(165, 'Thailand', 'Asia', ''),
(166, 'Turkmenistan', 'Asia', ''),
(167, 'United Arab Emirates', 'Asia', ''),
(168, 'Uzbekistan', 'Asia', ''),
(169, 'Vietnam', 'Asia', ''),
(170, 'Yemen', 'Asia', ''),
(171, 'Australia', 'Oceania', ''),
(172, 'Fiji', 'Oceania', ''),
(173, 'Papua New Guinea', 'Oceania', ''),
(174, 'Solomon Islands', 'Oceania', ''),
(175, 'Vanuatu', 'Oceania', ''),
(176, 'Federated States of Micronesia', 'Oceania', ''),
(177, 'Kiribati', 'Oceania', ''),
(178, 'Marshall Islands', 'Oceania', ''),
(179, 'Nauru', 'Oceania', ''),
(180, 'Palau', 'Oceania', ''),
(181, 'Samoa', 'Oceania', ''),
(182, 'Tonga', 'Oceania', ''),
(183, 'Tuvalu', 'Oceania', ''),
(184, 'Argentina', 'SAmerica', ''),
(185, 'Bolivia', 'SAmerica', ''),
(186, 'Brazil', 'SAmerica', ''),
(187, 'Chile', 'SAmerica', ''),
(188, 'Colombia', 'SAmerica', ''),
(189, 'Ecuador', 'SAmerica', ''),
(190, 'Guyana', 'SAmerica', ''),
(191, 'Paraguay', 'SAmerica', ''),
(192, 'Peru', 'SAmerica', ''),
(193, 'Suriname', 'SAmerica', ''),
(194, 'Uruguay', 'SAmerica', ''),
(195, 'Venezuela', 'SAmerica', ''),
(196, 'United Federation of Planets', 'fictional', ''),
(197, 'Klingon Empire', 'fictional', ''),
(198, 'Rebel Alliance', 'fictional', ''),
(199, 'Galactic Empire', 'fictional', ''),
(200, 'Gondor', 'fictional', ''),
(201, 'Mordor', 'fictional', ''),
(202, 'Rohan', 'fictional', ''),
(203, 'Harad', 'fictional', ''),
(204, 'Isengard', 'fictional', ''),
(205, 'Necrons', 'fictional', ''),
(206, 'Imperium of Man', 'fictional', ''),
(207, 'Aeldari Empire', 'fictional', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `quizzes`
--

CREATE TABLE `quizzes` (
  `Id` int(10) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Image` varchar(25) NOT NULL,
  `EuropeFlags` tinyint(1) NOT NULL DEFAULT 0,
  `AsiaFlags` tinyint(1) NOT NULL DEFAULT 0,
  `AfricaFlags` tinyint(1) NOT NULL DEFAULT 0,
  `NAmericaFlags` tinyint(1) NOT NULL DEFAULT 0,
  `SAmericaFlags` tinyint(1) NOT NULL DEFAULT 0,
  `OceaniaAndAustraliaFlags` tinyint(1) NOT NULL DEFAULT 0,
  `FictionalFlags` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `quizzes`
--

INSERT INTO `quizzes` (`Id`, `Name`, `Description`, `Image`, `EuropeFlags`, `AsiaFlags`, `AfricaFlags`, `NAmericaFlags`, `SAmericaFlags`, `OceaniaAndAustraliaFlags`, `FictionalFlags`) VALUES
(1, 'Modern flags of  Europe', 'This quiz contains 10 random flags of modern European countries', 'ModernEurope', 1, 0, 0, 0, 0, 0, 0),
(2, 'Modern flags of  North America', 'This quiz contains 10 random flags of modern North America countries', 'ModernNAmerica', 0, 0, 0, 1, 0, 0, 1),
(3, 'Modern flags of  Africa', 'This quiz contains 10 random flags of modern Afrcian countries', 'ModernAfrica', 0, 0, 1, 0, 0, 0, 0),
(4, 'Modern flags of  Asia', 'This quiz contains 10 random flags of modern Asian countries', 'ModernAsia', 0, 1, 0, 0, 0, 0, 0),
(5, 'Modern flags of  Oceania', 'This quiz contains 10 random flags of modern Oceanian countries', 'ModernOceania', 0, 0, 0, 0, 0, 1, 0),
(6, 'Modern flags of  South America', 'This quiz contains 10 random flags of modern South American countries', 'ModernSouthAmerica', 0, 0, 0, 0, 1, 0, 0),
(7, 'Fictional Flags', 'This quiz features 10 randomly selected flags from a wide range of pop culture, from fantasy to sci-', 'Fictional', 0, 0, 0, 0, 0, 0, 1),
(8, 'The Modern World', 'This quiz contains 10 random flags of modern countries from around the world.', 'World', 1, 1, 1, 1, 1, 1, 0),
(9, 'All Flags', 'This quiz will draw 10 random flags from all categories', 'All', 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `results`
--

CREATE TABLE `results` (
  `Id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Score` int(11) NOT NULL,
  `Time` int(11) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp(),
  `QuizName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `results`
--

INSERT INTO `results` (`Id`, `Name`, `Score`, `Time`, `Date`, `QuizName`) VALUES
(1, 'BaronVonMerica', 6, 15, '2022-11-08', '1'),
(2, 'Mr.Kowalski', 4, 14, '2022-11-19', '1'),
(3, 'Anon324', 3, 31, '2022-11-23', '2'),
(4, 'Alex', 9, 28, '2022-11-27', '4'),
(5, 'Kazimierz37', 6, 20, '2022-11-28', '7'),
(6, 'Pineapple', 10, 25, '2022-11-28', '9'),
(7, 'Mrs.Smith', 10, 27, '2022-11-28', '9'),
(8, 'WeronMickiewicz', 6, 45, '2022-12-02', '1'),
(9, 'JulianKesar', 7, 35, '2022-12-01', '1'),
(10, 'David', 4, 47, '2022-11-30', '1'),
(11, 'Mr.Smitch', 3, 51, '2022-11-15', '1'),
(12, 'Pearl Shortle', 6, 39, '2022-11-20', '1'),
(13, 'Josefina Varas', 4, 32, '2022-12-01', '6'),
(14, 'Jessenia Carabello', 8, 29, '2022-11-18', '6'),
(15, 'Doncia Godino', 2, 23, '2022-11-19', '6'),
(16, 'Sans Calle', 6, 17, '2022-11-30', '6'),
(17, 'Miguel Pecha', 8, 30, '2022-11-27', '6'),
(18, 'Nieves Tome', 5, 45, '2022-12-01', '6'),
(19, 'Mary Brown', 6, 21, '2022-12-01', '2'),
(20, 'Thomas Thompson ', 4, 23, '2022-11-16', '2'),
(21, 'Skylar Anderson', 9, 20, '2022-11-11', '2'),
(22, 'Johari Oyenusi', 8, 32, '2022-12-01', '3'),
(23, 'Ashur Olanrewaju', 5, 12, '2022-12-02', '3'),
(24, 'Rehema Boro', 2, 27, '2022-12-03', '3'),
(25, 'Nbushe Egwu', 9, 16, '2022-11-25', '3'),
(26, 'Kwau Oyinlola', 10, 30, '2022-11-04', '3'),
(27, 'Tamashiro Aika', 8, 31, '2022-12-01', '4'),
(28, 'Fujimori Usagi', 9, 21, '2022-11-09', '4'),
(29, 'Muranaka Emiko', 3, 21, '2022-12-01', '4'),
(30, 'Sakuma Yuudai', 5, 23, '2022-12-03', '4'),
(31, 'Oshita Hisoka', 7, 43, '2022-11-01', '4'),
(32, 'Mino Arisu', 4, 32, '2022-12-02', '4'),
(33, 'Riley Flanagan', 5, 21, '2022-12-13', '5'),
(34, 'Jacob Duncan', 7, 0, '2022-12-01', '5'),
(35, 'Noah Lachman', 1, 21, '2020-12-05', '5'),
(36, 'Benjamin Weaving', 6, 21, '2022-12-02', '5'),
(37, 'Glanduil Venfaren', 4, 12, '2022-12-01', '7'),
(38, 'Braern Neriran', 3, 34, '2022-12-02', '7'),
(39, 'Zelphar Daefiel', 7, 21, '2022-12-03', '7'),
(40, 'Camus Petsalor', 8, 25, '2022-11-01', '7'),
(41, 'Fluke', 6, 21, '2022-12-01', '8'),
(42, 'Intra', 7, 12, '2022-12-02', '8'),
(43, 'Aspect', 8, 23, '2022-12-01', '8'),
(44, 'Codex', 7, 21, '2022-12-03', '8');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `flags`
--
ALTER TABLE `flags`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `flags`
--
ALTER TABLE `flags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;

--
-- AUTO_INCREMENT dla tabeli `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `results`
--
ALTER TABLE `results`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
