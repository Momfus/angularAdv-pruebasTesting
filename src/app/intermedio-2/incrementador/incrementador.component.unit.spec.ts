import { IncrementadorComponent } from './incrementador.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// Aca todas las pruebas unitarias

describe('Incrementador component Unit', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('No debe de pasar de 100 el progreso', () => {
    component.progreso = 50;
    component.cambiarValor(105);
    fixture.detectChanges();

    fixture.whenStable().then( () => { // Es necesario para que se renderice y ejecute el onChanges

      component.onChanges(component.progreso);
      expect(component.progreso).toBe(100);

    })

  });

});
