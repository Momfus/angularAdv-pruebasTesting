import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, throwError, of } from 'rxjs' // es una función que crea un nuevo observable a partir de una variedad de objetos y tipos de datos. Estos objetos y tipos de datos pueden incluir arreglos, promesas, iteradores, observables y otros.

// Nota: En Angular, un "spy" es una herramienta que se puede utilizar para simular el comportamiento de una dependencia de un componente o servicio durante las pruebas.

describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    const spy = jasmine.createSpyObj('HttpClient', ['prueba']); // Objeto fake de http cliente
    const servicio = new MedicosService( spy ); // No voy a usar http, porque son pruebas unitarias

    beforeEach( () => {

      componente = new MedicosComponent(servicio);

    });


    it('Init: Debe de cargar los médicos', () => {

      const medicos = [ 'medico1', 'medico2', 'medico3' ];
      spyOn( servicio, 'getMedicos' ).and.callFake( () => { // Nos permite hacer peticiones falsas, en este caso cuando se llama a getMedicos del servicio se ejecuta la función definida

        return from( [ medicos ]);

      });
      componente.ngOnInit();

      expect( componente.medicos.length ).toBeGreaterThan(0);

    });

    it( 'Debe de llamar al servidor para agregar un médico', () => {

      const espia = spyOn( servicio, 'agregarMedico').and.callFake( () => new Observable() );

      componente.agregarMedico();

      expect( espia ).toHaveBeenCalled();

    });

    it( 'Debe de agregar un nuevo médico al arreglo de médicos', () => {

      const medico = { id: 1, nombre: "Momfus" }
      spyOn( servicio, 'agregarMedico')
            .and.returnValue( from( [ medico ]) );

      componente.agregarMedico();

      expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0); // Confirmar que el médico enviado este incluido en el arreglo de médicos

    });

    it( 'Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () =>  {

      const miError = 'No se pudo arreglar al médico'

      spyOn( servicio, 'agregarMedico')
        .and.returnValue( throwError(() => new Error(miError)) )

      componente.agregarMedico();

      expect( componente.mensajeError ).toBe( miError );

    });

    it( 'Debe de llamar al servidor para borrar un médico', () => {

      spyOn( window, 'confirm').and.returnValue(true) // Para simular el confirmar el borrado con el confirm del promt

      const espia = spyOn(servicio, 'borrarMedico')
                      .and.returnValue(  of(null) ); // of(null) suplanta al anteriro empty()

      componente.borrarMedico('1');

      expect( espia ).toHaveBeenCalledWith('1'); // Que sea llamado el servicio con ese dato
    });

    it( 'No debe de llamar al servidor para borrar un médico', () => {

      spyOn( window, 'confirm').and.returnValue(false)

      const espia = spyOn(servicio, 'borrarMedico')
                      .and.returnValue(  of(null) );

      componente.borrarMedico('1');

      expect( espia ).not.toHaveBeenCalledWith('1');
    });

});
