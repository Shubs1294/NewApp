import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers:[BooksService],
})
export class BooksModule { }
