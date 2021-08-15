SELECT
	id_amostra AS id,
	id_ncbi AS numero,
	esta_infectado AS estaInfectado,
	id_arquivo,
	arquivo.nome as nomeArquivo,
	doenca.id_doenca,
	doenca.nome AS doenca,
	gravidade.id_gravidade,
	gravidade.nome AS gravidade,
	tecido.id_tecido,
	tecido.nome AS tecido
FROM
	amostra
JOIN doenca USING (id_doenca)
JOIN gravidade USING (id_gravidade)
JOIN tecido USING (id_tecido)
JOIN arquivo USING (id_arquivo)
WHERE
	id_amostra = ?
