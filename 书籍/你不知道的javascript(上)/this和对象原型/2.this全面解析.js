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

//     绑定例外

function foo2(){
    console.log(this.a1)
}
var a1 = 123;
foo2.call(null) // 123

//    参数柯里化： 将多个参数合并为一个参数
function foo3(a, b){
    console.log('a' + a, 'b' + b)
}
function bind(fn ,obj){
    return function(){
        fn.apply(obj, arguments)
    }
}
var bar = foo3.bind(null, 2)
bar(3)

//     更安全的this
//     使用Object.create(null)替换null，比null更空

 //    间接引用
var a2 = 111;
var bar4 = {
    a2: 222,
    foo: foo
}
var bar5 = {
    a2: 333
}
bar4.foo()
(bar5.foo = bar4.foo)()
