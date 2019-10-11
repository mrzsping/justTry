let ToDo = require('./toDo');
let assert = require('assert');
let testsCompleted = 0;
let todo = new ToDo();

function deleteTest(){
  todo.add('123');
  assert.equal(todo.getCount(), 1 , '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'no items should exist');
  testsCompleted++;
}
function addTest(){
  todo.deleteAll();
  todo.add('add');
  assert.notEqual(todo.getCount(), 0, '1 item should exist');
  testsCompleted++;
}
function doAsyncTest(cb){
  todo.doAsync(function(value){
    assert.ok(value, 'callback should be passed true');
    testsCompleted++;
    cb();
  })
}
function throwsTest(cb){
  assert.throws(todo.add, /unright/);
  testsCompleted++;
}
deleteTest();
addTest();
throwsTest();
doAsyncTest(function(){
  console.log(testsCompleted);
})