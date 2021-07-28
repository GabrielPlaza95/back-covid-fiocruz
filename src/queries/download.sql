SELECT caminho_salvo_servidor
FROM pipeline
JOIN amostra USING (id_amostra)
WHERE id_ncbi = ?;
