import { TestBed, ComponentFixture } from '@angular/core/testing'; // Se configura en el beforeEach, el componentFixture es para interactuar con el DOM


import { MedicoComponent } from './medico.component';

// Pruebas de integración

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {

    // Para compilar y funciona con su ciclo de cambios, pipes, etc al trabajar con el renderizado de html
    TestBed.configureTestingModule({

      // Se especifica lo que se usa en el test de integracion
      declarations: [ MedicoComponent],
      // providers: [],
      // imports: []

    });

    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;

  });

  it( '', () => {

  });

});
