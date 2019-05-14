// 1.确定调用位置 -> 梳理调用栈

// 2.绑定规则:
//     直接调用: 绑定全局作用域（非严格模式

//     隐式绑定: 把函数调用的this绑定到上下文对象
//     隐式丢失: 参数传递为隐式赋值
function foo(){
    console.log(this.a)
}

var obj = {
    foo: foo,
    a: 1
}
var bar = obj.foo;
var a = 2;
console.log(obj.foo()) // 隐式绑定
console.log(bar())

//     显式绑定 call/apply
var obj2 = {
    a: 3
}
foo.call(obj2)
foo.call(global)
//    硬绑定

var bar3 = function(){ // 无法改变this
    foo.call(obj)
}
bar3();
setTimeout(bar, 100)


