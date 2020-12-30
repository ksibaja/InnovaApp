import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPaymentAddPage } from './user-payment-add.page';

describe('UserPaymentAddPage', () => {
  let component: UserPaymentAddPage;
  let fixture: ComponentFixture<UserPaymentAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPaymentAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
