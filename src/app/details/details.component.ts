
import { Component, OnInit } from '@angular/core';
import { IserviceService } from '../iservice.service';
import { University } from './Ischooldta';





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Data: University[] = [];
  arrays:University[] =[]
  total:University[] =[]
p: any;
  key : string = 'Acceptance'
  


  
  constructor(private _eobj: IserviceService){

  }
  ngOnInit(): void {
    this._eobj.getData().subscribe(data=>this.Data = data);
    this._eobj.getData().subscribe(data=>this.arrays = data);
    this._eobj.getData().subscribe(data=>this.total = data);
    
   
    
  }

  checkboxArray: any =[
    {
      Degree: "Masters",
      country : "Australia"
    },
    {
      Degree: "Bachelors",
      country : "Austria"
    }, {
      Degree : "Doctorate",
      country : "Belgium"
    },
    {
      Degree : "Associate",
      country : "Bulgaria"
    }, {
      Degree : "Professional Certificate",
      country : "Canada"
    },
    {
      Degree : "Diploma",
      country : "China"
    }, {
      Degree : "Post Graduate Diploma",
      country : "Colombia"
    },
    {
      Degree : "Undergraduate Certificate",
      country : "Costa Rica"
    }, {
      Degree : "Graduate Certificate",
      country : "Croatia"
    },
    {
      Degree : "Post Graduate Certificate",
      country : "Czech Republic"
    }
  ]
  tempArray:any = [];
  newArray:any =[];
  onChange(event: any){
    if(event.target.checked){
       this.tempArray = this.arrays.filter((e:any)=> e.country == event.target.value )
       this.Data= [];

       this.newArray.push(this.tempArray);
       for(let i=0; i<this.newArray.length; i++){
         var firstArray = this.newArray[i];
         for(let i = 0; i < firstArray.length ; i++){
          var obj = firstArray[i];
         this.Data.push(obj)
         }
       }
    }else{
      this.tempArray = this.Data.filter((e:any)=> e.country!= event.target.value );
      this.newArray = [];
      this.Data = [];
      this.newArray.push(this.tempArray);
      for(let i=0; i<this.newArray.length; i++){
        var firstArray = this.newArray[i];
        for(let i = 0; i < firstArray.length ; i++){
         var obj = firstArray[i];
        this.Data.push(obj)
        }
      }
      // console.log(this.Data)
    
     
      if(this.Data.length == 0 ){
        this.Data = this.arrays
  
        
      }

    }
    
  }
  onChanges(event: any){
    if(event.target.checked){
       this.tempArray = this.arrays.filter((e:any)=> e.Degree == event.target.value )
       console.log(event.target.value)
       this.Data= [];

       this.newArray.push(this.tempArray);
       for(let i=0; i<this.newArray.length; i++){
         var firstArray = this.newArray[i];
         for(let i = 0; i < firstArray.length ; i++){
          var obj = firstArray[i];
         this.Data.push(obj)
         }
       }
    }else{
      this.tempArray = this.Data.filter((e:any)=> e.Degree!= event.target.value );
      this.newArray = [];
      this.Data = [];
      this.newArray.push(this.tempArray);
      for(let i=0; i<this.newArray.length; i++){
        var firstArray = this.newArray[i];
        for(let i = 0; i < firstArray.length ; i++){
         var obj = firstArray[i];
        this.Data.push(obj)
        }
      }
      // console.log(this.Data)
    
     
      if(this.Data.length == 0 ){
        this.Data = this.arrays
  
        
      }

    }
    
  }

  sort(){

  }
  
  }


  
  


 
  




