class Scales{
    items:Array<String>;

    constructor() {
        this.items=[];
    }

    add(_newItem:String):void{
     this.items.push(_newItem);
     console.log(this.items);
    }
    getSumScale():void{
        let sum=0;
     for ( let testnum:number=0; testnum<this.items.length; testnum++ ) {
         //let weight=this.items[testnum].getScale();
         //sum+=weight;
    }
     console.log('Общий вес= '+sum);
    }
    getNameList():void{
        let nameList:Array<String>;
        for ( let testnum:number=0; testnum<this.items.length; testnum++ ) {
         //let name=this.items[testnum].getName();
         nameList.push(name);
        }
     console.log('Список товаров= '+nameList);

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
let apple1:Apple=new Apple('jnbj', 45);
let tomato1:Tomato=new Tomato('fadhfh', 56);
apple1.getScale();
//scale.add(apple1);
//scale.add(tomato1);
scale.getNameList();
scale.getSumScale();



