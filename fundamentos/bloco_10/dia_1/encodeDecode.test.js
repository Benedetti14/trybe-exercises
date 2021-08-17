const challenges = require('./encodeDecode');

describe('Realiza testes nas funções Encode e Decode', () => {
  it('Verifica se Encode e Decode são funções', () => {
    expect(typeof challenges.encode).toBe('function');
    expect(typeof challenges.decode).toBe('function');
  })

  it('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('12345').toMatch(challenges.encode('aeiou'));
  })

  it('teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect('aeiou').toMatch(challenges.decode('12345'));
  })

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('bcdfghjklmnpqrstvwxyz').toEqual(challenges.encode('bcdfghjklmnpqrstvwxyz'));
    expect('bcdfghjklmnpqrstvwxyz').toEqual(challenges.decode('bcdfghjklmnpqrstvwxyz'));
  })

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const str = 'hello';
    const str2 = 'h2ll4';
    expect(challenges.encode(str)).toHaveLength(str.length);
    expect(challenges.decode(str2)).toHaveLength(str2.length);
  })
});