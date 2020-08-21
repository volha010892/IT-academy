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
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var testnum = 0; testnum < this.items.length; testnum++) {
            var weight = this.items[testnum].getScale();
            sum += weight;
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var testnum = 0; testnum < this.items.length; testnum++) {
            var name_1 = this.items[testnum].getName();
            nameList.push(name_1);
        }
        return nameList;
    };
    return Scales;
}());
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
var apple1 = new Apple('яблоко красное', 45);
var apple2 = new Apple('яблоко зеленое', 125);
var tomato1 = new Tomato('томат малиновый', 56);
scale.add(apple1);
scale.add(apple2);
scale.add(tomato1);
var nameList = scale.getNameList();
console.log('Список продуктов: ' + nameList);
var sum = scale.getSumScale();
console.log("Общий  вес: " + sum + ' грамм');
//# sourceMappingURL=App.js.map