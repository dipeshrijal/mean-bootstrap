import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('api/products');
  }

  create(product) {
    return this.http.post('api/products', product);
  }

}
