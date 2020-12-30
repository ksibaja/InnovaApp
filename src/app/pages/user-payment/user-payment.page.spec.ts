import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPaymentPage } from './user-payment.page';

describe('UserPaymentPage', () => {
  let component: UserPaymentPage;
  let fixture: ComponentFixture<UserPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
