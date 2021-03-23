import { Component } from '@angular/core';
import Product from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  public listShoes: Product[] = [];

  constructor() {
    this.listShoes.push(
      new Product('Nike', 'Air Jordan 9'),
      new Product('Nike', 'Air Force'),
      new Product("Adidas", "Yeezy")
    )
    setTimeout(() => {
      this.listShoes.push(new Product('Converse', '2'));
    }, 400);

    setInterval(() => {
      this.listShoes.push(new Product('Converse', '2'));
    }, 6000)
  }
}
