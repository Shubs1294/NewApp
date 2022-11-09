import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() {}
    getBooks(){
return [
  {
  name: 'Indian Culture',
  author: 'Shubham Jadhav',
  image:'https://m.media-amazon.com/images/I/51URPCHNSBL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
  price:1050,
},
{
name:'Meditation Learning',
author:'Prajakta Jadhav',
image:'https://m.media-amazon.com/images/I/51BrFCwhmhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
price:900, 
},
{
name:'Money',
author:'Supriya Patil',
image:'https://m.media-amazon.com/images/I/31L+WqJ5fVL._SX306_BO1,204,203,200_.jpg',
price:2000,  
},
{
name:'React Developer',
author:'Mr Shailesh Patil',
image:'https://m.media-amazon.com/images/I/41NDQ5wjWUL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
price:9000,  
},
{
name:'How To Spend Money',
author:'Pooja Jadhav',
image:'https://m.media-amazon.com/images/I/41ZeClLZ9lL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
price:5,   
}
]

    }
 
  }

