import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 5000),
  new SalesPerson("John","Doe", "jhon.doe@luv2code.com", 5000),
  new SalesPerson("Claire", "Murphy", "claire.murphy@luv2code.com", 9000), 
  new SalesPerson("Mai", "Truong", "mai@mai", 8000)

];

  constructor() { }

  ngOnInit(): void {
  }

}
