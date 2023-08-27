import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrtcodeComponent } from './shrtcode.component';

describe('ShrtcodeComponent', () => {
  let component: ShrtcodeComponent;
  let fixture: ComponentFixture<ShrtcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShrtcodeComponent]
    });
    fixture = TestBed.createComponent(ShrtcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
