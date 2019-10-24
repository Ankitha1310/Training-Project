import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(private itemSrv : ItemService) { }

  item:Item={
    "itemId":"",
    "itemName":"",
    "desc":"",
    "cost":0,
    "status":false,
    "userId":""
  }

  saveItem() {
    this.itemSrv.saveItem(this.item).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }



  ngOnInit() {
  }

}
