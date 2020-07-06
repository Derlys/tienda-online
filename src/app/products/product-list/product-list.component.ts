import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(data => {
        console.log('data' , data);
        this.products = data;
      });
  }

}
