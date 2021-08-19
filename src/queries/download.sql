SELECT *
FROM arquivo
WHERE id_arquivo = (
SELECT id_arquivo FROM amostra WHERE id_amostra = ?);
