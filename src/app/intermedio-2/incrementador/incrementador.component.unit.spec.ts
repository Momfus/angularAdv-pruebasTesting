import { IncrementadorComponent } from './incrementador.component';

// Aca todas las pruebas unitarias

describe('Incrementador component Unit', () => {

  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('No debe de pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(105);
    expect(component.progreso).toBe(100);
  });

});
