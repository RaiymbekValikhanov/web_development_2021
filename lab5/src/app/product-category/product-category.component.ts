import { Component, OnInit } from '@angular/core';
import {categories} from '../products';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = categories;
  constructor() { }

  ngOnInit(): void {
  }
}

