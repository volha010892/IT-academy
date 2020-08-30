interface IScalable{
    getScale():number;
    getName():string;
}
class Scales{
products:IScalable[]=[];
addProduct(p:IScalable):void{
    this.products.push(p);
}
getSumScale():number{
    let sumScale:number=0;
    for ( let testnum:number=0; testnum<this.products.length; testnum++ ) {
        sumScale+=this.products[testnum].getScale();
   }  
   return sumScale;
}
getNameList():Array<String>{
    let nameList:Array<String>=[];
    for ( let testnum:number=0; testnum<this.products.length; testnum++ ) {
     let name=this.products[testnum].getName();
     nameList.push(name);
    }
    return nameList;
}
}

class Apple implements IScalable{

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
class Tomato implements IScalable{

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
/*class Scales{
    items:Array<Product>;

    constructor() {
        this.items=[];
    }

    add(_newItem:Product):void{
     this.items.push(_newItem);
    }
    getSumScale():number{
        let sum:number=0;
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
*/
let scale:Scales=new Scales();
let apple1:Apple=new Apple('яблоко красное', 45);
let apple2:Apple=new Apple('яблоко зеленое', 125);
let tomato1:Tomato=new Tomato('томат малиновый', 56);
scale.addProduct(apple1);
scale.addProduct(apple2);
scale.addProduct(tomato1);
let nameList:Array<String>=scale.getNameList();
console.log('Список продуктов: '+ nameList)
let sum:number=scale.getSumScale();
console.log("Общий  вес: "+sum+ ' грамм');



