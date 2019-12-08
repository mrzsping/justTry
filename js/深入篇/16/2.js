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