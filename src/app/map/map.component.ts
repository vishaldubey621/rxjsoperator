import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { pipe, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  data:any= [];
    //inject map service
    constructor(private mapservice:MapService) { }

  ngOnInit(): void {
   
        this.mapservice.getuser().subscribe((res) =>{
          //store name and email in data
        this.data  =  res.map((userdata:any) => this.data =( userdata.name +'----------email---------'+ userdata.email))
        console.log(this.data);
         //console.log(res);
       
        })
         setTimeout(() => {
           this.data.unsubscribe(); //unsubscribe 
      }, 3000);
    
  
    }


  }