

(一).变量和类型:

  [1.JavaScript规定了几种语言类型](../书籍/javascript高级程序设计/3.基本概念.html)

  [2.JavaScript对象的底层数据结构是什么]('js/对象的底层数据结构.txt')

  3.Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

  4.JavaScript中的变量在内存中的具体存储形式

  5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作

  6.理解值类型和引用类型

  7.null和undefined的区别

  8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

  9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

  10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法

(二).原型和原型链:

  1.理解原型设计模式以及JavaScript中的原型规则

  2.instanceof的底层实现原理，手动实现一个instanceof

  3.实现继承的几种方式以及他们的优缺点

  4.至少说出一种开源项目(如Node)中应用原型继承的案例

  5.可以描述new一个对象的详细过程，手动实现一个new操作符

  6.理解es6 class构造以及继承的底层实现原理

(三).作用域和闭包:

  1.理解词法作用域和动态作用域

  2.理解JavaScript的作用域和作用域链

  3.理解JavaScript的执行上下文栈，可以应用堆栈信息快速定位问题

  4.this的原理以及几种不同使用场景的取值

  5.闭包的实现原理和作用，可以列举几个开发中闭包的实际应用

  6.理解堆栈溢出和内存泄漏的原理，如何防止

  7.call 和 apply 的区别是什么，哪个性能更好一些

(四).执行机制:

  1.为何try里面放return，finally还会执行，理解其内部机制

  3.宏任务和微任务分别有哪些

  4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法

  5.使用Promise实现串行

  6.Node与浏览器EventLoop的差异

  7.如何在保证页面运行流畅的情况下处理海量数据

  8.sort方法使用的排序

  9.['1', '2', '3'].map(parseInt)结果是多少
  [1, nan, nan]
  个人见解: parseInt 是一个函数，在数组执行map时，传入值与索引
  即 parseInt('1', 0) parseInt('2', 1) parseInt('3', 2
  parseInt(string, radix): string是要解析的字符串，radix是要解析的数字的基数。该值介于 2 ~ 36 之间
  radix是零时则为十进制，0x则为16进制 2<或>36返回NaN
  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/4

  10.1 + "1"
    2 * "2"
    [1, 2] + [2, 1]
    "a" + + "b"
  
(五).语法和API:

  1.理解ECMAScript和JavaScript的关系

  2.熟练运用es5、 es6提供的语法规范

  3.熟练掌握JavaScript提供的全局对象（例如 Date、 Math）、全局函数（例如 decodeURI、isNaN）、全局属性（例如 Infinity、undefined）

  4.熟练应用map、reduce、filter等高阶函数解决问题

  5.setInterval需要注意的点，使用settimeout实现setInterval

  6.JavaScript提供的正则表达式API、可以使用正则表达式（邮箱校验、URL解析、去重等）解决常见问题

  7.JavaScript异常处理的方式，统一的异常处理方案

  8.es5实现es6的class

  9.Promise内部实现原理
  
(六).环境:

  1.ECMAScript描述了JavaScript语言的语法和基本对象规范

  2.浏览器作为JavaScript的一种运行环境，为它提供了：文档对象模型（DOM），描述处理网页内容的方法和接口、浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口

  3.Node也是JavaScript的一种运行环境，为它提供了操作I/O、网络等API

(七).其他:

  1.防抖

  2.节流：代码在存在间断的情况下才能重复执行

  3.函数式编程

  4.实现parseInt

  6.回调函数坏处

  7.可设置过期时间的localStorage

  9.联想搜索组件

  10.AJAX 手写

  12.移动端触摸事件

  13.事件委托

  14.symbol

  16.多种方式实现深拷贝、对比优缺点

  18.分别用深度优先思想和广度优先思想实现一个拷贝函数

  19.节流与防抖的区别与实现

  20.如何实现一个 new

  21.input 搜索如何防抖，如何处理中文输入

  22.模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

(八).异步:

  1.笔试题
  async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
  }
  async function async2() {
      console.log('async2');
  }
  console.log('script start');
  setTimeout(function() {
      console.log('setTimeout');
  }, 0)
  async1();
  new Promise(function(resolve) {
      console.log('promise1');
      resolve();
  }).then(function() {
      console.log('promise2');
  });
  console.log('script end');

  2.JS 异步解决方案的发展历程以及优缺点

  3.setTimeout、Promise、Async/Await的区别

  4.Async/Await 如何通过同步的方式实现异步

  5.Promise 构造函数是同步执行还是异步执行，那么 then 方法呢

  6.如何处理循环的异步操作

  7.JavaScript如何实现异步编程，可以详细描述EventLoop机制

  8.async/await

  9.Promise.all 使用、原理实现及错误处理,手写promise的all方法

  10.sleep函数

  11.实现LazyMan 类
  LazyMan('Tony');
  // Hi I am Tony
  LazyMan('Tony').sleep(10).eat('lunch');
  // Hi I am Tony
  // 等待了10秒...
  // I am eating lunch
  LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
  // Hi I am Tony
  // I am eating lunch
  // 等待了10秒...
  // I am eating diner
  LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  // Hi I am Tony
  // 等待了5秒...
  // I am eating lunch
  // I am eating dinner
  // 等待了10秒...
  // I am eating junk food

  12.Promise.finally

  13.Promise.race()

  14.function wait() {
      return new Promise(resolve =>
        setTimeout(resolve, 10 * 1000)
      )
    }

    async function main() {
      console.time();
      const x = wait();
      const y = wait();
      const z = wait();
      await x;
      await y;
      await z;
      console.timeEnd();
    }
    main();

    15.function wait() {
        return new Promise(resolve =>
          setTimeout(resolve, 10 * 1000)
        )
      }

      async function main() {
        console.time();
        await wait();
        await wait();
        await wait();
        console.timeEnd();
      }
      main();

(九)数组相关:

  1.有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣
  Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()
  
  2.深度优先遍历和广度优先遍历

  3.多种方式实现数组去重、扁平化、对比优缺点

  4.两个数组合并成一个数组

  5.数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少

  6.数组去重函数
  如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]

(十)实践:

  1.改造下面的代码，使之输出0 - 9
  for (var i = 0; i< 10; i++){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }

  2.简单改造下面的代码,使之分别打印 10 和 20
  var b = 10;
  (function b(){
      b = 20;
      console.log(b); 
  })();

  3.使用迭代的方式实现 flatten 函数

  4.var a = ?;
    if(a == 1 && a == 2 && a == 3){
      console.log(1);
    }

  5.var a = 10;
    (function () {
        console.log(a)
        a = 5
        console.log(window.a)
        var a = 20;
        console.log(a)
    })()

  6.var obj = {
      '2': 3,
      '3': 4,
      'length': 2,
      'splice': Array.prototype.splice,
      'push': Array.prototype.push
    }
    obj.push(1)
    obj.push(2)
    console.log(obj)

  7.var b = 10;
    (function b(){
        b = 20;
        console.log(b); 
    })();

  8.实现 (5).add(3).minus(2) 功能

  9.var a = {n: 1};
    var b = a;
    a.x = a = {n: 2};

    console.log(a.x) 	
    console.log(b.x)
  
  10.{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

  11.给定两个数组，写一个方法来计算它们的交集

  12.随机生成一个长度为 10 的整数类型的数组

  13.字符串的大小写取反

  14.实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

  15.JavaScript Proxy 实现简单的数据绑定

  16.// example 1
    var a={}, b='123', c=123;  
    a[b]='b';
    a[c]='c';  
    console.log(a[b]);

    ---------------------
    // example 2
    var a={}, b=Symbol('123'), c=Symbol('123');  
    a[b]='b';
    a[c]='c';  
    console.log(a[b]);

    ---------------------
    // example 3
    var a={}, b={key:'123'}, c={key:'456'};  
    a[b]='b';
    a[c]='c';  
    console.log(a[b]

    17.打印出 1 - 10000 之间的所有对称数

    18.实现一个 add 函数
    add(1); 			// 1
    add(1)(2);  	// 3
    add(1)(2)(3)；// 6
    add(1)(2, 3); // 6
    add(1, 2)(3); // 6
    add(1, 2, 3); // 6

    19.已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

    20.function changeObjProperty(o) {
      o.siteUrl = "http://www.baidu.com"
      o = new Object()
      o.siteUrl = "http://www.google.com"
    } 
    let webSite = new Object();
    changeObjProperty(webSite);
    console.log(webSite.siteUrl);

    21.function Foo() {
      Foo.a = function() {
        console.log(1)
      }
      this.a = function() {
        console.log(2)
      }
      }
      Foo.prototype.a = function() {
      console.log(3)
      }
      Foo.a = function() {
      console.log(4)
      }
      Foo.a();
      let obj = new Foo();
      obj.a();
      Foo.a();

    22.修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
    1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码
    2、不能修改 Math.floor(Math.random() * 1000
    3、不能使用全局变量
    function print(n){
    setTimeout(() => {
    console.log(n);
    }, Math.floor(Math.random() * 1000));
    }
    for(var i = 0; i < 100; i++){
    print(i);
    }

    23.不用加减乘除运算符，求整数的7倍

    24.String('11') == new String('11');
      String('11') === new String('11');

    25.var name = 'Tom';
      (function() {
      if (typeof name == 'undefined') {
          var name = 'Jack';
          console.log('Goodbye ' + name);
      } else {
          console.log('Hello ' + name);
      }
      })();

    26.var name = 'Tom';
      (function() {
      if (typeof name == 'undefined') {
          name = 'Jack';
          console.log('Goodbye ' + name);
      } else {
          console.log('Hello ' + name);
      }
      })();

    27.请写一个函数，完成以下功能
    输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'

    28.写个程序把 entry 转换成如下对象
    var entry = {
      a: {
      b: {
        c: {
          dd: 'abcdd'
        }
      },
      d: {
        xx: 'adxx'
      },
      e: 'ae'
      }
      }

      // 要求转换成如下对象
      var output = {
      'a.b.c.dd': 'abcdd',
      'a.d.xx': 'adxx',
      'a.e': 'ae'
      }
    
    29.写个程序把 entry 转换成如下对象
    var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
    }

    // 要求转换成如下对象
    var output = {
    a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
    }
    }

    30.找出字符串中连续出现最多的字符和个
    abcaakjbb' => {'a':2,'b':2}
    'abbkejsbcccwqaa' => {'c':3}

    31.实现一个 Dialog 类，Dialog可以创建 dialog 对话框，对话框支持可拖拽

    32.用 setTimeout 实现 setInterval，阐述实现的效果与 setInterval 的差异

    32.求两个日期中间的有效日期

(十一).性能:
1.a.b.c.d 和 a['b']['c']['d']，哪个性能更高

2.for 循环的性能远远高于 forEach 的性能

3.考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素

4.为什么 for 循环嵌套顺序会影响性能？
  
5.统计 1 ~ n 整数中出现 1 的次数