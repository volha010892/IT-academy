class Scales{
    items:Array<Product>;

    constructor() {
        this.items=[];
    }

    add(_newItem:Product):void{
     this.items.push(_newItem);
    }
    getSumScale():number{
        let sum=0;
     for ( let testnum:number=0; testnum<this.items.length; testnum++ ) {
         let weight=this.items[testnum].getScale();
         sum+=weight;
    }
      return sum;
    }
    getNameList():Array<String>{
        let nameList:Array<String>=[];
        for ( let testnum:number=0; testnum<this.items.length; testnum++ ) {
         let name=this.items[testnum].getName();
         nameList.push(name);
        }
        return nameList;
    }
}
class Product {

    weight:number;
    name:string;

    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight; 
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
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
let apple1:Apple=new Apple('яблоко красное', 45);
let apple2:Apple=new Apple('яблоко зеленое', 125);
let tomato1:Tomato=new Tomato('томат малиновый', 56);
scale.add(apple1);
scale.add(apple2);
scale.add(tomato1);
let nameList:Array<String>=scale.getNameList();
console.log('Список продуктов: '+ nameList)
let sum:number=scale.getSumScale();
console.log("Общий  вес: "+sum+ ' грамм');



