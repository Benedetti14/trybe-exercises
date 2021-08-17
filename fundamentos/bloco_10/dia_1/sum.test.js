const sum = require('./sum');

describe('Testa se a função retorna a soma dos parâmetros', () => {
  it('Testa o retorno quando os parâmetros são 4 e 5', () => {
    expect(9).toBe(sum(4, 5));
  })

  it('Testa o retorno quando os parâmetros são 0 e 0', () => {
    expect(0).toEqual(sum(0,0));
  })

  it('Lança um erro quando é passado uma string', () => {
    expect(() => { sum(4, '5')} ).toThrow();
  })

  it('Lança um erro quando é passado uma string', () => {
    expect(() => { sum(4, '5')} ).toThrowError(new Error ('parameters must be numbers'));
  })
});