const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class RetirarBolinhoDoEstoque {
    async execute () {
        try {
            const bolinhos = await mysql.execute(
                `select * from estoque where quantidade > 0`
            )

            if(bolinhos.length < 1) {
                return new AppError('Não há bolinhos no estoque. Aguarde a reposição', 404)
            }

            await mysql.execute(
                `update estoque set quantidade = ? where sabor = ?`,
                [bolinhos[0].quantidade-1, bolinhos[0].sabor]
            )
            
            return bolinhos[0];
        }catch(error) {
            return new AppError(error.message, 500)
        }
    }
}

module.exports = RetirarBolinhoDoEstoque;