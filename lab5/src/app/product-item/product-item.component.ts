import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

  share(link: string): void {
    const slink = `https://t.me/share/url?url=${link}`;
    window.open(slink, '_blank');
  }

  like(product: any): void {
    product.liked = !product.liked;
    if (product.liked) {
      product.likes++;
    } else {
      product.likes--;
    }
  }

}
