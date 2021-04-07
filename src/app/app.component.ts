import { Component } from '@angular/core';
import Product from './models/product';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  api = 'http://localhost:8080'

  public listShoes: Product[] = []

  constructor(private http: HttpClient) {}

  async initProduct() {
    try {
      const res = await this.http.get(`${this.api}/products`).toPromise()
      console.log(res)
    } catch (e) {
      console.error("Error", e)
    }
  }
}
