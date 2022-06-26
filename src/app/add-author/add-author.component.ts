import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private detailsService:DetailsService, public router:Router) { }

  title: String = "Add Author";

  newAuthor = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  ngOnInit(): void {
  }

  addAuthor(){
    console.log(this.newAuthor.value);
    this.detailsService.addAuthor(this.newAuthor.value);
    console.log("Added Successfully");
    alert("Author has been successfully added to the Library");
    this.router.navigate(['/authors']);
  }
}
