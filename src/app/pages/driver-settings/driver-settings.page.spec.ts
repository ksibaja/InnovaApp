import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverSettingsPage } from './driver-settings.page';

describe('DriverSettingsPage', () => {
  let component: DriverSettingsPage;
  let fixture: ComponentFixture<DriverSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
