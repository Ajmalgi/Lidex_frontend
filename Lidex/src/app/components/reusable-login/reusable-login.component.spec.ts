import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLoginComponent } from './reusable-login.component';

describe('ReusableLoginComponent', () => {
  let component: ReusableLoginComponent;
  let fixture: ComponentFixture<ReusableLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
