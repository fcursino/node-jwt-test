const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class AdicionarSaborDeBolinhoAoEstoque {
    async execute ({
        sabor, quantidade
    }) {
        try {
            await mysql.execute(
                `insert into estoque (sabor, quantidade) values (?,?)`,
                [sabor, quantidade]
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

module.exports = AdicionarSaborDeBolinhoAoEstoque;