INSERT INTO amostra (
        id_arquivo,
        id_geo,
		versao_crc,
		parametros_crc,
		filtragem_crc,
		celulas_infectadas
        )
VALUES (?, ?, ?, ?, ?, ?);
