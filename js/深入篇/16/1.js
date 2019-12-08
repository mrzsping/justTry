  // 函数参数
  let a = function(){
    console.log(arguments, this)

    // arguments linke-array 含有length
    let arr = [];
    console.log(arr)

    // this 指向执行上下文 
  }

// 直接调用
  a()

let num = 1;
let obj = {
  num: 3,
  b: function(){
    return (function(){
      console.log(this, this.num)
    })()
  }
}

obj.b()

// 构造器调用 使用 new 方法构造新对象  作为方法执行上下文
// 隐式 return this
function Person(name){
  // this.name = name;
  // this.get = function(){
  //   console.log(this.name)
  // }
  this.get = function(){
    return this
  }
}
// let person = new Person('xiaoming');
//

let person = new Person();
console.log(person === person.get());

// apply call