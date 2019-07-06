var Student = /** @class */ (function () {
    function Student(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
        this.fullName = first + '' + middle + '' + last;
    }
    return Student;
}());
function Per(person) {
    return 'hello ' + person.first + person.last;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = Per(user);
