const AdicionarBolinhosAoEstoque = require("../useCases/AdicionarBolinhosAoEstoque");
const AdicionarSaborDeBolinhoAoEstoque = require("../useCases/AdicionarSaborDeBolinhoAoEstoque");
const BuscarBolinhosPorSabor = require("../useCases/BuscarBolinhosPorSabor");

module.exports = class BolinhoController {
    
    async reporEstoque(request, response) {
      const { sabor, quantidade } = request.body;
      
      const buscarBolinhosPorSabor = new BuscarBolinhosPorSabor;
  
      const bolinhos = await buscarBolinhosPorSabor.execute({
        sabor: sabor,
      });
      
      let resultado;
      if(bolinhos.length < 1) {
        const adicionarSabor = new AdicionarSaborDeBolinhoAoEstoque;

        resultado = await adicionarSabor.execute({
          sabor: sabor,
          quantidade: quantidade
        })
      } 
      else {
        const adicionarBolinhos = new AdicionarBolinhosAoEstoque;

        resultado = await adicionarBolinhos.execute({
          sabor: sabor,
          quantidade: quantidade + bolinhos[0].quantidade
        })
      }
      
      return response.json(resultado);
    }
  }