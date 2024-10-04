import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryItemComponent } from './event-summary-item.component';

describe('EventSummaryItemComponent', () => {
  let component: EventSummaryItemComponent;
  let fixture: ComponentFixture<EventSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSummaryItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
