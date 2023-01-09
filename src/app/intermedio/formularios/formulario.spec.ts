import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe( 'Formularios', () => {

  let componente: FormularioRegister;

  beforeEach( () => {

    componente = new FormularioRegister( new FormBuilder() );

  });


  it( 'Debe de crear un formulario con dos campos: emial y password', () => {

    expect( componente.form.contains('email') ).toBeTrue();
    expect( componente.form.contains('password') ).toBeTrue();

  });


  it( 'El email debe de ser obligatorio', () => {

    const control = componente.form.get('email');
    control?.setValue('');

    expect( control?.valid ).toBeFalse();

  });

  it( 'El email debe de ser un correo válido', () => {

    const control = componente.form.get('email');
    control?.setValue('miEmail@email.com');

    expect( control?.valid ).toBeTrue();

  });

});
