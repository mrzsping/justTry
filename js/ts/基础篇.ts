// 1.原始数据类型 boolean number string null undefined
let a:number = 123;
let b:string = '123';
let c:boolean = true;
let d:null = null;
let e:undefined = undefined;
function aler():void {
  console.log('void')
}
aler()
console.log(a, b, c, d, e)

// 2.任意值 可随意赋值 添加属性和方法
let ab:any = '123';
console.log(ab.name)

// 3.类型推论 定义时赋值则为指定类型 没有则为任意类型
let cd
cd = 21231;
cd = '123'

// 4.联合类型 只允许访问联合类型的共有属性或方法
let ac:number | string = '123'

function getLen(v: string): number{
  return v.length
}


// 5.接口 行为的抽象
interface Person{
  readonly id: number; // 只读属性 第一次给对象赋值
  name: string;
  age: number;
  sex?: string; // 可选属性
  [propName: string]: string | number; // 任意属性 确定属性和可选属性的类型都必须是它的类型的子集
}

let person:Person = {
  id: 12,
  name: 'xiaoming',
  age: 12
}

// 6.数组
let arr1: string[] = ['234']
let arr2: Array<string> = ['234']
interface NumberArr{ // 表示类数组 arguments
  [index: number]: number
}

function arg(){
  let arr: {
    [index: number]: number;
    length: number;
    callee: Function
  } = arguments
}

// 7.函数

// 函数声明
function fn(x:number, y:number):number{
  return x + y
}

// 函数表达式 => 函数定义并非箭头函数
let fn2:(x:number, y:number) => number = function(x:number, y:number):number{
  return x + y
}

// 接口定义函数
interface Fn{
  (x:number, y: number): number
}

let fn3:Fn
fn3 = function(x:number, y:number):number{
  return x + y
}

// 可选参数 必须跟在必需参数后面 添加默认值即识别为可选参数
function fn4(x: number = 12, y?:number):number{
  return x + y
}

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 8.类型断言：手动指定一个值的类型 <类型> 值  或者 值 as 类型
function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (something as string).length;
  } else {
      return something.toString().length;
  }
}

// 9.声明文件
// https://github.com/xcatliu/typescript-tutorial/blob/master/basics/declaration-files.md

// 10.内置对象
let body:HTMLElement = document.body
