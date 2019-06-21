import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Set } from '../../models/Set';

import { InputComponent } from './input.component';
import { Data } from 'src/app/models/Data';

describe('InputComponent', () => {
  let input:string="2\n2 2\n2\n2 0\n0 5\n3 3\n3 5\n1 1 1\n3 0 0\n1 10 0";
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should parse string into Set', () =>{
    var set:Set={
      amount:2,
      data: [new Data(2,2,[2],[[2,0],[0,5]]), new Data(3,3,[3,5],[[1,1,1],[3,0,0],[1,10,0]])]
    };
    expect(component.parseInput(input)).toEqual(set);
  })
});
