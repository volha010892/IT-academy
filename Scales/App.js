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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Scales = /** @class */ (function () {
    function Scales() {
        this.sum = 0;
        this.items = [];
    }
    Scales.prototype.add = function (_newItem) {
        this.items = __spreadArrays(this.items, [_newItem]);
        console.log(this.items);
    };
    Scales.prototype.getSumScale = function () {
        for (var testnum in this.items) {
            console.log(this.items[testnum]);
            //this.items.getScale(this.items[testnum][1].weight);
            //this.sum+=testnum.weight;  
        }
        console.log('Общий вес= ' + this.sum);
    };
    Scales.prototype.getNameList = function () {
        for (var testnum in this.items) {
            //this.nameList.push(this.name);  
        }
        console.log('Общий вес= ' + this.nameList);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function (_weight) {
        this.weight = _weight;
    };
    Product.prototype.getName = function (_name) {
        this.name = _name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        return _super.call(this, name, weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        return _super.call(this, name, weight) || this;
    }
    return Tomato;
}(Product));
var scale = new Scales();
var apple1 = new Apple("rdyh", 546);
var tomato1 = new Tomato('fadhfh', 56);
scale.add(apple1);
scale.add(tomato1);
scale.getNameList();
scale.getSumScale();
//# sourceMappingURL=App.js.map