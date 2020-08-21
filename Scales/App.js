var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.items = [];
    }
    Scales.prototype.add = function (_newItem) {
        this.items.push(_newItem);
        console.log(this.items);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var testnum = 0; testnum < this.items.length; testnum++) {
            //let weight=this.items[testnum].getScale();
            //sum+=weight;
        }
        console.log('Общий вес= ' + sum);
    };
    Scales.prototype.getNameList = function () {
        var nameList;
        for (var testnum = 0; testnum < this.items.length; testnum++) {
            //let name=this.items[testnum].getName();
            nameList.push(name);
        }
        console.log('Список товаров= ' + nameList);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        console.log(this.weight);
        return this.weight;
    };
    Product.prototype.getName = function (_name) {
        return _name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Tomato;
}(Product));
var scale = new Scales();
var apple1 = new Apple('jnbj', 45);
var tomato1 = new Tomato('fadhfh', 56);
apple1.getScale();
//scale.add(apple1);
//scale.add(tomato1);
scale.getNameList();
scale.getSumScale();
//# sourceMappingURL=App.js.map