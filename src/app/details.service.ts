import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get('http://localhost:3000/books');
  }

  getBook(id){
    return this.http.get('http://localhost:3000/books/'+id);
  }

  addBook(book){
    console.log(book);
    return this.http.post('http://localhost:3000/add_book',{'book':book})
    .subscribe(data=>{console.log(data)});
  }

  updateBook(book){
    console.log(book);
    return this.http.put('http://localhost:3000/update_book',book)
    .subscribe(data=>{console.log(data)});
  }

  deleteBook(book){
    return this.http.delete('http://localhost:3000/delete_book/'+book);
  }

  getAuthors(){
    return this.http.get('http://localhost:3000/authors');
  }
  
  getAuthor(id){
    return this.http.get('http://localhost:3000/authors/'+id);
  }

  addAuthor(author){
    return this.http.post('http://localhost:3000/add_author',{'author':author})
    .subscribe(data=>{console.log(data)});
  }

  updateAuthor(author){
    console.log(author);
    return this.http.put('http://localhost:3000/update_author',author)
    .subscribe(data=>{console.log(data)});
  }

  deleteAuthor(author){
    return this.http.delete('http://localhost:3000/delete_author/'+author);
  }

}
