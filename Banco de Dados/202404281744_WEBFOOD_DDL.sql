CREATE SEQUENCE sq_usuario;

CREATE TABLE tb_usuario (
    id_usuario integer DEFAULT nextval('sq_usuario') NOT NULL,
    nome_usuario character varying,
    sobrenome_usuario character varying,
    telefone_usuario character varying
);

ALTER TABLE tb_usuario
  ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
