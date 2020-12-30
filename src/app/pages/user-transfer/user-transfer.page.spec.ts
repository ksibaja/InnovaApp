import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTransferPage } from './user-transfer.page';

describe('UserTransferPage', () => {
  let component: UserTransferPage;
  let fixture: ComponentFixture<UserTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
