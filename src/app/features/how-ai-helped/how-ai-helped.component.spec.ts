import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowAIHelpedComponent } from './how-ai-helped.component';

describe('HowAIHelpedComponent', () => {
  let component: HowAIHelpedComponent;
  let fixture: ComponentFixture<HowAIHelpedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowAIHelpedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowAIHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
