function greeter(person) {
    return "Hello, " + person.first;
}
var user = { first: 'xiao', last: 'ming' };
document.body.innerHTML = greeter(user);
