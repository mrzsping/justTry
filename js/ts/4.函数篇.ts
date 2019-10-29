// 1.初步使用
function add(x: number, y: number):number{
  return x + y
}

let _add:(x: number, y: number) => number = function(x: number, y: number){
  return x + y
}

// 2.可选参数 必须在必填参数后面
function diff(x: number, y: number = 0, z?:number){
  return x + y + z
}
console.log(diff(1))

// 3.剩余参数
function rest(x:number, ...y: number[]){

}


// 4.this指向
// 箭头函数
// 传入this
class Handler {
  info: string;
  onClickGood(this: void, e: Event) {
      console.log('clicked!');
  }
}

// 5.重载 参数不同