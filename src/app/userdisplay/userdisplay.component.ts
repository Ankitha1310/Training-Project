import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';


@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  constructor(private itemSrv : ItemService) { }
  itemList : Item[] = [];

  ngOnInit() {
    this.itemSrv.getAllItems().subscribe(
      data => {this.itemList = data}
     );
  }
}
