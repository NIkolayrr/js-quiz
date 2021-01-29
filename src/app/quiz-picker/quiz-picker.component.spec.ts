import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPickerComponent } from './quiz-picker.component';

describe('QuizPickerComponent', () => {
  let component: QuizPickerComponent;
  let fixture: ComponentFixture<QuizPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
