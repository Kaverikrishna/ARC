import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentmessage : any;
  public childmessage  : any;

  senddatatoparent(value:any){
   this.parentmessage = value;
   console.log(value)
  }

  getdatafromchild(value:any){
    this.childmessage = value;
       console.log(value);
  }


}
