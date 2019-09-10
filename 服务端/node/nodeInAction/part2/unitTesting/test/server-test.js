// sever-side test

exports.testPony = function (test) {
  test.excpect(2);
  if(false){
    test.ok(false, 'this should not have passed')
  }
  test.ok(true, 'this should have passed');
  test.done();
}