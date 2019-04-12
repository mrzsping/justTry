function ToDo(){
  this.todos = []
}
ToDo.prototype.add = function(item){
  if(!item) throw new Error('this item is unright!')
  this.todos.push(item)
}
ToDo.prototype.deleteAll = function(){
  this.todos = []
}

ToDo.prototype.getCount = function(){
  return this.todos.length
}

ToDo.prototype.doAsync = function(cb){
  setTimeout(cb, 2000, true)
}

module.exports = ToDo
