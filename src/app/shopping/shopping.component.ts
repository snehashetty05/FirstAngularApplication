import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


    // products = ['TV', 'Laptop', 'Mobile'];
  products = [
    {name: 'TV', price: 100 },
    {name: 'Laptop', price: 250},
    {name: 'Mobile', price: 1000 }
  ];

    newProduct = '';
    newPrice = 0;

    isEditing = false;
    currentIndex = '';
  constructor(private _location : Location) { }

  ngOnInit() {
  }

  addNewProduct() {
    this.products.push({name: this.newProduct,price: this.newPrice});

    this.newProduct = '';
    this.newPrice = 0;
  }

  removeProduct(index) {
      console.log('index', index);
      this.products.splice(index, 1)
  }

  editProduct(index) {
      this.newProduct = this.products[index].name;
      this.newPrice = this.products[index].price;
      this.isEditing = true;
      this.currentIndex = index;

  }

  edit() {
      this.products[this.currentIndex].name = this.newProduct;
      this.products[this.currentIndex].price = this.newPrice;
      this.newProduct = '';
      this.newPrice = 0;
      this.isEditing = false ;
  }
  cancelEdit() {
    this.newProduct = '';
    this.newPrice = 0;
    this.isEditing = false;
  }

  cancel(){
    this._location.back();
  }

}
