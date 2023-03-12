import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipe/filter.pipe';
import { ShopListComponent } from './shop-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  {path: "", component: ShopListComponent}
]
@NgModule({
  declarations: [
    ShopListComponent,
    FilterPipe,
    ShoppingCartComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopListModule { }
