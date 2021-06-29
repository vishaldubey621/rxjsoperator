import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor( private _http:HttpClient) {} 

   getuser()
   {
    return this._http.get('http://localhost:3000/user')
   }
}
