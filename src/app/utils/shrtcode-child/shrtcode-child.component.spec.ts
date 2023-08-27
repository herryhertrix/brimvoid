import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrtcodeChildComponent } from './shrtcode-child.component';

describe('ShrtcodeChildComponent', () => {
  let component: ShrtcodeChildComponent;
  let fixture: ComponentFixture<ShrtcodeChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShrtcodeChildComponent]
    });
    fixture = TestBed.createComponent(ShrtcodeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
