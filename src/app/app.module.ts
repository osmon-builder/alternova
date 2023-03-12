import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterPipe } from './shop/pipe/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopListComponent } from './shop/pages/shop-list/shop-list.component';
import { ShoppingCartComponent } from './shop/pages/shop-list/components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
