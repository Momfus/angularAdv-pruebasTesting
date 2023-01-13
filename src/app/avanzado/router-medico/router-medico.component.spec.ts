import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

class FakeRouter {
  navigate( params: any) {}
}

class FakeActivatedRoute {
  params: Observable<any> = of(null);
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


});
