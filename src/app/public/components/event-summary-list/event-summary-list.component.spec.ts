import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryListComponent } from './event-summary-list.component';

describe('EventSummaryListComponent', () => {
  let component: EventSummaryListComponent;
  let fixture: ComponentFixture<EventSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSummaryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
