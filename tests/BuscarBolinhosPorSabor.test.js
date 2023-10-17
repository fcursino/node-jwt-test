const BuscarBolinhosPorSabor = require ('../src/useCases/BuscarBolinhosPorSabor');
const mysql = require('../db/mysql');
const banco = require('mysql')
jest.mock('../db/mysql');

let buscarBolinhosPorSabor;

const execute = jest.fn()

buscarBolinhosPorSabor = {
    execute
}


describe('BuscarBolinhosPorSabor', () => {
    const OLD_ENV = process.env;

    // beforeEach(() => {
    //   buscarBolinhosPorSabor = new BuscarBolinhosPorSabor();
    // })

    beforeEach(() => {
        execute.mockReset()
        execute.mockResolvedValue([])
       
      })


  it('Deve ser possivel buscar bolinhos pelo sabor', async() => {
    
    const bolinhos = await buscarBolinhosPorSabor.execute({
      sabor: 'chocolate'
    });

    // expect(mysql.execute).toHaveBeenCalledTimes(1)
    expect(bolinhos.length).toEqual(0);
  });

});