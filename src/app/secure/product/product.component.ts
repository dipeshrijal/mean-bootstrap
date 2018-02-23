import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products;

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  navigate() {
    this.router.navigateByUrl('/admin/products/create').catch();
  }

}
