import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
@Input() book:Book = {} as Book;


  constructor(private cartService: CartService) {
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 ngOnInit(): void {
   
 }

addToCart() {
  this.cartService.add(this.book);
}
}
