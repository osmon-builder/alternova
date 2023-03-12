
import { Component, OnInit } from '@angular/core';

import filter from 'rxjs/operators'
import Swal from 'sweetalert2';
import products from '../../DB/datos.json'
import { Products } from '../../interface/Produscts.model';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],

})
export class ShopListComponent implements OnInit {

  filter = '';
  cart: any = [] = [];
  totalPrice: any = 0

  filterCAtegory: any

  public products = products
  public data: any


  constructor(

   
  ) { }



  ngOnInit(): void {

   

    this.data = this.products.products


    this.cart = JSON.parse(localStorage.getItem('cart')!);
    if (!this.cart) {
      this.cart = []
    }

    console.log(this.cart)


  }

  // filterItemsByCategory(category: { id: string; }) {
  //   this.filterCAtegory = this.data.filter((item: { categories: string | any[]; }) => {
  //     return item.categories.includes(category.id);
  //   })
  // }


  // reset() {
  //   this.filterCAtegory = [...this.data];
  // }



  addToCart(product: any) {
    
  if(product.stock == 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Item out of stock!',
      footer: '<a href="">Whould you like to buy another item?</a>'
    })
  }else{
    const productExist = this.cart.find((x: { id: any; }) => x.id === product.id)
    console.log(productExist, 'producto existente')
    if (!productExist) {
      this.cart.push({ ...product, num: 1 , partialPrice: product.unit_price});
      localStorage.setItem('cart', JSON.stringify(this.cart))
      return
    }
    productExist.num += 1;
    productExist.partialPrice += product.unit_price

    localStorage.setItem('cart', JSON.stringify(this.cart))
    console.log(productExist)
  }
    


  }






}

