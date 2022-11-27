const mysql = require('../../db/mysql');
const AppError = require('../errors/AppError');

class LiberarBolinhoParaColaborador {
    async execute ({
        id
    }) {
        try {
            const colaborador = await mysql.execute(
                `select * from colaboradores where id = ?`,
                [id]
            )

            if(colaborador.length < 1) {
                return new AppError('Colaborador não encontrado', 404)
            }

            if(colaborador[0].total_bolinhos !== 0) {
                return new AppError(`O colaborador ${colaborador[0].nome} já tem 1 bolinho`, 406);
            }
            
            return colaborador[0];
        }catch(error) {
            throw new AppError(error.message, 500)
        }
            
        
    }
}

module.exports = LiberarBolinhoParaColaborador;