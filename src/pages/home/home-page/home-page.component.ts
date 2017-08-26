import { Component, OnInit } from '@angular/core';

interface Card{
  name:string,
  type:string,
  cost:number,
  vocation:string,
  img:string
  random?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cards:Array<Card>;
  constructor() {
   this.getContacts();
  }
  
  getContacts(){
     this.cards = [
      {name:"月火术",type:"法术",cost:0,vocation:"德鲁伊",img:""},
      {name:"辛达苟萨",type:"龙",cost:8,vocation:"法师",img:""},
      {name:"巨型蟒蛇",type:"野兽",cost:7,vocation:"德鲁伊",img:""},
      {name:"精神控制",type:"法术",cost:10,vocation:"牧师",img:""},   
      {name:"冰猴",type:"龙",cost:7,vocation:"中立",img:""},
      {name:"风暴看守者",type:"元素",cost:8,vocation:"中立",img:""}
];
  }

  // addContact(){
  //   let newContact = {
  //     name:"Rita",
  //     sex:"F",
  //     mobile:"13677777777"
  //   }
  //   this.contacts.push(newContact)
  // }

  asc(){
  //  -1
  //     }
  //   }) // 正序排列
  //   // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  //   this.contacts.sort((a,b)=>{
  //     if(a.sex>b.sex){
  //       return 1
  //     }else{
  //       return 
}


  desc(){
    // 逆序排列    
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  ngOnInit() {
  }

}
