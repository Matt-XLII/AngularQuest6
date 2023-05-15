import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

number1:any = ""
number2:any = ""
operator:string=""
result:any = ""

addRandomNumber1(){
  this.number1 = Math.floor(Math.random() * 9);
  this.result = ""
}

addRandomNumber2(){
  this.number2 = Math.floor(Math.random() * 9);
  this.result = ""
}


sum(){
  this.operator = "+"
}
sub(){
  this.operator = "-"
}
mult(){
  this.operator = "*"
}
div(){
  this.operator = "/"
}
calc(){
  switch(this.operator){
    case "+" :
  this.result = this.number1 + this.number2
  this.number1 = ""
  this.number2 = ""
  this.operator = ""
  break;
  case "*" :
  this.result = this.number1 * this.number2
  this.number1 = ""
  this.number2 = ""
  this.operator = ""
  break;
  case "/" :
  this.result = this.number1 / this.number2
  this.number1 = ""
  this.number2 = ""
  this.operator = ""
  break;
  case "-" :
  this.result = this.number1 - this.number2
  this.number1 = ""
  this.number2 = ""
  this.operator = ""
  break;
}
}

}