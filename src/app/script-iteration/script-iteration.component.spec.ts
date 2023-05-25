import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptIterationComponent } from './script-iteration.component';

describe('ScriptIterationComponent', () => {
  let component: ScriptIterationComponent;
  let fixture: ComponentFixture<ScriptIterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptIterationComponent]
    });
    fixture = TestBed.createComponent(ScriptIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
