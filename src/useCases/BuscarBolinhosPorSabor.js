const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class BuscarBolinhosPorSabor {
    async execute ({
        sabor
    }) {
        try {
            const resultado = await mysql.execute(
                `select * from estoque where sabor = ?`,
                [sabor]
            )
            
            return resultado;
        }catch(error) {
            return new AppError(error.message, 500)
        }
    }
}

module.exports = BuscarBolinhosPorSabor;