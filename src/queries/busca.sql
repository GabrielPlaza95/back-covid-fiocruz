SELECT
	id_amostra AS id,
	id_ncbi AS numero,
	esta_infectado AS estaInfectado,
	id_arquivo,
	arquivo.nome as nomeArquivo,
	doenca.nome AS doenca,
	gravidade.nome AS gravidade,
	tecido.nome AS tecido,
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
	id_ncbi LIKE CONCAT('%%', ?, '%%')
	OR doenca.nome LIKE CONCAT('%%', ?, '%%')
	OR tecido.nome LIKE CONCAT('%%', ?, '%%');
