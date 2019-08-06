-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 05/08/2019 às 21:44
-- Versão do servidor: 5.7.27-0ubuntu0.16.04.1
-- Versão do PHP: 7.0.33-0ubuntu0.16.04.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `motofrete`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `entregas`
--

CREATE TABLE `entregas` (
  `id` int(11) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  `data_modificado` datetime NOT NULL,
  `status` varchar(20) NOT NULL,
  `endereco` varchar(250) NOT NULL,
  `valor` decimal(6,2) NOT NULL,
  `entregador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `entregas`
--

INSERT INTO `entregas` (`id`, `data_cadastro`, `data_modificado`, `status`, `endereco`, `valor`, `entregador`) VALUES
(1, '2019-07-23 07:22:00', '2019-08-01 09:00:00', 'NOVO', 'R A um B dois', '22.44', 1),
(2, '2019-06-11 09:09:10', '2019-08-01 21:50:00', 'ENTREGUE', 'R Maria José', '20.93', 2),
(3, '2019-07-23 07:22:00', '2019-07-31 13:38:18', 'CANCELADO', 'Av 1234 de almaral', '99.90', 3),
(4, '2019-06-25 13:37:24', '2019-08-01 21:50:00', 'PENDENTE', 'Av Floriano', '144.90', 4),
(5, '2019-06-11 09:09:10', '2019-08-01 21:50:00', 'ENCAMINHADO', 'R Maria José', '20.93', 5),
(6, '2019-07-23 07:22:00', '2019-07-31 13:38:18', 'ENCAMINHADO', 'Av 1234 de almaral', '99.90', 1),
(7, '2019-07-23 07:22:00', '2019-08-01 09:00:00', 'ENCAMINHADO', 'R A um B dois', '22.44', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `responsavel`
--

CREATE TABLE `responsavel` (
  `id` int(11) NOT NULL,
  `nome` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `responsavel`
--

INSERT INTO `responsavel` (`id`, `nome`) VALUES
(1, 'Carlos'),
(2, 'Murilo Recruta'),
(3, 'Everson Pintro'),
(4, 'Mayron'),
(5, 'Edir');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `entregas`
--
ALTER TABLE `entregas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `responsavel`
--
ALTER TABLE `responsavel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `entregas`
--
ALTER TABLE `entregas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de tabela `responsavel`
--
ALTER TABLE `responsavel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
