// 基本使用
class Greeter{
  greeting: string;
  public publicpb: string;
  private privatepb: string
  constructor(message: string, privatepb: string){
    this.greeting = message
    this.privatepb = privatepb
  }
  greet () {
    console.log('hello' + this.greeting);
  }
}

class Child extends Greeter{
  constructor(greeting: string, publicpb: string){
    super(greeting, publicpb)
  }
  move(){
    super.greet()
  }
}
let greeter = new Child('12', '12');
greeter.move()

// public 外部可以防伪
// private 只能内部访问
// protected 派生类中可以访问
let greeters = new Greeter('1', '12');
console.log(greeters.publicpb)

// 包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的

// readonly 修饰符
class Octopus {
  readonly name: string;
  constructor(name: string){
    this.name = name
  }
}
let octopus = new Octopus('123');


// 存取器
let password = 123;
class People{
  private name: string;
  get fullName(): string{
    return this.name
  }
  set fullName(newName: string){
    if (password === 123){
      this.name = newName
    }
  }
}
let people = new People();
people.fullName = 'xiaohong';
console.log(people.fullName)

// 静态属性 static 类名 + 属性名
class Grid{
  static origin = {
    x: 0,
    y: 0
  }
  constructor() {
    
  }
  originFn(){
    console.log(Grid.origin)
  }
}
let grid = new Grid()
grid.originFn()

// abstract 抽象类 作为基类使用 一般不直接实例化

// 类当做接口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};