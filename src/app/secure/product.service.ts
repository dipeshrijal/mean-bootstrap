import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('https://limitless-inlet-11629.herokuapp.com/api/products');
  }

  create(product) {
    return this.http.post('https://limitless-inlet-11629.herokuapp.com/api/products', product);
  }

}
