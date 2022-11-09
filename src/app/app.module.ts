import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent, CartComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BooksModule
  ],
  bootstrap:[AppComponent],
 
})
export class AppModule { }
