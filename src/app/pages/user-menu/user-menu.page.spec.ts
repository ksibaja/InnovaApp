import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserMenuPage } from './user-menu.page';

describe('UserMenuPage', () => {
  let component: UserMenuPage;
  let fixture: ComponentFixture<UserMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
