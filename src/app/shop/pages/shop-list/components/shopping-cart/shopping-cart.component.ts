
import { Input } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shop/interface/Produscts.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],

  
})
export class ShoppingCartComponent implements OnInit  {

  @Input() cart : any
  @Input() totalPrice : number = 0;

  finalPrice: number = 0;
  
  constructor(

  ) { }
   

  ngOnInit(): void {
    console.log(this.cart)
    console.log(this.totalPrice)


  }

  getTotal() {
    this.cart.forEach((x: { num: number; unit_price: number; }) => {
      this.totalPrice += x.num * x.unit_price
     })
    return this.cart.reduce((acc: any, prod: { num: number; unit_price: number; }) => acc+= prod.unit_price *prod.num ,0)
  }

  getPricePerProduct(){
    
  }


  deleteProduct(removeItem: [] = []) {
    const index = this.cart.indexOf(removeItem);
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
 

  }

  createOrder(){
         
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Order created',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

  
   
}




