import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPaymentConfigPage } from './user-payment-config.page';

describe('UserPaymentConfigPage', () => {
  let component: UserPaymentConfigPage;
  let fixture: ComponentFixture<UserPaymentConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPaymentConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
