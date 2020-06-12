import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-calculator-grid',
  templateUrl: './calculator-grid.component.html',
  styleUrls: ['./calculator-grid.component.css']
})
export class CalculatorGridComponent implements OnInit {

  constructor(private _location : Location) { }

  ngOnInit() {
  }
cancel(){
  this._location.back();
}

}
