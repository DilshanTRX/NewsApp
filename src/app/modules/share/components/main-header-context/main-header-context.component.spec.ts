import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderContextComponent } from './main-header-context.component';

describe('MainHeaderContextComponent', () => {
  let component: MainHeaderContextComponent;
  let fixture: ComponentFixture<MainHeaderContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
