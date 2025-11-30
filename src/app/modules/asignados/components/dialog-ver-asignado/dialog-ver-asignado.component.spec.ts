import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerAsignadoComponent } from './dialog-ver-asignado.component';

describe('DialogVerAsignadoComponent', () => {
  let component: DialogVerAsignadoComponent;
  let fixture: ComponentFixture<DialogVerAsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogVerAsignadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVerAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
