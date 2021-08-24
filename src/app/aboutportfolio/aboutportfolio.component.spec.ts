import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutportfolioComponent } from './aboutportfolio.component';

describe('AboutportfolioComponent', () => {
  let component: AboutportfolioComponent;
  let fixture: ComponentFixture<AboutportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
