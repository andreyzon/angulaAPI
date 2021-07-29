
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
CREATE DATABASE kiosco_db;
USE kiosco_db;
DROP TABLE IF EXISTS `tarjeta1`;
CREATE TABLE `tarjeta1` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
LOCK TABLES `tarjeta1` WRITE;
/*!40000 ALTER TABLE `tarjeta1` DISABLE KEYS */;
INSERT INTO `tarjeta1` VALUES ('192.168.5.104','-127.00','2021-07-22 18:55:46','1'),('192.168.5.104','-127.00','2021-07-22 18:55:56','1'),('192.168.5.104','-127.00','2021-07-22 18:56:06','1'),('192.168.5.104','-127.00','2021-07-22 18:56:16','1'),('192.168.5.104','-127.00','2021-07-22 18:56:26','1'),('192.168.5.104','-127.00','2021-07-22 18:56:36','1'),('192.168.5.104','-127.00','2021-07-22 18:56:46','1'),('192.168.5.104','-127.00','2021-07-22 18:56:56','1'),('192.168.5.104','-127.00','2021-07-22 22:45:22','1'),('192.168.5.104','-127.00','2021-07-22 22:45:32','1'),('192.168.5.104','-127.00','2021-07-22 22:45:42','1'),('192.168.5.104','-127.00','2021-07-22 22:45:52','1'),('192.168.5.104','-127.00','2021-07-22 22:46:02','1'),('192.168.5.104','-127.00','2021-07-22 22:46:13','1'),('192.168.5.104','-127.00','2021-07-22 22:46:23','1'),('192.168.5.104','-127.00','2021-07-22 22:46:33','1');
/*!40000 ALTER TABLE `tarjeta1` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `tarjeta10`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta10` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta10`
--

LOCK TABLES `tarjeta10` WRITE;
/*!40000 ALTER TABLE `tarjeta10` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta10` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta11`
--

DROP TABLE IF EXISTS `tarjeta11`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta11` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta11`
--

LOCK TABLES `tarjeta11` WRITE;
/*!40000 ALTER TABLE `tarjeta11` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta11` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta12`
--

DROP TABLE IF EXISTS `tarjeta12`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta12` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta12`
--

LOCK TABLES `tarjeta12` WRITE;
/*!40000 ALTER TABLE `tarjeta12` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta12` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta13`
--

DROP TABLE IF EXISTS `tarjeta13`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta13` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta13`
--

LOCK TABLES `tarjeta13` WRITE;
/*!40000 ALTER TABLE `tarjeta13` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta13` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta14`
--

DROP TABLE IF EXISTS `tarjeta14`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta14` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta14`
--

LOCK TABLES `tarjeta14` WRITE;
/*!40000 ALTER TABLE `tarjeta14` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta14` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta15`
--

DROP TABLE IF EXISTS `tarjeta15`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta15` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta15`
--

LOCK TABLES `tarjeta15` WRITE;
/*!40000 ALTER TABLE `tarjeta15` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta15` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta16`
--

DROP TABLE IF EXISTS `tarjeta16`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta16` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta16`
--

LOCK TABLES `tarjeta16` WRITE;
/*!40000 ALTER TABLE `tarjeta16` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta16` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta17`
--

DROP TABLE IF EXISTS `tarjeta17`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta17` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta17`
--

LOCK TABLES `tarjeta17` WRITE;
/*!40000 ALTER TABLE `tarjeta17` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta17` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta18`
--

DROP TABLE IF EXISTS `tarjeta18`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta18` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta18`
--

LOCK TABLES `tarjeta18` WRITE;
/*!40000 ALTER TABLE `tarjeta18` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta18` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta19`
--

DROP TABLE IF EXISTS `tarjeta19`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta19` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta19`
--

LOCK TABLES `tarjeta19` WRITE;
/*!40000 ALTER TABLE `tarjeta19` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta19` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta2`
--

DROP TABLE IF EXISTS `tarjeta2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta2` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta2`
--

LOCK TABLES `tarjeta2` WRITE;
/*!40000 ALTER TABLE `tarjeta2` DISABLE KEYS */;
INSERT INTO `tarjeta2` VALUES ('192.168.5.105','-127.00','2021-07-22 19:39:38','2'),('192.168.5.105','-127.00','2021-07-22 19:40:28','2'),('192.168.5.105','-127.00','2021-07-22 19:40:28','2'),('192.168.5.105','-127.00','2021-07-22 19:40:28','2'),('192.168.5.105','-127.00','2021-07-22 19:40:28','2'),('192.168.5.105','-127.00','2021-07-22 19:40:37','2'),('192.168.5.105','-127.00','2021-07-22 19:40:47','2'),('192.168.5.105','-127.00','2021-07-22 19:40:57','2'),('192.168.5.105','-127.00','2021-07-22 19:41:07','2'),('192.168.5.105','-127.00','2021-07-22 19:41:17','2'),('192.168.5.105','-127.00','2021-07-22 19:41:27','2'),('192.168.5.105','-127.00','2021-07-22 19:41:38','2'),('192.168.5.105','-127.00','2021-07-22 19:41:48','2'),('192.168.5.105','-127.00','2021-07-22 19:41:58','2'),('192.168.5.105','-127.00','2021-07-22 19:42:08','2'),('192.168.5.105','-127.00','2021-07-22 19:42:18','2'),('192.168.5.105','-127.00','2021-07-22 19:42:31','2'),('192.168.5.105','-127.00','2021-07-22 19:42:38','2'),('192.168.5.105','-127.00','2021-07-22 19:42:48','2'),('192.168.5.105','-127.00','2021-07-22 19:42:58','2'),('192.168.5.105','-127.00','2021-07-22 19:47:40','2'),('192.168.5.105','-127.00','2021-07-22 19:47:49','2'),('192.168.5.105','-127.00','2021-07-22 19:48:00','2'),('192.168.5.105','-127.00','2021-07-22 19:55:02','2'),('192.168.5.105','-127.00','2021-07-22 19:55:12','2'),('192.168.5.105','-127.00','2021-07-22 22:44:41','2'),('192.168.5.105','-127.00','2021-07-22 22:44:49','2'),('192.168.5.105','-127.00','2021-07-22 22:44:59','2'),('192.168.5.105','-127.00','2021-07-23 00:51:51','2'),('192.168.5.105','-127.00','2021-07-23 00:52:00','2');
/*!40000 ALTER TABLE `tarjeta2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta20`
--

DROP TABLE IF EXISTS `tarjeta20`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta20` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta20`
--

LOCK TABLES `tarjeta20` WRITE;
/*!40000 ALTER TABLE `tarjeta20` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta20` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta21`
--

DROP TABLE IF EXISTS `tarjeta21`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta21` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta21`
--

LOCK TABLES `tarjeta21` WRITE;
/*!40000 ALTER TABLE `tarjeta21` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta21` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta22`
--

DROP TABLE IF EXISTS `tarjeta22`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta22` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta22`
--

LOCK TABLES `tarjeta22` WRITE;
/*!40000 ALTER TABLE `tarjeta22` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta22` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta23`
--

DROP TABLE IF EXISTS `tarjeta23`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta23` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta23`
--

LOCK TABLES `tarjeta23` WRITE;
/*!40000 ALTER TABLE `tarjeta23` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta23` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta24`
--

DROP TABLE IF EXISTS `tarjeta24`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta24` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta24`
--

LOCK TABLES `tarjeta24` WRITE;
/*!40000 ALTER TABLE `tarjeta24` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta24` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta25`
--

DROP TABLE IF EXISTS `tarjeta25`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta25` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta25`
--

LOCK TABLES `tarjeta25` WRITE;
/*!40000 ALTER TABLE `tarjeta25` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta25` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta26`
--

DROP TABLE IF EXISTS `tarjeta26`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta26` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta26`
--

LOCK TABLES `tarjeta26` WRITE;
/*!40000 ALTER TABLE `tarjeta26` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta26` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta27`
--

DROP TABLE IF EXISTS `tarjeta27`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta27` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta27`
--

LOCK TABLES `tarjeta27` WRITE;
/*!40000 ALTER TABLE `tarjeta27` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta27` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta28`
--

DROP TABLE IF EXISTS `tarjeta28`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta28` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta28`
--

LOCK TABLES `tarjeta28` WRITE;
/*!40000 ALTER TABLE `tarjeta28` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta28` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta29`
--

DROP TABLE IF EXISTS `tarjeta29`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta29` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta29`
--

LOCK TABLES `tarjeta29` WRITE;
/*!40000 ALTER TABLE `tarjeta29` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta29` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta3`
--

DROP TABLE IF EXISTS `tarjeta3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta3` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta3`
--

LOCK TABLES `tarjeta3` WRITE;
/*!40000 ALTER TABLE `tarjeta3` DISABLE KEYS */;
INSERT INTO `tarjeta3` VALUES ('192.168.5.108','-127.00','2021-07-22 22:53:31','3'),('192.168.5.108','-127.00','2021-07-22 22:53:41','3'),('192.168.5.108','-127.00','2021-07-22 22:53:51','3'),('192.168.5.108','-127.00','2021-07-22 22:54:01','3'),('192.168.5.108','-127.00','2021-07-22 22:54:11','3'),('192.168.5.108','-127.00','2021-07-22 22:54:21','3'),('192.168.5.108','-127.00','2021-07-22 22:54:31','3'),('192.168.5.108','-127.00','2021-07-22 22:54:41','3'),('192.168.5.108','-127.00','2021-07-22 22:54:51','3'),('192.168.5.108','-127.00','2021-07-22 22:55:01','3'),('192.168.5.108','-127.00','2021-07-23 00:36:01','3'),('192.168.5.108','-127.00','2021-07-23 00:36:12','3'),('192.168.5.108','-127.00','2021-07-23 00:36:22','3'),('192.168.5.108','-127.00','2021-07-23 00:36:32','3'),('192.168.5.108','-127.00','2021-07-23 00:36:42','3'),('192.168.5.108','-127.00','2021-07-23 00:36:52','3'),('192.168.5.108','-127.00','2021-07-23 00:37:02','3'),('192.168.5.108','-127.00','2021-07-23 00:37:12','3'),('192.168.5.108','-127.00','2021-07-23 00:37:22','3'),('192.168.5.108','-127.00','2021-07-23 00:37:32','3'),('192.168.5.108','-127.00','2021-07-23 00:37:42','3'),('192.168.5.108','-127.00','2021-07-23 00:37:52','3'),('192.168.5.108','-127.00','2021-07-23 00:42:03','3'),('192.168.5.108','-127.00','2021-07-23 00:50:55','3'),('192.168.5.108','-127.00','2021-07-23 00:51:05','3');
/*!40000 ALTER TABLE `tarjeta3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta30`
--

DROP TABLE IF EXISTS `tarjeta30`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta30` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta30`
--

LOCK TABLES `tarjeta30` WRITE;
/*!40000 ALTER TABLE `tarjeta30` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta30` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta31`
--

DROP TABLE IF EXISTS `tarjeta31`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta31` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta31`
--

LOCK TABLES `tarjeta31` WRITE;
/*!40000 ALTER TABLE `tarjeta31` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta31` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta4`
--

DROP TABLE IF EXISTS `tarjeta4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta4` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta4`
--

LOCK TABLES `tarjeta4` WRITE;
/*!40000 ALTER TABLE `tarjeta4` DISABLE KEYS */;
INSERT INTO `tarjeta4` VALUES ('192.168.5.112','-127.00','2021-07-23 21:36:58','4'),('192.168.5.112','-127.00','2021-07-23 21:37:08','4'),('192.168.5.112','-127.00','2021-07-23 21:37:18','4'),('192.168.5.112','-127.00','2021-07-23 21:37:28','4'),('192.168.5.112','-127.00','2021-07-23 21:37:38','4'),('192.168.5.112','-127.00','2021-07-23 21:37:48','4'),('192.168.5.112','-127.00','2021-07-23 21:37:59','4'),('192.168.5.112','-127.00','2021-07-23 21:38:09','4'),('192.168.5.112','-127.00','2021-07-23 21:38:19','4'),('192.168.5.112','-127.00','2021-07-23 21:38:29','4'),('192.168.5.112','-127.00','2021-07-23 21:38:39','4'),('192.168.5.112','-127.00','2021-07-23 21:38:49','4'),('192.168.5.112','-127.00','2021-07-23 21:38:59','4'),('192.168.5.112','-127.00','2021-07-23 21:39:09','4'),('192.168.5.112','-127.00','2021-07-23 21:39:19','4'),('192.168.5.112','-127.00','2021-07-23 21:39:29','4'),('192.168.5.112','-127.00','2021-07-23 21:39:39','4');
/*!40000 ALTER TABLE `tarjeta4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta5`
--

DROP TABLE IF EXISTS `tarjeta5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta5` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta5`
--

LOCK TABLES `tarjeta5` WRITE;
/*!40000 ALTER TABLE `tarjeta5` DISABLE KEYS */;
INSERT INTO `tarjeta5` VALUES ('192.168.5.113','-127.00','2021-07-23 21:41:36','5'),('192.168.5.113','-127.00','2021-07-23 21:41:44','5'),('192.168.5.113','-127.00','2021-07-23 21:41:54','5'),('192.168.5.113','-127.00','2021-07-23 21:42:04','5'),('192.168.5.113','-127.00','2021-07-23 21:42:14','5'),('192.168.5.113','-127.00','2021-07-23 21:42:24','5'),('192.168.5.113','-127.00','2021-07-23 21:42:34','5'),('192.168.5.113','-127.00','2021-07-23 21:42:44','5'),('192.168.5.113','-127.00','2021-07-23 21:42:54','5'),('192.168.5.113','-127.00','2021-07-23 21:43:04','5'),('192.168.5.113','-127.00','2021-07-23 21:43:14','5'),('192.168.5.113','-127.00','2021-07-23 21:43:24','5'),('192.168.5.113','-127.00','2021-07-23 21:43:34','5'),('192.168.5.113','-127.00','2021-07-23 21:43:44','5'),('192.168.5.113','-127.00','2021-07-23 21:43:54','5'),('192.168.5.113','-127.00','2021-07-23 21:44:04','5'),('192.168.5.113','-127.00','2021-07-23 21:44:14','5'),('192.168.5.113','-127.00','2021-07-23 21:44:24','5'),('192.168.5.113','-127.00','2021-07-23 21:44:35','5'),('192.168.5.113','-127.00','2021-07-23 21:44:45','5'),('192.168.5.113','-127.00','2021-07-23 21:44:55','5'),('192.168.5.113','-127.00','2021-07-23 21:45:05','5'),('192.168.5.113','-127.00','2021-07-23 21:45:15','5'),('192.168.5.113','-127.00','2021-07-23 21:45:25','5'),('192.168.5.113','-127.00','2021-07-23 21:45:35','5'),('192.168.5.113','-127.00','2021-07-23 21:45:45','5');
/*!40000 ALTER TABLE `tarjeta5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta6`
--

DROP TABLE IF EXISTS `tarjeta6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta6` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta6`
--

LOCK TABLES `tarjeta6` WRITE;
/*!40000 ALTER TABLE `tarjeta6` DISABLE KEYS */;
INSERT INTO `tarjeta6` VALUES ('192.168.5.114','-127.00','2021-07-23 21:47:43','6'),('192.168.5.114','-127.00','2021-07-23 21:47:53','6'),('192.168.5.114','-127.00','2021-07-23 21:48:03','6'),('192.168.5.114','-127.00','2021-07-23 21:48:13','6'),('192.168.5.114','-127.00','2021-07-23 21:48:23','6'),('192.168.5.114','-127.00','2021-07-23 21:48:34','6'),('192.168.5.114','-127.00','2021-07-23 21:48:44','6'),('192.168.5.114','-127.00','2021-07-23 21:49:04','6'),('192.168.5.114','-127.00','2021-07-23 21:49:14','6'),('192.168.5.114','-127.00','2021-07-23 21:49:24','6'),('192.168.5.114','-127.00','2021-07-23 21:49:34','6'),('192.168.5.114','-127.00','2021-07-23 21:49:44','6'),('192.168.5.114','-127.00','2021-07-23 21:49:54','6'),('192.168.5.114','-127.00','2021-07-23 21:50:04','6'),('192.168.5.114','-127.00','2021-07-23 21:50:14','6'),('192.168.5.114','-127.00','2021-07-23 21:50:24','6'),('192.168.5.114','-127.00','2021-07-23 21:50:34','6'),('192.168.5.114','-127.00','2021-07-23 21:50:44','6');
/*!40000 ALTER TABLE `tarjeta6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta7`
--

DROP TABLE IF EXISTS `tarjeta7`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta7` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta7`
--

LOCK TABLES `tarjeta7` WRITE;
/*!40000 ALTER TABLE `tarjeta7` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta7` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta8`
--

DROP TABLE IF EXISTS `tarjeta8`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta8` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta8`
--

LOCK TABLES `tarjeta8` WRITE;
/*!40000 ALTER TABLE `tarjeta8` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta8` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta9`
--

DROP TABLE IF EXISTS `tarjeta9`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta9` (
  `direccIP` varchar(20) DEFAULT NULL,
  `Temperatura` varchar(20) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Tarjeta` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta9`
--

LOCK TABLES `tarjeta9` WRITE;
/*!40000 ALTER TABLE `tarjeta9` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta9` ENABLE KEYS */;
UNLOCK TABLES;
EXIT;