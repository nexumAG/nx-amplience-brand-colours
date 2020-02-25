import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenColorSummaryComponent } from './chosen-color-summary.component';

describe('ChosenColorSummaryComponent', () => {
  let component: ChosenColorSummaryComponent;
  let fixture: ComponentFixture<ChosenColorSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenColorSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenColorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
