import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public clr = 'red';

  public obj = {
    name : "krishna",
    age : 26,
    mail : "Krishna@gmail.com"
  }
  isOk = false;

  public interpol = "One Way Data-binding";

 public fistname = '';
  public ngone : any;
  test(){
    console.log("Button Clicked");
    if(this.isOk == !true){
      this.isOk = true;
    }else{
      this.isOk = false;
    }
  }

  showalert(){
    alert("woking dude" + this.fistname);
  }

  conlog(){
    console.log("From the focus")
  }



}
