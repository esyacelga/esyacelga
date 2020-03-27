import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectorPage } from './sector.page';

describe('SectorPage', () => {
  let component: SectorPage;
  let fixture: ComponentFixture<SectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
