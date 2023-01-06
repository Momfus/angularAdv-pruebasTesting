// Con ng test --code-coverage puedo ver un porcentaje de cobertura general de nuestra aplicacion creando una carpeta  llamada coverga con la info en index.html

import { Jugador } from './clase';

let jugador = new Jugador();

beforeAll( () => {
  // console.log('beforeAll');
});

beforeEach( () => {
  // console.log('beforeEach');
  // jugador.hp = 100;
  jugador = new Jugador(); // Inicializarlo de nuevo
});

afterAll( () => {
  // console.log('afterAll');
});

afterEach( () => {
  // console.log('afterEach');
  // jugador.hp = 100;
});


describe( 'Pruebas de clase', () => {


  it( 'Debe de retornar 80 de hp, si recibe 20 de daño', () => {

    const res = jugador.recibeDanio(20);

    expect( res ).toBe(80);

  });

  it( 'Debe de retornar 50 de hp, si recibe 50 de daño', () => {

    const res = jugador.recibeDanio(50);
    expect( res ).toBe(50);

  });

  it( 'Debe de retornar 0 de hp, si recibe 100 de daño', () => {

    const res = jugador.recibeDanio(100);
    expect( res ).toBe(0);

  });

});
