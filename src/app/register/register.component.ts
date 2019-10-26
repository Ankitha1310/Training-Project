import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { UserService } from '../UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usrSrv:UserService) {}

  user:User={
    "userId":"",
    "password":"",
    "dob":null,
    "firstName":"",
    "lastName":"",
    "phone":0,
    "address":"",
    "wallet":0,
    "key":""
  };

  saveUser()
  {
    this.usrSrv.saveUser(this.user).subscribe(
      data=> console.log(data),
      error=>console.log(error)
    );
  }

  getUser()
  {
    this.usrSrv.getUser(this.user.userId).subscribe(
      data=> this.user=data,
      error=>console.log(error)
    );
  }

  users:User[];
  getAllUsers()
  {
      this.usrSrv.getAllUsers().subscribe(
      data=> this.users=data,
      error=>console.log(error)
    );
  }

  // updateUser()
  // {
  //   this.usrSrv.updatePlayer(this.player).subscribe(
  //     data=> console.log(data),
  //     error=>console.log(error)
  //   );
  // }

  // deletePlayer()
  // {
  //   this.plrSrv.deletePlayer(this.player.playerId).subscribe(
  //     data=> console.log(data),
  //     error=>console.log(error)
  //   );
  // }

  ngOnInit() {
  }

}
