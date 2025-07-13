-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital_managment_system
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(255) NOT NULL,
  `contact_info` varchar(255) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `reason_notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `doctor_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,'jyoti','9068042356','Neurology','2025-07-17','20:55:00',NULL,'2025-07-06 12:22:21','2025-07-06 12:22:21',NULL),(2,'test','6789432564','Ophthalmology','2025-07-30','15:34:00',NULL,'2025-07-06 12:56:13','2025-07-06 12:56:13',NULL),(3,'KAVITA','8956437284','Cardiology','2025-07-18','22:35:00',NULL,'2025-07-06 15:08:53','2025-07-06 15:08:53',NULL),(4,'diya ','diya@gmail.com','Ophthalmology','2025-07-17','02:24:00',NULL,'2025-07-07 03:51:55','2025-07-07 03:51:55',NULL),(5,'ravi','ravi@gmail.com','Ophthalmology','2025-07-31','22:14:00',NULL,'2025-07-10 11:39:48','2025-07-10 11:39:48',NULL),(6,'jyoti','jyoti@gmail.com','Ophthalmology','2025-07-29','22:10:00',NULL,'2025-07-10 11:41:05','2025-07-10 11:41:05',NULL),(7,'mohan','mohan@gmail.com','Ophthalmology','2025-07-31','21:22:00',NULL,'2025-07-10 11:42:15','2025-07-10 11:42:15',NULL),(8,'ghkjkl','34567890556','Cardiology','2025-07-12','11:09:00','asdfghjkletyguhjikolghjmkl','2025-07-11 03:44:23','2025-07-11 03:44:23',NULL);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'jyoti','jyotibisht12300@gamil.com',NULL,'sdfg','werf','2025-07-07 03:59:29'),(2,'jyoti','jyotibisht12300@gamil.com',NULL,'asfghjjmkjbgfy','vuyiubj','2025-07-07 04:14:09');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_messages`
--

LOCK TABLES `contact_messages` WRITE;
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `consultation_fee` decimal(10,2) DEFAULT NULL,
  `address` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (5,'Dr.Raj','Male','2345678907','raj@gmailcom','Dermatologist','MD','3 Years',230.00,'nwjkfhi34','2025-07-08 07:49:53'),(32,'Dr.Deep','Male','2345678909','deep@gmail.com','Cardiologist','MD','2 Years',100.00,'Kolkata','2025-07-09 02:00:40'),(34,'Dr.Tarun','Male','3423453467','tarun@gmail.com','Radiologist','MBBS','2 Years',78.00,'Delhi','2025-07-09 04:08:45'),(35,'Dr.Rakha jupta','Female','4675908734','rakhajupa@gmail.com','Cardiologist','MD','2 Years',500.00,'utthakand','2025-07-10 11:34:58'),(36,'Dr.Asha Rany','Female','3423458976','asha@gmail.com','Dermatologist','MBBS','2 Years',90.00,'Delhi','2025-07-10 11:37:55'),(37,'Dr .priya ','Female','3874323239','priya@gmail.com','Radiologist','BAMS','1 Year',890.00,'mombai','2025-07-10 12:04:24'),(38,'Dr.ankita','Female','3456789866','ankita@gmail.com','Dermatologist','MD','1 Year',78.00,'haldwani','2025-07-10 12:16:46');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jyoti','jyoti@gmail.com','11111','2025-07-06 09:06:05','2025-07-06 09:06:05'),(2,'jyoti','jyoti1111@gmail.com','$2b$10$n7tfQkKrr5RkEt0jFz8oXuIHDdiqUmJfNpcItQnkwg9cS4CjEExi2','2025-07-06 09:31:42','2025-07-06 09:31:42'),(3,'jyoti','jyoti11113223@gmail.com','$2b$10$et6W6tExlZ1uMtr1ZHD6veEowcXaiFIJ3WV2eWwd50i10TF0eX9tm','2025-07-06 09:58:26','2025-07-06 09:58:26'),(4,'sohan','sohan@gmail.com','$2b$10$TmF5CKAfyWwHnqOS/oHOzOEYPvNK/yq2JpHu0qhjabvAXDb1EvbtS','2025-07-06 15:44:27','2025-07-06 15:44:27'),(5,'ravi','ravi@gmail.com','$2b$10$I4cTMC/rWLuFP9UqOjOx.uHsEwjCdBI4P2GxL2IiDW/4B9FzAfJn2','2025-07-07 04:25:44','2025-07-07 04:25:44'),(6,'gita','gita@gmail.com','$2b$10$3VOYxSjINXX/8066xzpYEekVNpMAJFuGuYt1ad1rYl6utv8bAfp3K','2025-07-07 09:35:25','2025-07-07 09:35:25'),(7,'Deep','Deep@gmail.com','$2b$10$Ue5Locdl/7kg/CPn1gWMEe/NZ1arvM./H0njVb7LWd8KaFOjSIf5S','2025-07-09 01:58:23','2025-07-09 01:58:23'),(8,'kaviya','kaviya@gmail.com','$2b$10$naOEtUEiUvTCbMrBPvIbF.vuYvvh0f4Rnnysx90hDwszK5Vs.b4jC','2025-07-10 11:31:28','2025-07-10 11:31:28'),(9,'metali','metali@gmail.com','$2b$10$pe4bG/GZ2wn4ECQVTCFTluWvqCmlBvGSUP7SEbWo/QWqtOv9N1pDG','2025-07-10 12:14:19','2025-07-10 12:14:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-11 14:49:17
