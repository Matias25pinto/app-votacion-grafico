import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosBarraHorizontalComponent } from './graficos-barra-horizontal.component';

describe('GraficosBarraHorizontalComponent', () => {
  let component: GraficosBarraHorizontalComponent;
  let fixture: ComponentFixture<GraficosBarraHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosBarraHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosBarraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
