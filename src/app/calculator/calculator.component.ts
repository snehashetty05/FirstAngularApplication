import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1 = 0 ;
  n2 = 0 ;
  ans = 0 ;

  constructor(private _loction : Location) { }

  ngOnInit() {
  }





  AddNo() {
    this.ans = this.n1 + this.n2;
    alert('Addition is ' + this.ans);

  }

  SubNo() {
    this.ans = this.n1 - this.n2;
    alert('Subtraction is ' + this.ans);
  }

  MultNo() {
    this.ans = this.n1 * this.n2;
    alert('Multiplication is ' + this.ans);
  }

  DivNo() {
    this.ans = this.n1 / this.n2;
    alert('Division is ' + this.ans);
  }
  cancel(){
    this._loction.back();
  }

  
}
