import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {categories} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: any;
  products: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryName = routeParams.get('categoryName');
    console.log(categoryName);
    this.category = categories.find(category => category.name === categoryName);
    this.products = this.category.products;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
