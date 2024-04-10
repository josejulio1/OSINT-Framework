DROP DATABASE IF EXISTS osint_framework;

CREATE DATABASE osint_framework CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE osint_framework;

CREATE TABLE Source (
    name VARCHAR(50) NOT NULL,
    image_path VARCHAR(100) NOT NULL,
    type_source ENUM('Web', 'Programa')
);

CREATE TABLE Web_Url (
    web_url VARCHAR(100) NOT NULL,
    source_name VARCHAR(50) NOT NULL
);

CREATE TABLE Tag (
    tag_name VARCHAR(50) NOT NULL
);

CREATE TABLE Web_Url_Puede_Buscar_Tag (
    web_url VARCHAR(100) NOT NULL,
    tag_name VARCHAR(50) NOT NULL
);

CREATE TABLE Web_Url_Puede_Obtener_Tag (
    web_url VARCHAR(100) NOT NULL,
    tag_name VARCHAR(50) NOT NULL
);

-- Alter
ALTER TABLE Source
ADD CONSTRAINT pk_source PRIMARY KEY (name)
;

ALTER TABLE Web_Url
ADD CONSTRAINT pk_webUrl PRIMARY KEY (web_url),
ADD CONSTRAINT fk_webUrl_sourceName FOREIGN KEY (source_name) REFERENCES Source(name)
;

ALTER TABLE Tag
ADD CONSTRAINT pk_tag PRIMARY KEY (tag_name)
;

ALTER TABLE Web_Url_Puede_Buscar_Tag
ADD CONSTRAINT pk_webUrlPuedeBuscarTag PRIMARY KEY (web_url, tag_name),
ADD CONSTRAINT fk_webUrlPuedeBuscarTag_webUrl FOREIGN KEY (web_url) REFERENCES Web_Url(web_url),
ADD CONSTRAINT fk_webUrlPuedeBuscarTag_tagName FOREIGN KEY (tag_name) REFERENCES Tag(tag_name)
;

ALTER TABLE Web_Url_Puede_Obtener_Tag
ADD CONSTRAINT pk_webUrlPuedeObtenerTag PRIMARY KEY (web_url, tag_name),
ADD CONSTRAINT fk_webUrlPuedeObtenerTag_webUrl FOREIGN KEY (web_url) REFERENCES Web_Url(web_url),
ADD CONSTRAINT fk_webUrlPuedeObtenerTag_tagName FOREIGN KEY (tag_name) REFERENCES Tag(tag_name)
;

-- Vistas
CREATE VIEW V_Source_Web_Url_Tag AS
SELECT s.name, w.web_url, s.image_path, s.type_source, wpb.tag_name AS "puede_buscar", wpo.tag_name AS "puede_obtener"
FROM Source s JOIN Web_Url w ON s.name = w.source_name JOIN Web_Url_Puede_Buscar_Tag wpb ON w.web_url = wpb.web_url JOIN Web_Url_Puede_Obtener_Tag wpo ON w.web_url = wpo.web_url
;