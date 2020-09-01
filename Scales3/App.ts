class Product {
  private weight: number;
  private name: string;

  constructor(_name: string, _weight: number) {
    this.name = _name;
    this.weight = _weight;
  }

  getScale(): number {
    return this.weight;
  }

  getName(): string {
    return this.name;
  }
}

interface IStorageEngine {
  addItem(item: Product): void;
  getItem(index: number): Product;
  getCounter(): number;
}


class ScalesStorageEngineArray implements IStorageEngine {
    products: Product[] = [];
    addItem(item: Product): void {
      this.products.push(item);
    }
    getItem(index: number): Product {
      return this.products[index];
    }
    getCounter() {
      return this.products.length;
    }
  }

class ScalesStorageEngineLocalStorage implements IStorageEngine{
  localStorageKey: string = 'prod';
  a: any[]=[];
  addItem(p: Product): void {
    if (localStorage.prod != undefined) {
      this.a= JSON.parse(localStorage.prod);
    }
    this.a.push(p);
      localStorage.prod = JSON.stringify(this.a);
  }
  getItem(i: number): Product {
    let a: any[] = JSON.parse(localStorage.prod);
    return new Product(a[i].name, a[i].weight);
  }
  getCounter() {
    return this.localStorageKey.length;
  }
}
/*class StorageEngine<IStorageEngine>{
  storageIngene: IStorageEngine = null;
  constructor(_storageIngene: IStorageEngine) {
    this.storageIngene = _storageIngene;
    console.log(this.storageIngene)
  }
}*/
class Scales <StorageEngine extends IStorageEngine>{
  SE:StorageEngine[]=[];
  getSumScale(): number {
    let sumScale: number = 0;
    //let SE: StorageEngine;
    console.log(this.SE)
    /*for (let testnum: number = 0; testnum < SE.getCounter(); testnum++) {
      sumScale += SE.getItem(testnum).getScale();
    }*/
    return sumScale;
  }
  getNameList(): Array<String> {
    let nameList: Array<String> = [];
    let SE: StorageEngine;
    for (let testnum: number = 0; testnum < SE.getCounter(); testnum++) {
      let name = SE.getItem(testnum).getName();
      nameList.push(name);
    }
    return nameList;
  }
}
let arrayScale=new ScalesStorageEngineArray();
let scale=new Scales();
//let arrayScale=new Scales<ScalesStorageEngineArray>();
console.log(arrayScale)
let storageScale=new Scales<ScalesStorageEngineLocalStorage>();
let apple1:Product=new Product('яблоко красное', 45);
let apple2:Product=new Product('яблоко зеленое', 125);
let tomato1:Product=new Product('томат малиновый', 56);
arrayScale.addItem(apple1);
scale.getSumScale();
//arrayScale.addItem(apple1);
//storageScale.addItem(apple2);
//scale.getSumScale();
//console.log(scale)

