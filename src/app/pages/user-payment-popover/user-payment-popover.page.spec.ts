import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPaymentPopoverPage } from './user-payment-popover.page';

describe('UserPaymentPopoverPage', () => {
  let component: UserPaymentPopoverPage;
  let fixture: ComponentFixture<UserPaymentPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPaymentPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
