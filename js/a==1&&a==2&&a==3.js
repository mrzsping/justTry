//  使用==时
//  内置类：先使用valueOf，再使用toString()
//  日期类：toString()
//1.对象比较使用·toString
// var a = {
//   i: 1,
//   toString: function(){
//     return this.i++
//   }
// }

//2.数组使用toString时调用join
// var a = [1, 2, 3]
// a.join = a.shift

// 3.对象属性获取值使用get
// var i = 1;
// Object.defineProperty(global, 'a', {
//   get: function(){
//     return i++
//   }
// })

console.log(a == 1 && a == 2 && a == 3)