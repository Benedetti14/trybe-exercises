const myRemove = require('./myRemove');

describe('Remove o item de um array caso ele exista', () => {
  it('Dado p array [1, 2, 3, 4] e numero 3 retorna o array sem o 3', () => {
    const arr = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(arr, 3));
  })

  it('Dada o array [1, 2, 3, 4] e o numero 3, não é retornado o array completo', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual(arr);
  })

  it('Verifica se o array passado não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual(arr);
  })

  it('Verifica se retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(arr).toEqual(myRemove(arr, 5));
  })
})