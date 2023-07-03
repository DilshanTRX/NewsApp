import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNavBarComponent } from './main-page-nav-bar.component';

describe('MainPageNavBarComponent', () => {
  let component: MainPageNavBarComponent;
  let fixture: ComponentFixture<MainPageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
