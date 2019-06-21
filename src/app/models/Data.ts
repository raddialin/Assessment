export class Data {
    denom:number;
    num_prices:number;
    conversions:number[];
    prices:number[][];

    constructor(denom:number,num_prices:number,conversions:number[],prices:number[][]){
        this.denom=denom;
        this.num_prices=num_prices;
        this.conversions=conversions;
        this.prices=prices;
    }
}