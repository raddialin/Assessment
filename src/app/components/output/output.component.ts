import { Component, OnInit } from '@angular/core';
import { Set } from '../../models/Set';
import { Data } from '../../models/Data';
import { SetService } from 'src/app/services/set.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  output:string;
  set:Set;

  constructor(private IS:SetService) { 
    this.IS.sendSet.subscribe((set) =>{
      this.set=set;
      this.output=this.calculateOutput(this.set);
    })
  }

  ngOnInit() {
  }
  calculateOutput(set:Set){
    var num_sets=set.amount;
    var set_num=0;
    var output='';
    while(set_num<num_sets){
      var denom=set.data[set_num].denom;
      var num_prices=set.data[set_num].num_prices;
      var conversions=set.data[set_num].conversions;
      const prices=set.data[set_num].prices;
      var final_prices:number[]=new Array(num_prices);
      var price_ctr=0;
      while(price_ctr<num_prices){
        var index=0;
        while(index<denom){
          prices[price_ctr][index+1]=prices[price_ctr][index+1]+(prices[price_ctr][index]*conversions[index]);
          if(index===denom-1){
            final_prices[price_ctr]=prices[price_ctr][index];
            break;
          }
          index++;
        }
        price_ctr++;
      }
      var difference:number =Math.max(...final_prices)-Math.min(...final_prices);
      if(set_num==num_sets-1){
        output=output+"Data Set "+(set_num+1)+":\n"+difference+"\n";
      }
      else{
        output=output+"Data Set "+(set_num+1)+":\n"+difference+"\n\n";
      }
      set_num++;
    }
    return output;
  }
}
