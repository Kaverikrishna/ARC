import { Component, OnDestroy, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{

  
  constructor(private activatedRoute : ActivatedRoute){
       
  }


  ngOnDestroy(): void {
  }
  ngOnInit(): void {

  }

}
