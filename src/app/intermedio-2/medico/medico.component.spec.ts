import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing'; // Se configura en el beforeEach, el componentFixture es para interactuar con el DOM


import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

// Pruebas de integración

describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {

    // Para compilar y funciona con su ciclo de cambios, pipes, etc al trabajar con el renderizado de html
    TestBed.configureTestingModule({

      // Se especifica lo que se usa en el test de integracion
      declarations: [ MedicoComponent],
      providers: [MedicoService],
      imports: [ HttpClientModule]
      // imports: []

    });

    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;

  });

  it( 'Debe de crearse el componente', () => {

    expect(component).toBeTruthy(); // Para saber si existe

  });

  it( 'Debe de retornar el nombre del médico', () => {

    const nombre = 'Juan';
    const res = component.saludarMedico( nombre );


    expect( res ).toContain( nombre );

  });

});
