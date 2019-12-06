// 接口
// 1.初步使用
 function isInterface(obj: {name: string}){
   console.log(obj.name)
 }
 let myObj = {
   name: '123'
 }
 isInterface(myObj)

 // 2.规范化使用
 // ? 可选
 interface useIenterface {
   name: string,
   age?: number,
 }
 function useInterfaceFn(obj: useIenterface): string{
   return obj.name
 }
 useInterfaceFn({name: '123'})

// 只读 对象 数组
interface POINT {
  readonly name: string
}
let point: POINT = {
  name: 'color'
}
let readonlyArr: ReadonlyArray<string> = ['123', '123']
let readArr = readonlyArr as string[];
readArr[0] = '321'
console.log(readArr)

// 额外的属性检查 非确定属性 不能用其他字段 例如存在 color? 但是不能用 colorr
interface EXTRA{
  name?: string,
  age?: number,
  [propName: string]: any
}
function extraFn(obj: EXTRA){
  console.log(obj.name)
}
let extraObj = {
  naem: '123'
}
// extraFn(extraObj as EXTRA)
extraFn(extraObj)

// 函数类型
interface interFn {
  (name: string): string
}
let myName:interFn
myName = function(name: string): string{
  return name
}
myName('123')

// 可索引类型
interface isIndex {
  [index: number]: string
}
let isIndexArray:isIndex = ['123', '12313']

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: number     // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// 类类型
interface classInterface {
  color: string
}
class ColorClass implements classInterface {
  color: string;
  constructor(c: number){

  }
}

// 接口继承
interface interExtend {
  name: string
}
interface child extends interExtend {
  age: number
}
let a:child = {
  age: 12,
  name: '123'
}