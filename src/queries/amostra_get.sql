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
	tecido.nome AS tecido,
	comorbidade.id_comorbidade,
	comorbidade.nome as comorbidade
FROM
	amostra
JOIN doenca USING (id_doenca)
JOIN gravidade USING (id_gravidade)
JOIN tecido USING (id_tecido)
JOIN arquivo USING (id_arquivo)
LEFT JOIN amostra_comorbidade USING (id_amostra)
LEFT JOIN comorbidade USING (id_comorbidade)
WHERE
	id_amostra = ?
