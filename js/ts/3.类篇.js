var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 基本使用
var Greeter = /** @class */ (function () {
    function Greeter(message, privatepb) {
        this.greeting = message;
        this.privatepb = privatepb;
    }
    Greeter.prototype.greet = function () {
        console.log('hello' + this.greeting);
    };
    return Greeter;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(greeting, publicpb) {
        return _super.call(this, greeting, publicpb) || this;
    }
    Child.prototype.move = function () {
        _super.prototype.greet.call(this);
    };
    return Child;
}(Greeter));
var greeter = new Child('12', '12');
greeter.move();
// public 外部可以防伪
// private 只能内部访问
// protected 派生类中可以访问
var greeters = new Greeter('1', '12');
console.log(greeters.publicpb);
// 包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的
// readonly 修饰符
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
    }
    return Octopus;
}());
var octopus = new Octopus('123');
// 存取器
var password = 123;
var People = /** @class */ (function () {
    function People() {
    }
    Object.defineProperty(People.prototype, "fullName", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (password === 123) {
                this.name = newName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
people.fullName = 'xiaohong';
console.log(people.fullName);
