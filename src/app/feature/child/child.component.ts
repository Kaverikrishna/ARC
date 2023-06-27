import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input() childreceiver : any;

  @Output() childsender : EventEmitter<any> = new EventEmitter;
 

  constructor(){}

  
  senddatatoparent(value : any){
     this.childsender.emit(value);
     console.log(this.childsender);
  }


}
