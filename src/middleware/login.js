const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

exports.auth = (request, response, next) => {

    try {
        const token = request.headers.token;
        const decode = jwt.verify(token, process.env.JWT_KEY);
        next();
    } catch (error) {
        return response.status(401).send({ mensagem: 'Falha na autenticação' });
    }

}

