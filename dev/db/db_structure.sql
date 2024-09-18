USE db;

DROP TABLE IF EXISTS `tb_pessoas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_pessoas` (
  `Codigo` int(11) NOT NULL,
  `Tipo_Pessoa` varchar(300) DEFAULT NULL,
  `CPF` varchar(300) DEFAULT NULL,
  `CNPJ` varchar(300) DEFAULT NULL,
  `RG` varchar(300) DEFAULT NULL,
  `IE` varchar(300) DEFAULT NULL,
  `CadPro` varchar(300) DEFAULT NULL,
  `Tipo_Contribuinte` int(11) DEFAULT NULL,
  `Pessoa` varchar(300) DEFAULT NULL,
  `Fantasia` varchar(300) DEFAULT NULL,
  `CEP` varchar(300) DEFAULT NULL,
  `Endereco` varchar(300) DEFAULT NULL,
  `Numero` varchar(300) DEFAULT NULL,
  `Bairro` varchar(300) DEFAULT NULL,
  `UF` varchar(300) DEFAULT NULL,
  `cUF` varchar(300) DEFAULT NULL,
  `xMun` varchar(300) DEFAULT NULL,
  `cMun` varchar(300) DEFAULT NULL,
  `xPais` varchar(300) DEFAULT NULL,
  `cPais` varchar(300) DEFAULT NULL,
  `Complemento` varchar(300) DEFAULT NULL,
  `Data_Nascimento` date DEFAULT NULL,
  `Fone1` varchar(300) DEFAULT NULL,
  `Fone2` varchar(300) DEFAULT NULL,
  `Fone3` varchar(300) DEFAULT NULL,
  `Fone4` varchar(300) DEFAULT NULL,
  `Fone5` varchar(300) DEFAULT NULL,
  `Id_Tabela_Preco` int(11) DEFAULT NULL,
  `RegExcluido` varchar(300) DEFAULT NULL,
  `Ativo` varchar(300) DEFAULT NULL,
  `IDEmpresa` int(11) DEFAULT NULL,
  `DHU` varchar(300) DEFAULT NULL,
  `IDUser` int(11) DEFAULT NULL,
  `Email` varchar(300) DEFAULT NULL,
  `Id_Operacao_Movimento` int(11) DEFAULT NULL,
  `Apelido` varchar(300) DEFAULT NULL,
  `Limite` double DEFAULT NULL,
  `Liberado_Contas_Em_Atraso` varchar(300) DEFAULT NULL,
  `WhatsApp` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `tb_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_produtos` (
  `Codigo` int(11) NOT NULL,
  `Produto` varchar(300) DEFAULT NULL,
  `Produto_Curto` varchar(300) DEFAULT NULL,
  `Produto_PDV` varchar(300) DEFAULT NULL,
  `Complemento` varchar(300) DEFAULT NULL,
  `Pesquisa_Rapida_PDV` varchar(300) DEFAULT NULL,
  `Id_Departamento` int(11) DEFAULT NULL,
  `Id_Setor` int(11) DEFAULT NULL,
  `Id_Marca` int(11) DEFAULT NULL,
  `Id_Grupo` int(11) DEFAULT NULL,
  `Id_SubGrupo` int(11) DEFAULT NULL,
  `Id_Unidade` int(11) DEFAULT NULL,
  `Id_Familia` int(11) DEFAULT NULL,
  `Codigo_Interno` varchar(300) DEFAULT NULL,
  `Peso` double DEFAULT NULL,
  `Capacidade` double DEFAULT NULL,
  `ID_Alocacao` int(11) DEFAULT NULL,
  `Comissao` double DEFAULT NULL,
  `Balanca` varchar(300) DEFAULT NULL,
  `Tipo_Balanca` varchar(300) DEFAULT NULL,
  `Descricao_Balanca` varchar(300) DEFAULT NULL,
  `NCM` int(11) DEFAULT NULL,
  `Genero` varchar(300) DEFAULT NULL,
  `cEAN_Trib` varchar(300) DEFAULT NULL,
  `CEST` varchar(300) DEFAULT NULL,
  `Estoque` double DEFAULT NULL,
  `Estoque_Reservado` double DEFAULT NULL,
  `Estoque_Disponivel` double DEFAULT NULL,
  `Tipo` double DEFAULT NULL,
  `Deposito` varchar(300) DEFAULT NULL,
  `Fraciona` varchar(300) DEFAULT NULL,
  `Controle_Lote` varchar(300) DEFAULT NULL,
  `Requer_Observacao` varchar(300) DEFAULT NULL,
  `Nao_Controla_Estoque` varchar(300) DEFAULT NULL,
  `Nunca_Agrupa_Venda` varchar(300) DEFAULT NULL,
  `Preco_Atribuido` double DEFAULT NULL,
  `Preco_Venda` double DEFAULT NULL,
  `Preco_Compra` double DEFAULT NULL,
  `Preco_Medio` double DEFAULT NULL,
  `Data_Preco_Venda` date DEFAULT NULL,
  `Data_Custo` date DEFAULT NULL,
  `Margem` double DEFAULT NULL,
  `Markup` double DEFAULT NULL,
  `Classificacao` varchar(300) DEFAULT NULL,
  `Id_Produto_Vinculado` int(11) DEFAULT NULL,
  `Ultima_Venda` date DEFAULT NULL,
  `Ultima_Compra` date DEFAULT NULL,
  `Data_Alterado` date DEFAULT NULL,
  `Ativo` varchar(300) DEFAULT NULL,
  `RegExcluido` varchar(300) DEFAULT NULL,
  `IDEmpresa` int(11) DEFAULT NULL,
  `DHU` varchar(300) DEFAULT NULL,
  `Id_Importacao_Sistema` int(11) DEFAULT NULL,
  `Id_SubFamilia` int(11) DEFAULT NULL,
  `Estoque_Maximo` double DEFAULT NULL,
  `Estoque_Minimo` double DEFAULT NULL,
  `IDUser` int(11) DEFAULT NULL,
  `Cad_ViaXML` varchar(300) DEFAULT NULL,
  `Funcao` varchar(300) DEFAULT NULL,
  `Alterado` varchar(300) DEFAULT NULL,
  `N_Licenca_ANVISA` varchar(300) DEFAULT NULL,
  `Id_DCB` int(11) DEFAULT NULL,
  `Fidelidade_Credito` double DEFAULT NULL,
  `Fidelidade_Resgate` double DEFAULT NULL,
  `Dias_Validade` int(11) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `tb_produtos_setor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_produtos_setor` (
  `Codigo` int(11) NOT NULL,
  `Setor` varchar(300) DEFAULT NULL,
  `Ativo` varchar(300) DEFAULT NULL,
  `RegExcluido` varchar(300) DEFAULT NULL,
  `IDEmpresa` int(11) DEFAULT NULL,
  `DHU` varchar(300) DEFAULT NULL,
  `IDUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_comanda`
--

DROP TABLE IF EXISTS `tb_comanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_comanda` (
  `Codigo` int(11) NOT NULL,
  `Ativo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comanda`
--

LOCK TABLES `tb_comanda` WRITE;
/*!40000 ALTER TABLE `tb_comanda` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_comanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_mesa`
--

DROP TABLE IF EXISTS `tb_mesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_mesa` (
  `Codigo` int(11) NOT NULL,
  `Ativo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_mesa`
--

LOCK TABLES `tb_mesa` WRITE;
/*!40000 ALTER TABLE `tb_mesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_mesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_mesa_comanda`
--

DROP TABLE IF EXISTS `tb_mesa_comanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_mesa_comanda` (
  `Codigo` int(11) NOT NULL,
  `Id_Mesa` int(11) DEFAULT NULL,
  `Id_Comanda` int(11) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_mesa_comanda`
--

LOCK TABLES `tb_mesa_comanda` WRITE;
/*!40000 ALTER TABLE `tb_mesa_comanda` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_mesa_comanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pedido`
--

DROP TABLE IF EXISTS `tb_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_pedido` (
  `Codigo` int(11) NOT NULL,
  `ID_Activity` int(11) DEFAULT NULL,
  `Id_Mesa` int(11) DEFAULT NULL,
  `Id_Comanda` int(11) DEFAULT NULL,
  `Importado_ERP` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pedido`
--

LOCK TABLES `tb_pedido` WRITE;
/*!40000 ALTER TABLE `tb_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pedido_item`
--

DROP TABLE IF EXISTS `tb_pedido_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_pedido_item` (
  `Codigo` int(11) NOT NULL,
  `Id_Pedido` int(11) DEFAULT NULL,
  `Id_Produto` int(11) DEFAULT NULL,
  `Quantidade` double DEFAULT NULL,
  `Unitario` double DEFAULT NULL,
  `Total` double DEFAULT NULL,
  `Importado_ERP` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pedido_item`
--

LOCK TABLES `tb_pedido_item` WRITE;
/*!40000 ALTER TABLE `tb_pedido_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_pedido_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-30 10:51:57
