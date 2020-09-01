var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCounter = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.localStorageKey = 'prod';
        this.a = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (p) {
        if (localStorage.prod != undefined) {
            this.a = JSON.parse(localStorage.prod);
        }
        this.a.push(p);
        localStorage.prod = JSON.stringify(this.a);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (i) {
        var a = JSON.parse(localStorage.prod);
        return new Product(a[i].name, a[i].weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCounter = function () {
        return this.localStorageKey.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
/*class StorageEngine<IStorageEngine>{
  storageIngene: IStorageEngine = null;
  constructor(_storageIngene: IStorageEngine) {
    this.storageIngene = _storageIngene;
    console.log(this.storageIngene)
  }
}*/
var Scales = /** @class */ (function () {
    function Scales() {
        this.SE = [];
    }
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        //let SE: StorageEngine;
        console.log(this.SE);
        /*for (let testnum: number = 0; testnum < SE.getCounter(); testnum++) {
          sumScale += SE.getItem(testnum).getScale();
        }*/
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        var SE;
        for (var testnum = 0; testnum < SE.getCounter(); testnum++) {
            var name_1 = SE.getItem(testnum).getName();
            nameList.push(name_1);
        }
        return nameList;
    };
    return Scales;
}());
var arrayScale = new ScalesStorageEngineArray();
var scale = new Scales();
//let arrayScale=new Scales<ScalesStorageEngineArray>();
console.log(arrayScale);
var storageScale = new Scales();
var apple1 = new Product('яблоко красное', 45);
var apple2 = new Product('яблоко зеленое', 125);
var tomato1 = new Product('томат малиновый', 56);
arrayScale.addItem(apple1);
scale.getSumScale();
//arrayScale.addItem(apple1);
//storageScale.addItem(apple2);
//scale.getSumScale();
//console.log(scale)
//# sourceMappingURL=App.js.map