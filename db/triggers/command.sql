DELIMITER $$

CREATE TRIGGER after_update_tb_comandas
AFTER UPDATE
ON tb_comandas
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/commands';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    
    SET body = JSON_OBJECT(
        'command', JSON_OBJECT(
            'commandNumber', NEW.Codigo,
            'tableNumber', NEW.Mesa,
            'active', NEW.Ativo
        )
	);

    -- Define os headers da requisição
    SET headers = JSON_OBJECT(
        'Content-Type', 'application/json'
    );

    -- Faz a requisição HTTP assíncrona
    SET res = (
		SELECT http_request(
			"PUT",
			url,
			body,
			headers,
			JSON_OBJECT() -- Opções cURL adicionais (pode ser vazio)
		)
    );
END$$

DELIMITER ;
