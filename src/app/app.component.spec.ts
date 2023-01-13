import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]) // Para simular las rutas y no cargar componentes inncesarios de angular

      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '4-pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('4-pruebas');
  });

  it( 'Debe de tener un router-outlet', () => {

    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive( RouterOutlet ));

    expect( debugElement ).not.toBeNull(); // No ser nulo (deberia encontrarlo)

  });

  it( 'Debe de tener un link a la página de médicos', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref) ); // RouterLinkWithHref es la etiqueta "<a routerLink..." en app.component.html

    let existe = false;

    for( const elem of elementos ) {

      if( elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }

    }

    expect( existe ).toBeTruthy();

  });

});
