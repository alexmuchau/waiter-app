DELIMITER $$

CREATE TRIGGER after_insert_tb_Pessoas
AFTER INSERT
ON tb_pessoas
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/clients';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    
    SET body = JSON_OBJECT(
        'client', JSON_OBJECT(
            'id', NEW.Codigo,
            'name', NEW.Apelido
        )
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


DELIMITER $$

CREATE TRIGGER after_update_tb_Pessoas
AFTER UPDATE
ON tb_pessoas
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/clients';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    
    SET body = JSON_OBJECT(
		'id', NEW.Codigo,
        'name', NEW.Apelido
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
