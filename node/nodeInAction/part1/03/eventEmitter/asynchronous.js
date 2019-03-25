function asyncFunction(callback) {
  setTimeout(callback, 200);
  }
  var color = 'blue';
  (function(color) {
  asyncFunction(function() {
  console.log('The color is ' + color);
  })
  })(color);
  color = 'green';

  // it will print "the color is blue"
  //by making color an argument for the anonymous function, it becomes local to the scope of the function, and when the value of color is changed outside of the anonymous function, the local version is unaffected.