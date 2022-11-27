const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class AdicionarBolinhosAoEstoque {
    async execute ({
        sabor,
        quantidade
    }) {
        try {
            await mysql.execute(
                `update estoque set quantidade = ? where sabor = ?`,
                [quantidade, sabor]
            )

            return {
                sabor: sabor,
                quantidadeAtual: quantidade
            };
        }catch(error) {
            return new AppError(error.message, 500)
        }
    }
}

module.exports = AdicionarBolinhosAoEstoque;