SELECT
--	id_amostra AS id,
--	data_criacao AS creationTime,
--	data_atualizacao AS updateTime,
	id_ncbi AS numero,
	esta_infectado AS estaInfectado,
	doenca.nome AS doenca,
	gravidade.nome AS gravidade,
	tecido.nome AS tecido
FROM
	amostra
JOIN doenca USING (id_doenca)
JOIN gravidade USING (id_gravidade)
JOIN tecido USING (id_tecido)
WHERE
	id_ncbi = ?
	OR doenca.nome LIKE '%%' ? '%%'
	OR tecido.nome LIKE '%%' ? '%%';
