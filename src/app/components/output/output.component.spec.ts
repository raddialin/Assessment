import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';
import { InputComponent } from '../input/input.component';

import { Set } from '../../models/Set';
import { Data } from '../../models/Data';
import { FormsModule } from '@angular/forms';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  var set:Set={
    amount:2,
    data: [new Data(2,2,[2],[[2,0],[0,5]]), new Data(3,3,[3,5],[[1,1,1],[3,0,0],[1,10,0]])]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ OutputComponent, InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output a properly formatted string',()=>{
    var output="Data Set 1:\n1\n\nData Set 2:\n44\n";
    expect(component.calculateOutput(set)).toEqual(output);
  })
});
