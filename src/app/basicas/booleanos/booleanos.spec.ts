import { usuarioIngresado } from './booleanos';


describe('Pruebas de Booleanos', () => {

  it('Debe de retonar true', () => {

    const res = usuarioIngresado();

    // expect( res ).toBe(true);
    // expect( res ).toBeTrue();
    expect( res ).not.toBeFalse();

  })

});
