DELIMITER $$

CREATE TRIGGER after_insert_tb_mesa_comanda
AFTER INSERT
ON tb_mesa_comanda
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/tableCommand';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    
    SET body = JSON_OBJECT(
		'command', NEW.Id_Comanda,
		'table', NEW.Id_Mesa
	);

    -- Define os headers da requisição
    SET headers = JSON_OBJECT(
        'Content-Type', 'application/json'
    );

    -- Faz a requisição HTTP assíncrona
    SET res = (
		SELECT http_request(
			"POST",
			url,
			body,
			headers,
			JSON_OBJECT() -- Opções cURL adicionais (pode ser vazio)
		)
    );
END$$

DELIMITER ;