import { mensaje } from './string';

// La pruebas que se tienen con una "x" al inicio se ignoran
// Importante que se llame como el archivo que se hace prueba con el agregado de "specs"
// En la pantalla de pruebas, si se coloca "debug", en la consola saldrá los mensajes que tengan en console.log las pruebas

// Para agrupar pruebas
//describe('Pruebas de Strings');

// Una prueba en concreto
// it('Debe regresar un string');
// it('Debe contender un nombre');


describe( 'Pruebas de strings', () => {

  it( 'Debe de regresar un string', () => {

    const res = mensaje('Momfus');

    // expect sirve para saber lo que se "espera" ser exitoso, pueden ser varios expects
    expect( (typeof res) ).toBe('string');

  });

  it( 'Debe de retornar un saludo con el nombre enviado', () => {

    const nombre = 'Juan'
    const res = mensaje( nombre );
    expect( res ).toContain( nombre ); // Que el mensaje (cadena de string) contenga el contenido de la variable ingresada

  });

});
