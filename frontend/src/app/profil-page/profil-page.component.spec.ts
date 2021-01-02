import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPageComponent } from './profil-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ProfilPageComponent', () => {
  let component: ProfilPageComponent;
  let fixture: ComponentFixture<ProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,  FormsModule, ReactiveFormsModule],
      declarations: [ ProfilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
