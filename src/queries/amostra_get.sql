SELECT
	id_amostra AS id,
	id_ncbi AS numero,
	esta_infectado AS estaInfectado,
	id_arquivo,
	arquivo.nome as nomeArquivo,
	doenca.nome AS doenca,
	gravidade.nome AS gravidade,
	tecido.nome AS tecido
FROM
	amostra
JOIN doenca USING (id_doenca)
JOIN gravidade USING (id_gravidade)
JOIN tecido USING (id_tecido)
JOIN arquivo USING (id_arquivo)
WHERE
	id_amostra = ?
