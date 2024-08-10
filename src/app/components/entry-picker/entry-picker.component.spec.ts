import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPickerComponent } from './entry-picker.component';

describe('EntryPickerComponent', () => {
  let component: EntryPickerComponent;
  let fixture: ComponentFixture<EntryPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
