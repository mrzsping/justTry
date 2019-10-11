// 错误理解 1.this指向函数自身

// function foo(n){
//   console.log(n);
//   this.count++;
// }
// foo.count = 0;
// for(var i = 0; i < 5; i++){
//   foo(i);
// }
// console.log('foo.count', foo.count)


// 错误理解 2.指向函数的作用域

// function foo(){
//   this.bar()
// }
// function bar(){
//   console.log(123)
// }
// foo()


// this: 函数调用时创建执行上下文(调用栈、调用方法、传入参数等)的一个属性，在函数调用时绑定