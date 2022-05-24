import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotapageComponent } from './notapage.component';

describe('NotapageComponent', () => {
  let component: NotapageComponent;
  let fixture: ComponentFixture<NotapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
