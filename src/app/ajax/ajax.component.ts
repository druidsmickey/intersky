import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  ajax: any = [];
  
  constructor(private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.get("assets/ajax.json").subscribe(data=>{
      console.log(data);
      this.ajax = data;
    })
  }
  


}
