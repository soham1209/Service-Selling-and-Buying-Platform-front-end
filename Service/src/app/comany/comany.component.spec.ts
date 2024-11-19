import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanyComponent } from './comany.component';

describe('ComanyComponent', () => {
  let component: ComanyComponent;
  let fixture: ComponentFixture<ComanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComanyComponent]
    });
    fixture = TestBed.createComponent(ComanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
