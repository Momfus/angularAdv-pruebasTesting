import { incrementar } from './numeros';


describe('Pruebas de números', () => {

  it( 'Debe de retornar 100, si el número ingresado es mayor a 100', () => {

    const res = incrementar(300);
    expect( res ).toBe(100);

  });

  it( 'Debe de retornar el numero ingresado + 1, si no es mayor a 100', () => {

    const miNumero = 50;
    const res = incrementar(miNumero);

    expect( res ).toBe(miNumero + 1);

  });

});
