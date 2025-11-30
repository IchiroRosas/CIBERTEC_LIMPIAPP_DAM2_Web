import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFinalizadoComponent } from './ver-finalizado.component';

describe('VerFinalizadoComponent', () => {
  let component: VerFinalizadoComponent;
  let fixture: ComponentFixture<VerFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerFinalizadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
