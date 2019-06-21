import { Component, OnInit } from '@angular/core';
import { SetService } from '../../services/set.service';
import { Set } from '../../models/Set';
import { Data } from '../../models/Data';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  set: Set;
  input: string;

  constructor(private IS:SetService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.set=this.parseInput(this.input);
    this.IS.recieveInput(this.set);
  }

  parseInput(input:string){
    //console.log(input.split("\n"));
    var line_number=1;
    var current_line:string;
    var denom:number;
    var num_prices:number;
    var conversions:number[];
    var data_array:Data[]=new Array(Number(input.split("\n")[0]));
    var data_counter=0;
    var set:Set;

    while(line_number<input.split("\n").length){
      current_line=input.split("\n")[line_number];
      denom=current_line.split(" ").map(Number)[0];
      num_prices=current_line.split(" ").map(Number)[1];
      conversions=input.split("\n")[line_number+1].split(" ").map(Number);
      var prices:number[][]=new Array(num_prices);
      var ctr=0;
      while(ctr<num_prices){
        current_line=input.split("\n")[line_number+2+ctr];
        prices[ctr]=current_line.split(" ").map(Number);;
        ctr++;
      }
      line_number=line_number+2+num_prices;
      data_array[data_counter]=new Data(denom,num_prices,conversions,prices);
      data_counter++;
    }
    set=
    {
      amount:Number(input.split("\n")[0]),
      data:data_array
    }
    return set;
  }
}
