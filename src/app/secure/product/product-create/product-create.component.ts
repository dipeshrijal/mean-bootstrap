import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.product = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addProduct() {
    this.productService.create(this.product.value).subscribe(
      (data) => this.router.navigateByUrl('admin/products')
    );
  }

  isValid(control: string): string {
    return this.product.controls[control].invalid && this.product.controls[control].touched ? 'is-invalid' : '';
  }

}
