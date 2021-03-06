import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemsComponent } from './shop-items.component';

describe('ShopItemsComponent', () => {
  let component: ShopItemsComponent;
  let fixture: ComponentFixture<ShopItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
