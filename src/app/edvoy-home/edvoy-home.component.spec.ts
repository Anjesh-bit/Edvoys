import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdvoyHomeComponent } from './edvoy-home.component';

describe('EdvoyHomeComponent', () => {
  let component: EdvoyHomeComponent;
  let fixture: ComponentFixture<EdvoyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdvoyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdvoyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
