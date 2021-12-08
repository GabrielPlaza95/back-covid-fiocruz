SELECT
	am.id_amostra as id,
	am.id_arquivo as arquivo,
	am.id_geo,
	a.identificador as id_biosample,
	am.versao_crc,
	am.parametros_crc as param_crc,
	am.filtragem_crc as filtro_crc,
	am.celulas_infectadas
FROM
	amostra am
JOIN arquivo a ON a.id_arquivo = am.id_arquivo
WHERE
	am.id_geo LIKE CONCAT('%%', ?, '%%')
	OR a.identificador LIKE CONCAT('%%', ?, '%%');
