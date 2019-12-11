// 实名递归
function judge(str){
  if (str.length <= 1) return true;
  if(str.charAt(0) !== str.charAt(str.length - 1)) return false;
  return judge(str.substr(1, str.length - 2));
}
console.log(judge('1235321'))

// 匿名递归

let obj = {
  name: function(n){
    return n > 1 ? this.name(n-1) + '-name' : 'name' // this 解决匿名函数引用失效问题
  }
}
let objNew = {
  name: obj.name
}
obj = {}
console.log(objNew.name(2))

// 函数记忆

var store = {
	nextId: 1,
	cache: {},
	add: function(fn){
		if(!fn.id){
			fn.id = store.nextId++;
			store.cache[fn.id] = fn;  // retutn ?
		}
	}
}
let fn = function () {
	console.log(this)
}
store.add(fn);
console.log(store.cache)

//存储上一次运算结果

function isRember(value){
	if (!isRember.cache) isRember.cache = {};
	if (!isRember.cache[value]){
		return isRember.cache[value] = value
	}
}
console.log(isRember(5))

// array 对象

let arrObj = {
  length: 0,
  add: function(item){
    Array.prototype.push.call(this, item)
  },
  find: function(id){
    return this[id]
  }
}



