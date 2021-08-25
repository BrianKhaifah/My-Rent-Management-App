import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  property: any [];

  constructor(private rentservice:RentService) { }


 findProperty(){
  console.log("This is before this.rentService")
  this.rentservice.getProperties().subscribe(profile =>{
    console.log(profile);      
  });

}

  ngOnInit(): void {

   this.findProperty()
   console.log("This is working fine")
  }

}
