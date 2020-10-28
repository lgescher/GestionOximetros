import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosequipoPage } from './datosequipo.page';

describe('DatosequipoPage', () => {
  let component: DatosequipoPage;
  let fixture: ComponentFixture<DatosequipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosequipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosequipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
