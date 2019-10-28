let isBoolean: boolean = true;
let isString: string = '123';
let isNumber: number = 132;
let isArray: number [] = [1,2,3];
let isArray2: Array<number> = [1,2,3];
 
// 元组 Tuple 一个已知元素数量和类型的数组，各元素的类型不必相同
let isTule: [number, string] = [1, '12'];

// 枚举 enum
enum Color {Red = 1, Blue = 2, Green = 3};
let color: Color = Color.Red
console.log('color:', color)

// 任意类型 
let isAny: any = 123;
isAny = '321'
console.log(isAny);

// void空类型 函数没有返回时
function isVoid(): void{
  console.log('isVoid')
}

// null 与 undefined 是所有类型的子类型
let isNull: null = null;
let isUndefined: undefined = undefined;

// never类型表示的是那些永不存在的值的类型 无法存在到达的点
function isNever(message: string): never{
  throw new Error(message);
}

// object
let isObj: object = {
  name: '123'
};

function createObj(o: object | null):void{
  console.log(o);
}
createObj({name: 123})

// 断言类型 as 或者 <>

let isAs: any = 123;
// let isLength: number = (<string>isAs).length
let isLength: number = (isAs as string).length
console.log('isLength', isLength)
