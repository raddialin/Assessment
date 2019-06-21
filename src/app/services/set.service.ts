import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Set } from "../models/Set";

@Injectable({
  providedIn: 'root'
})
export class SetService {

  sendSet: Observable<Set>;
  private recieveInputSubject = new Subject<Set>();

  constructor() { 
    this.sendSet=this.recieveInputSubject.asObservable();
  }
  
  

  recieveInput(input){
    this.recieveInputSubject.next(input);
    return input;
  }
}
