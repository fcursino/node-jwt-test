const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class AdicionarBolinhoAoColaborador {
    async execute ({
        id
    }) {
        try {
            await mysql.execute(
                `update colaboradores set total_bolinhos = 1 where id = ?`,
                [id]
            )

            return true;

        }catch(error) {
            return new AppError(error.message, 500)
        }
    }
}

module.exports = AdicionarBolinhoAoColaborador;