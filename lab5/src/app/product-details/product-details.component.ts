import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {categories} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = categories.find(product => product.id === productIdFromRoute);
  }

}
