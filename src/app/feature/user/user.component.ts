import { Component, OnDestroy, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, OnChanges{

  
  constructor(private activatedRoute : ActivatedRoute){
    
  }

  ngOnChanges(){
     alert("Changes done");
  }

  ngOnDestroy(): void {
    alert("User dead")
  }
  ngOnInit(): void {
    alert("User Created")
  }

}
