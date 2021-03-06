import { Component, OnInit } from '@angular/core';
import { ISelectObject, ICheckObject} from '../IObject'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  constructor() { }


  ngOnInit() {
  }

  // for gender radio button
  isRadioSelect:boolean = true;
  selectRadio:string ="male"


  // for select option
  selectedIndex:number=6;
  selectedIndexObject = 6;
  selectArray:string[]=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];


  selectArray1:ISelectObject[] = this.selectArray.map((item,index)=>{
    if(index+1 === this.selectedIndex){
      return { id:index , day:item , isSelect:true };

    }
    return { id:index , day:item , isSelect:false };
  });
  

  selectedIndex1:number=6;
  selectOptionObject ={
    id:this.selectedIndex,
    day:this.selectArray[this.selectedIndex1-1]
  };




    // checkbx 
    interests:string[]=[
      '3D printing',
      'Amateur radio',
      'Scrapbook',
      'Acting',
      'Baton twirling'
    ];
  
    selectInterest = ['3D printing'];
    preChecked:boolean = false;


    
    // interests1:ICheckObject[]=[
    //   {id:1,name:'3D printing',isChecked:true},
    //   {id:2,name:'Amateur radio',isChecked:false},
    //   {id:3,name:'Scrapbook',isChecked:false},
    //   {id:4,name:'Acting',isChecked:false},
    //   {id:5,name:'Baton twirling',isChecked:false}
    // ];
    
    interests1:ICheckObject[] = this.interests.map((item,index)=>{
      if(index === 0){
        return { id: index, name:item, isChecked:true }

      }
      return { id: index, name:item, isChecked:false }

    })
  

  radioClick(event){
    // console.log(event);
    this.selectRadio =event.target.value;
    // console.log(event.target.value);
  }


  selectOptionValue:string= this.selectArray[this.selectedIndex-1];
  
  
  onSelct(event){
    console.log(event);
    console.log(event.srcElement.options.selectedIndex)
    this.selectedIndex = event.srcElement.options.selectedIndex
    this.selectOptionValue= this.selectArray[this.selectedIndex-1];
    
  }

  onSelctObject(event){
    // selectArray1
    // console.log(event);
    this.selectedIndex1=event.srcElement.options.selectedIndex;
    this.selectOptionObject={
      id:this.selectedIndex1,
      day:this.selectArray[this.selectedIndex1-1]
    }
    console.log(this.selectOptionObject);
    // console.log(event.target.options[event.target.options.selectedIndex].value);
    // this.selectArray1.map(item=>{
    //   if(item.day === event.target.value ){
    //     item.isSelect = true;
    //   }else{
    //     item.isSelect = false;
    //   }
    // })
    // console.log(this.selectArray1);

  }






  checkBox(event){
    console.log("single array checkbox" , event);
    console.log(event.target.checked)
    this.interests.find(item => {
      if(event.target.checked){
        return this.selectInterest.push(event.target.value);
      } else{
        console.log("del")
        return this.selectInterest.splice(this.selectInterest.indexOf(event.target.value),1);
      }
    })
    console.log(this.selectInterest)
  }

  checkBox1(event,obj:ICheckObject){
      // this.interests1.find(item => {
      // if(item.name === event.target.value){
      //   return item.isChecked = !item.isChecked;
      // } 
    // })
    console.log(obj)
    obj["isChecked"]=!obj["isChecked"];
    console.log(this.interests1)
    // console.log(this.interests1);
    // console.log(event);
  }

  
}
