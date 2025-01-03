DELIMITER $$

CREATE TRIGGER after_insert_tb_produtos
AFTER INSERT
ON tb_produtos
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/products';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    DECLARE chopp_setor INT DEFAULT 1298;
    DECLARE porcao_setor INT DEFAULT 1398;
    DECLARE category VARCHAR(10);

    IF NEW.ID_Setor = chopp_setor OR NEW.ID_Setor = porcao_setor THEN

        IF NEW.ID_Setor = chopp_setor THEN
            SET category = 'CHOPP';
        ELSE
            SET category = 'FOOD';
        END IF;
        
        SET body = JSON_OBJECT(
            'product', JSON_OBJECT(
                'id', NEW.Codigo,
                'name', NEW.Produto,
                'price', NEW.Preco_Venda,
                'category', category
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

    END IF;
END$$

DELIMITER ;


DELIMITER $$

CREATE TRIGGER after_update_tb_produtos
AFTER UPDATE
ON tb_produtos
FOR EACH ROW
BEGIN
    -- Define a URL do backend principal
    DECLARE url VARCHAR(255) DEFAULT 'http://localhost:8080/syncDB/products';
	DECLARE body JSON;
    DECLARE headers JSON;
    DECLARE res VARCHAR(255);
    DECLARE chopp_setor INT DEFAULT 1298;
    DECLARE porcao_setor INT DEFAULT 1398;
    DECLARE category VARCHAR(10);

    IF NEW.ID_Setor = chopp_setor OR NEW.ID_Setor = porcao_setor THEN

        IF NEW.ID_Setor = chopp_setor THEN
            SET category = 'CHOPP';
        ELSE
            SET category = 'FOOD';
        END IF;
        
        SET body = JSON_OBJECT(
            'id', NEW.Codigo,
            'name', NEW.Produto,
            'price', NEW.Preco_Venda,
            'category', category
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

    END IF;
END$$

DELIMITER ;

