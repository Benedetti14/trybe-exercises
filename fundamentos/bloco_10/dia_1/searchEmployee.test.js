const searchEmployee = require('./searchEmployee');

describe('Realiza teste sobre a função searchEmployee', () => {
  it('Verifica sua declaração', () => {
    expect(searchEmployee).toBeDefined();
  })

  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  })

  it('Verifica se a função retorna corretamente', () => {
    expect(searchEmployee('8579-6', 'specialities')).toEqual('ID: 8579-6, specialities: UX,Design');
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual('ID: 9852-2-2, firstName: Jeff');
    expect(searchEmployee('4456-4', 'lastName')).toEqual('ID: 4456-4, lastName: Zuckerberg');
  })

  it('Devolve um erro caso o id não exista', () => {
    expect(() => { searchEmployee('14', 'specialities') }).toThrow(/ID não identificada/);
  })

  it('Devolve erro se a informação que se quer acessar não existir', () => {
    expect(() => { searchEmployee('8579-6', 'erro') }).toThrow(/Informação indisponível/);
  })
});