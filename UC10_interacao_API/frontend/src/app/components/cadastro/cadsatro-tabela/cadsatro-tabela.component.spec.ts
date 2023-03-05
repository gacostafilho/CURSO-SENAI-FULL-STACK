import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsatroTabelaComponent } from './cadsatro-tabela.component';

describe('CadsatroTabelaComponent', () => {
  let component: CadsatroTabelaComponent;
  let fixture: ComponentFixture<CadsatroTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadsatroTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadsatroTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
