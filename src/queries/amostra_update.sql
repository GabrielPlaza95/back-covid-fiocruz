UPDATE amostra 
SET 
    id_ncbi = ?,
    esta_infectado = ?,
    id_doenca = ?,
    id_gravidade = ?,
    id_tecido = ?,
    id_arquivo = ? 
WHERE id_amostra = ?;
