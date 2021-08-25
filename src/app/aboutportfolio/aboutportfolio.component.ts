import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service'
import { Property }from '../model/property'

@Component({
  selector: 'app-aboutportfolio',
  templateUrl: './aboutportfolio.component.html',
  styleUrls: ['./aboutportfolio.component.css']
})
export class AboutportfolioComponent implements OnInit {
  properties: any;

  constructor(private rentservice:RentService) { }


 findProperty(){
  console.log("This is before this.rentService")
  this.rentservice.getProperties().subscribe(property =>{
    console.log(property); 
    this.properties = property;
  });

}

  ngOnInit(): void {

   this.findProperty()
   console.log("This is working fine")
  }

}
