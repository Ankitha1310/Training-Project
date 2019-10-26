import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';
import {HttpClient,HttpEventType,HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent {
  percentDone: number;
  uploadSuccess: boolean;
  data: Object;
  f1:string;
  features:string[];
  userId: string;

  constructor(
    private http: HttpClient,

    ) { }

    uploadAndProgress(files: File[]){

      var formData = new FormData();
      Array.from(files).forEach(f => formData.append('file', f))
      this.http.post('http://localhost:1002/api/files', formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {

          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round(100 * event.loaded / event.total);

          } else if (event instanceof HttpResponse) {
            this.uploadSuccess = true;

          }

      });
    }
  upload(files: File[]){
        this.f1=files[0].name;
        console.log(this.f1);
        this.uploadAndProgress(files);
    }

    }


