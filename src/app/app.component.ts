import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	someProperty:string = '';
  constructor (private dataService: DataService){

  }
  ngOnInit(){
		console.log(this.dataService.cars);
		this.someProperty = this.dataService.myData();
  }

}
