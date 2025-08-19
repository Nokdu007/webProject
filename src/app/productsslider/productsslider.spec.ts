import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsslider } from './productsslider';

describe('Productsslider', () => {
  let component: Productsslider;
  let fixture: ComponentFixture<Productsslider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsslider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsslider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
