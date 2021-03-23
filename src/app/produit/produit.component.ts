import { Component, OnInit, Input } from '@angular/core';
import Product from '../models/product'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product!: Product

  constructor() {}

  ngOnInit(): void {
  }

}
