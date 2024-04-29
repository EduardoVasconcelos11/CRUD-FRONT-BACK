import {Request, Response } from 'express';
import connectionDB from './connectionDB';

const conn = connectionDB;

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await conn.query('SELECT * FROM tb_usuario');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao obter usuários do banco de dados:', err);
        res.status(500).send('Erro ao obter usuários do banco de dados');
    }
};


export const createUser = async (req: Request, res: Response) => {
    
    const {nomeUsuario, sobrenomeUsuario, telefoneUsuario } = req.body;
    if (!nomeUsuario || !sobrenomeUsuario || !telefoneUsuario) {
        return res.status(400).send('Nome, sobrenome e Telefone, são campos obrigatórios!');
    }
    try {
        await conn.query(`INSERT INTO tb_usuario (nome_usuario,   
                                                sobrenome_usuario, 
                                                telefone_usuario) 
                                        VALUES ('${nomeUsuario}',
                                                '${sobrenomeUsuario}',
                                                '${telefoneUsuario}');`);
        res.status(201).send('Criado com Sucesso!');
    } catch (err) {
        console.error('Erro ao inserir usuário no banco de dados:', err);
        res.status(500).send('Erro ao inserir usuário no banco de dados');
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { idUsuario, nomeUsuario, sobrenomeUsuario, telefoneUsuario } = req.body;
    if (!idUsuario || !nomeUsuario || !sobrenomeUsuario || !telefoneUsuario) {
        return res.status(400).send('Id do usuário, nome, sobrenome e telefone, são campos obrigatórios');
    }
    try{
        await conn.query(`UPDATE tb_usuario SET nome_usuario = '${nomeUsuario}', 
                                                sobrenome_usuario = '${sobrenomeUsuario}',
                                                telefone_usuario = '${telefoneUsuario}'
                                        WHERE id_usuario = ${idUsuario};`);
        res.status(201).send('Atualizado com Sucesso!')
    }catch(err){
        console.error('Erro ao atualizar usuário no banco de dados:', err);
        res.status(500).send('Erro ao atualizar usuário no banco de dados');
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const {idUsuario} = req.body;
    if (!idUsuario){
        return res.status(500).send('Id do usuário é um campo obrigatório');
    }
    try{
        await conn.query(`DELETE FROM tb_usuario WHERE id_usuario = ${idUsuario};`);
        res.status(201).send('Excluido com Sucesso!')
    }catch(err){
        res.status(400).send('Erro ao tentar excluir.');
    };
}