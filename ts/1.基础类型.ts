let a: boolean = true; // boolean

let b: number = 123; // number

let myName: string = "123"; // string

let arr: number[] = [1, 2, 3, 4]; // array
let brr: Array<number> = [2,3,4];

let x: [string, number] = ['123', 123]; // tuple
let y: Array<[string, number]> = [['123', 123]];

enum Color {red = 1, green = 2, blue = 3} // 枚举
let colorName: string = Color[2]; // 根据值返回键
console.log(colorName)

let notSure: any[] = [1, '132']; // 任意类型

let nothing: void = undefined; // 没有任何类型

let un: undefined = undefined; // undefined

let nu: null = null; // null

function error(message: string): never{ // 永不存在的值的类型
  throw new Error(message)
}

function createObject(name: string): object{ // object
  return {
    name: name
  }
}
console.log('创建了对象', createObject('123'))

let someStr: any = '1313213'; // 断言
// let someLength: number = (<string>someStr).length;
let someLength:number = (someStr as string).length;
console.log(someLength)


