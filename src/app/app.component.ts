import { Component } from '@angular/core';
import { ServicexService } from './servicex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operation';
  data: any;
  constructor(private ser:ServicexService){}
  getdata(){
this.ser.getdata().subscribe((res)=>{
  console.log(res)
  this.data=res;
  console.log(this.data);
})
  }
}