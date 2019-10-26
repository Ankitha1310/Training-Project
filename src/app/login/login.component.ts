import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { User } from '../User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string="";
  key:string="";




  constructor(private userSrv:UserService) { }


  forgot()
  {
    console.log(this.name);
    console.log(this.key);
    this.userSrv.forgotPassword(this.name,this.key).subscribe(
      data => console.log(data),
      error =>console.log(error)
      );
  }
  ngOnInit() {
  }

}
