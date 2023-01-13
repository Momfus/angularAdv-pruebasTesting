import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

class FakeRouter {
  navigate( params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = of(null);

  private subject = new Subject();

  push( valor: any ) { // Agregar un nuevo valor al subject
    this.subject.next( valor );
  }

  get params() { // Regresa un nuevo observable para simular la creación de un id nuevo
    return this.subject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [ // Necesarios porque los utiliza el componente
        { provide: Router, useClass: FakeRouter}, // De esta manera en vez de Router utiliza el FakeRouter que hice con un método especifico que quiero probar
        { provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it( 'Debe de redireccionar a Médico cuando se guarde', () => {

    const router = TestBed.inject(Router);

    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith(['medico', '123']);

  });

  it( 'Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( {id: 'nuevo'} );

    expect( component.id).toBe('nuevo');

  });

});
