import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverMenuPage } from './driver-menu.page';

describe('DriverMenuPage', () => {
  let component: DriverMenuPage;
  let fixture: ComponentFixture<DriverMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
