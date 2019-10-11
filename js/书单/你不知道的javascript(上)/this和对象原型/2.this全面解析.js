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

//    new绑定: 被new操作符调用的普通函数
//     步骤: 1.创建一个全新对象 -> 2.执行原型连接 -> 3.绑定到函数调用的this -> 4.如没返回对象，则自动返回对象


//    优先级: new > 显式 > 隐式 > 默认

//    DMZ对象

function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
}
// 我们的DMZ 空对象
var ø = Object.create( null );
// 把数组展开成参数
foo.apply( ø, [2, 3] ); // a:2, b:3
// 使用bind(..) 进行柯里化
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3

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
