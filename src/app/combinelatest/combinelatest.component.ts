import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs'


@Component({
	selector: 'app-combinelatest',
	templateUrl: './combinelatest.component.html',
	styleUrls: ['./combinelatest.component.scss']
})
export class CombineLatestComponent implements OnInit {

	//Array for store value
	public bowler = ['bumrah','ashvin','chahal','umesh','ishant','bhuvneshwar']
	public wicket = ['one','two','three','four']

	public bowlerSubject = new BehaviorSubject('chahal');
	public wicketSubject = new BehaviorSubject('one');

	//Empty Array for store bowler and wicket 
  	public selectedData:any[] =[];
	constructor() { }

	ngOnInit(): void {
	//CombineLatest  for combine  bowler and wicket and return observale that are subscribe 
  	combineLatest(this.bowlerSubject,this.wicketSubject).subscribe(([res1,res2])=>{
    
		//push data in empty array
		this.selectedData.push({bowler:res1,wicket:res2})
      
    })
	}
	//function for changebowler
	onChangebowler(event:any){
		
		this.bowlerSubject.next(event.target.value);
	}
	//function for changewicket
	onChangewicket(event:any){
	
		this.wicketSubject.next(event.target.value);

	}

}