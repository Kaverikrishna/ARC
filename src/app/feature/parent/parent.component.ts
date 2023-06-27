import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    public name : string = '' ;
  // Two-way binding
     public twoway : any;
     public twowaybind : any;
  // Event binding
  eventbind(val:any){
      if(val == ''){
        console.log("Empty Value");
      }else{
        alert("Event binding Successfull => " + val);
      }
  }

  //Property binding
  public proname = false ;

  // Interpolation
  public interpol : string = "Interpolation!";

  //parent child
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
