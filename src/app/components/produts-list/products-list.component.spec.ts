import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productsServiceSpy: jasmine.SpyObj<ProductsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ProductsService', ['getAllProducts', 'addNewCard']);

    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      providers: [{ provide: ProductsService, useValue: spy }],
    });

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    productsServiceSpy = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call trackByFn', () => {
    const card = { id: 1, name: 'Product 1' };
    const result = component.trackByFn(card);

    expect(result).toBe(1);
  });
});
