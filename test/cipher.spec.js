describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "SEGJ segj 5442 *)/" para "AMOR amor 1008 !/&" con offset 564', () => {
      assert.equal(cipher.encode(564, 'AMOR amor 1008 !/&'),'SEGJ segj 5442 *)/');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "AMOR amor 1008 !/&" para "SEGJ segj 5442 *)/" con offset 564', () => {
      assert.equal(cipher.decode(564, 'SEGJ segj 5442 *)/'),'AMOR amor 1008 !/&');
    });
  });

  /*describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});
