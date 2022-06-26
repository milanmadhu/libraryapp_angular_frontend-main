import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  user = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  errorMsg: String='';
  submitted = false;

  get formControl(){
    return this.user.controls;
  }

  userLogin(){
    console.log(this.user.value);
    this.auth.userLogin(this.user.value)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        console.log('Success');
        this.router.navigate(['/home']);
      },
      err =>{
        console.log(err);
        this.errorMsg = err;
      }
    )
  }

}
