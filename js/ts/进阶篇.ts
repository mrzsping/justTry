// 1.类型别名 长用于类型联合
type name = string
function getName(n: name): name{
  return n
}

// 2.字符串字面量类型 约束
type myName = 'xiaoming' | 'xiaohong' | 'xiaolan'
function names(n: myName): string{
  return n
}
names('xiaoming')
names('xiao') // 限定值

// 3.元组 不同类型数据的数组
let arr:[string, number]
arr[0] = '123'
arr.push(true) // 不允许其他类型
arr = ['xiaoming', 123]
arr.push(123)
arr = ['123'] // 初始化所有
console.log(arr[1].length)

// 4.枚举
enum Colors { red, blue, green, white}
console.log(Colors[0], Colors['red'])

// 5.类
  // 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
  // 对象（Object）：类的实例，通过 new 生成
  // 面向对象（OOP）的三大特性：封装、继承、多态
  // 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
  // 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
  // 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
  // 存取器（getter & setter）：用以改变属性的读取和赋值行为
  // 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
  // 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
  // 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

  // 基本
  class Animal{
    constructor(name){
      this.name = name
    }
    private pr = 1;
    public pr2 = 2;
    protected pr3 = 3;
    say(){
      console.log(this.name)
    }
    get name() { // getter setter 方法
      return this.name
    }
    set name(v){
      this.name = v
    }
    static isAnimal(){ // 静态方法 直接通过类调用
      console.log(123)
    }
  }
  let a = new Animal('xiaoming')

  // 继承
  class Cat extends Animal{
    constructor(pr){
      super(pr)
    }
    say(){
      console.log(this.name)
      console.log(this.pr)
    }
  }
  // 抽象类 不可以实例化

  abstract class Animal2 {
    public name;
    public constructor(name) {
      this.name = name;
    }
    public abstract sayHi();
  }
  class Cat2 extends Animal2 { // 抽象方法必须在子类中实现
    public sayHi() {
      console.log(`Meow, My name is ${this.name}`);
    }
  }
  let cat = new Cat2('Tom');

  // 6.类与接口
  interface Alarm {
    alert();
  }
  class Door {
  }
  class SecurityDoor extends Door implements Alarm {
    alert() {
      console.log('SecurityDoor alert');
    }
  }

  class Car implements Alarm {
    alert() {
      console.log('Car alert');
    }
  }

  // 7.泛型 在定义函数、接口或类的时候，不预先指定具体的类型