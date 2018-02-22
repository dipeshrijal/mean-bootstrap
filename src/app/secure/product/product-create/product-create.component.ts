import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.product = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addProduct() {
    console.log(this.product.value);
  }

  isValid(control: string): string {
    return this.product.controls[control].invalid && this.product.controls[control].touched ? 'is-invalid' : '';
  }

}
