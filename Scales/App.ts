class Scales{
    items:Array<object>;
    nameList:Array<String>;
    sum:number;

    constructor() {
        this.sum=0;
        this.items=[];
    }

    add(_newItem:Object):void{
     this.items=[...this.items, _newItem];
     console.log(this.items);
    }
    getSumScale():void{
     for ( let testnum in this.items) {
         
    }
     console.log('Общий вес= '+this.sum);
    }
    getNameList():void{
        for ( let testnum in this.items) {
     
        }
     console.log('Список товаров= '+this.nameList);

    }
}
class Product {

    weight:number;
    name:string;

    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight; 
    }

    getScale(_weight:number):void {
        this.weight=_weight;
    }

    getName(_name:string):void {
        this.name=_name;
    }
    
}

class Apple extends Product {
    

    constructor(name:string, weight:number) {
   
        super(name, weight); 
    }

}

class Tomato extends Product {

    constructor(name:string, weight:number) {
      
        super(name, weight); 
    }

}

let scale:Scales=new Scales();
let apple1:Apple=new Apple("rdyh", 546);
let tomato1:Tomato=new Tomato('fadhfh', 56);
scale.add(apple1);
scale.add(tomato1);
scale.getNameList();
scale.getSumScale();



