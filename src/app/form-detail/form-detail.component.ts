import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { ICheckObject,ISelectObject } from '../IObject'
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  @Input() selectRadio:string="male"
  @Input() selectOptionValue:string="Friday";
  // @Input() selectOptionObject:ISelectObject;
  @Input() interests1:ICheckObject[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange")
    console.log(changes);
    // console.log(this.interests1);
    // console.log(changes);
    // console.log(this.selectRadio);
    // console.log(this.selectOptionValue)
    // console.log(this.selectOptionObject)
  }

  ngDoCheck(): void {
    // console.log(this.interests1)
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("do check")
  }

}
