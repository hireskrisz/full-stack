import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketDialogComponent } from './new-ticket-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";

describe('NewTicketDialogComponent', () => {
  let component: NewTicketDialogComponent;
  let fixture: ComponentFixture<NewTicketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule, MatDialogModule],
      declarations: [ NewTicketDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
