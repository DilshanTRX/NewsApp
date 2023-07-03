import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcessContextComponent } from './main-process-context.component';

describe('MainProcessContextComponent', () => {
  let component: MainProcessContextComponent;
  let fixture: ComponentFixture<MainProcessContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProcessContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProcessContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
