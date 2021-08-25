import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service'
import { Property }from '../model/property'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

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
