import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPage } from './ejemplo.page';

describe('EjemploPage', () => {
  let component: EjemploPage;
  let fixture: ComponentFixture<EjemploPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

