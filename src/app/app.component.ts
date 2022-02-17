import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'texteditor';
  selectedValue: string='';
  selectedCar: string='';
  toggle = true;
  status='UnBold';
  bold_class='text_type_bold';
  toggle_italics=true;
  toggle_status='Italics';
  toggle_underline=true;
  underline_status='Underlined';
  isbold=true;
  isitalics=false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: '12'},
    {value: 'pizza-1', viewValue: '14'},
    {value: 'tacos-2', viewValue: '16'},
    {value: 'tacos-2', viewValue: '20'},
    {value: 'tacos-2', viewValue: '24'},
    {value: 'tacos-2', viewValue: '32'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: '12'},
    {value: 'saab', viewValue: '24'},
    {value: 'mercedes', viewValue: '16'},
    {value: 'mercedes', viewValue: '20'},
    {value: 'mercedes', viewValue: '24'},
    {value: 'mercedes', viewValue: '32'},
  ];

bold() {
    this.toggle = !(this.toggle);
    this.status = this.toggle ? 'UnBold' : 'Bold';
    this.isbold=false;
    
}
italics(){
  this.toggle_italics = !this.toggle_italics;
  this.toggle_status = this.toggle_italics?'Italics':'Normal';
  this.isitalics=false;
}
underlined(){
  this.toggle_underline = !this.toggle_underline;
  this.underline_status = this.toggle_underline?'Underlined':'Remove Underline';
}
}
