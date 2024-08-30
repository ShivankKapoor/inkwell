import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPickerComponent } from './reader-picker.component';

describe('ReaderPickerComponent', () => {
  let component: ReaderPickerComponent;
  let fixture: ComponentFixture<ReaderPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
