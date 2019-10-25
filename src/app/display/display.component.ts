import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private itemSrv : ItemService) { }

approved:boolean=false;
  //  item:Item={
  //    "itemId":"",
  //    "itemName":"",
  //    "desc":"",
  //    "cost":0,
  //    "status":false,
  //    "userId":""
  //  }

  itemList : Item[]=[];





approve(itemId){
  this.itemSrv.approveItem(itemId).subscribe(data =>
     {
      this.itemList= data, error => console.log(error)
  });

}

disapprove(itemId){
  this.itemSrv.disapproveItem(itemId).subscribe(data => this.itemList=data ,error => console.log(error));
}



ngOnInit() {
  this.itemSrv.getAllItems().subscribe(
    data => {this.itemList = data}


   );


}

}
