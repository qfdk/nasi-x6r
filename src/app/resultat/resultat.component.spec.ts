import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatComponent } from './resultat.component';

describe('ResultatComponent', () => {
  let component: ResultatComponent;
  let fixture: ComponentFixture<ResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
