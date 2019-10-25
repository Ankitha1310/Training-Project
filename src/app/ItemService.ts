import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  saveItem(item: Item)
  {
    return this.http.post<any>('http://localhost:1002/item', item);
  }

  getAllItems()
  {
    return this.http.get<Item[]>('http://localhost:1002/item/');
  }

  getItem(itemId: string)
  {
    return this.http.get<Item>(`http://localhost:1002/item/${itemId}`);
  }

  getItemByStatus(status: boolean)
  {
    return this.http.get<Item[]>(`http://localhost:1002/item1/${status}`);
  }

  getItemByName(itemName: string)
  {
    return this.http.get<Item[]>(`http://localhost:1002/item2/${itemName}`);
  }

  approveItem(itemId: string)
  {
    return this.http.put<Item[]>(`http://localhost:1002/item/${itemId}`, null);
  }

  disapproveItem(itemId: string)
  {
    return this.http.put<Item[]>(`http://localhost:1002/item1/${itemId}`, null);
  }

  deleteItem(itemId:string)
  {
    return this.http.delete(`http://localhost:1002/item/${itemId}`);
  }
}

