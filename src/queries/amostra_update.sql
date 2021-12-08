UPDATE amostra 
SET 
    id_geo = ?,
    versao_crc = ?,
    parametros_crc = ?,
    filtragem_crc = ?,
    celulas_infectadas = ?
WHERE id_amostra = ?;
