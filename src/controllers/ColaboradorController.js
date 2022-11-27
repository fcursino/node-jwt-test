const AppError = require("../errors/AppError");
const AdicionarBolinhoAoColaborador = require("../useCases/AdicionarBolinhoAoColaborador");
const AutenticarColaborador = require("../useCases/AutenticarColaborador");
const LiberarBolinhoParaColaborador = require("../useCases/LiberarBolinhoParaColaborador");
const RetirarBolinhoDoEstoque = require("../useCases/RetirarBolinhoDoEstoque");

module.exports = class ColaboradorController {
    
    async login(request, response) {
      const { email, senha } = request.body;
  
      const autenticarColaborador = new AutenticarColaborador;
  
      const auth = await autenticarColaborador.execute({
        email: email,
        senha: senha
      });

      return response.json(auth);
    }

    async acessarBolinhos(request, response) {
      const { id } = request.params;

      const liberarBolinho = new LiberarBolinhoParaColaborador;
      const respostaColaborador = await liberarBolinho.execute({
        id: id
      })

      
      if(respostaColaborador.nome) {
        const retirarBolinho = new RetirarBolinhoDoEstoque;
        const respostaBolinho = await retirarBolinho.execute();

        if(respostaBolinho.sabor) {
          const entregarBolinho = new AdicionarBolinhoAoColaborador;
          const respostaEntrega = await entregarBolinho.execute({
            id: id
          })

          if(respostaEntrega===true) {
            
            return response.json({
              colaborador: respostaColaborador.nome,
              saborDoBolinho: respostaBolinho.sabor
            });
          } else {
            response.json(respostaEntrega);
          }
        } else {
          return response.json(respostaBolinho);
        }
      } else {
        return response.json(respostaColaborador);
      }
      
     
      
    }
  }