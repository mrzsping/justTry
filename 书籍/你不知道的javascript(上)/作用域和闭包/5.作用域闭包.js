// 1.闭包:内部函数传递到词法作用域外，保持对作用域的引用

// 2.使用回调函数既是使用闭包

// 3.模块模式: 外部封闭函数，至少被调用一次，内部拥有返回函数

var foo = (function Create(){
  var a = 111;

  function get(){
    return a
  }
  function set (b){
    a = b;
  }
  return {
    get: get,
    set: set
  }
})()

// console.log(foo.get())
// foo.set(222)
// console.log(foo.get())

// 定义模块

var module = (function Module(){ 
  var modlues = {}
  function define(name, def, fn){
    for(var i = 0; i < def.length; i++){
      def[i] = modlues[def[i]];
    }
    modlues[name] = fn.apply(fn, def);
  }
  function get(name){
    return modlues[name]
  }
  return {
    define: define,
    get: get
  }
})()

module.define('hello', ['hello', 'world'], function(){
  function hello(n){
    return n
  }
  return{
    hello: hello
  }
})

console.log(module.get('hello').hello('hello world'))