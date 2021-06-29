import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  search = new FormControl();
  counter = 0; 

  ngOnInit(){
    //if input control valuechange then start count 
      this.search.valueChanges.pipe(
      debounceTime(1000),    //wait for 1 second
      switchMap(()=> interval(500)) 
       ).subscribe((value)=>  
      (this.counter=value));
    }
  }


