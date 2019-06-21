import { TestBed } from '@angular/core/testing';

import { SetService } from './set.service';
import { Set } from '../models/Set';
import { Data } from '../models/Data';


describe('SetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetService = TestBed.get(SetService);
    expect(service).toBeTruthy();
  });

  it('should recieve sets from InputComponent', ()=>{
    const service: SetService = TestBed.get(SetService);
    var input:Set={
      amount:2,
      data: [new Data(2,2,[2],[[2,0],[0,5]]), new Data(3,3,[3,5],[[1,1,1],[3,0,0],[1,10,0]])]
    };
    expect(service.recieveInput(input)).toEqual(input);
  })

  it('should be accesible by OutputComponent', ()=>{
    const service: SetService = TestBed.get(SetService);
    expect(service.sendSet).toBeDefined();
  })

});
