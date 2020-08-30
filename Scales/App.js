var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var testnum = 0; testnum < this.products.length; testnum++) {
            sumScale += this.products[testnum].getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var testnum = 0; testnum < this.products.length; testnum++) {
            var name_1 = this.products[testnum].getName();
            nameList.push(name_1);
        }
        return nameList;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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
var scale = new Scales();
var apple1 = new Apple('яблоко красное', 45);
var apple2 = new Apple('яблоко зеленое', 125);
var tomato1 = new Tomato('томат малиновый', 56);
scale.addProduct(apple1);
scale.addProduct(apple2);
scale.addProduct(tomato1);
var nameList = scale.getNameList();
console.log('Список продуктов: ' + nameList);
var sum = scale.getSumScale();
console.log("Общий  вес: " + sum + ' грамм');
//# sourceMappingURL=App.js.map