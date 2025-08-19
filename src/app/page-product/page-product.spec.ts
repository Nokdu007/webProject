import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduct } from './page-product';

describe('PageProduct', () => {
  let component: PageProduct;
  let fixture: ComponentFixture<PageProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
