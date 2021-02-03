import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTempComponent } from './home-temp.component';

describe('HomeTempComponent', () => {
  let component: HomeTempComponent;
  let fixture: ComponentFixture<HomeTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
