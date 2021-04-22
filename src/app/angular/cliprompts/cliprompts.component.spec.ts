import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipromptsComponent } from './cliprompts.component';

describe('ClipromptsComponent', () => {
  let component: ClipromptsComponent;
  let fixture: ComponentFixture<ClipromptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipromptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
