import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0 ;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";
  onChangeUseLetters(){
    this.includeLetters = ! this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = ! this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = ! this.includeSymbols;
  }
  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    console.log(parsedValue)
    if(!isNaN(parsedValue))
      this.length = parsedValue; 
  }
  onButtonClick(){
    const Numbers ="1234567890" 
    const Letters = "asdfghjklzxcvbnmqwertyuiop"
    const Symbols = "!@#$%^&*()"

    let validchar = ''
    if(this.includeLetters){
      validchar += Letters;
    }
    if(this.includeNumbers){
      validchar += Numbers;
    }
    if(this.includeSymbols){
      validchar += Symbols;
    }
    let generatedPassword = '';
    for(let i = 0; i < this.length ; i++){
      const index = Math.floor(Math.random()*validchar.length)
      generatedPassword += validchar[index]
    }
    this.password = generatedPassword
  }
}
