const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');
const jwt = require('jsonwebtoken');

class AutenticarColaborador {
    async execute ({
        email,
        senha
    }) {
        try {
            const colaborador = await mysql.execute(
                `select * from colaboradores where email = ?`,
                [email]
            )
            if(colaborador.length < 1) {
                return new AppError('Falha na autenticação', 401)
            } 

            if (colaborador[0].senha !== senha) {
                return new AppError('Falha na autenticação', 401)
            } else {
                const token = jwt.sign({
                    id: colaborador[0].id,
                    email: colaborador[0].email
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                });

                return {
                    mensagem: 'Autenticado com sucesso!',
                    token: token
                }
            }
        }catch(error) {
            return new AppError(error.message, 500)
        }
    }
}

module.exports = AutenticarColaborador;