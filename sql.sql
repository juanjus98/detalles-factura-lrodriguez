/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.7.13-log : Database - db_test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `table_articulos` */

DROP TABLE IF EXISTS `table_articulos`;

CREATE TABLE `table_articulos` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `codarticulo` varchar(20) DEFAULT NULL,
  `nomartiuclo` varchar(100) DEFAULT NULL,
  `preciounit` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `table_articulos` */

insert  into `table_articulos`(`id`,`codarticulo`,`nomartiuclo`,`preciounit`) values (1,'COD-1','ARTICULO 1',20.00),(2,'COD-2','ARTICULO 2',10.00),(3,'COD-3','ARTICULO 3',6.00);

/*Table structure for table `table_detalle_factura` */

DROP TABLE IF EXISTS `table_detalle_factura`;

CREATE TABLE `table_detalle_factura` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `codarticulo` varchar(20) DEFAULT NULL,
  `nomartiuclo` varchar(100) DEFAULT NULL,
  `cantidad` int(10) DEFAULT NULL,
  `preciounit` decimal(12,2) DEFAULT NULL,
  `subtotal` decimal(12,2) DEFAULT NULL,
  `campolibre1` varchar(100) DEFAULT NULL,
  `campolibre2` varchar(100) DEFAULT NULL,
  `campolibre3` varchar(100) DEFAULT NULL,
  `campolibre4` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `table_detalle_factura` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
