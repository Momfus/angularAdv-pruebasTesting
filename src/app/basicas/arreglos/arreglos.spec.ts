import { obtenerRobots } from './arreglos';



xdescribe('Pruebas de arreglos', () => { // Prueba ignorada

  it( 'Debe de retornar al menos 3 robots', () => {

    const res = obtenerRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3); // Mayor o igual a 3 lo que retorna

  });

  it( 'Debe de existir Megaman y Ultron', () => {

    const res = obtenerRobots();

    expect( res ).toContain('Megaman');
    expect( res ).toContain('Ultron');

  });

});
