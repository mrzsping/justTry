class Student {
  fullName: string ;
  constructor(public first, public middle, public last){
    this.fullName = first + '' + middle + '' + last;
  }
}
interface Person{
  first: string;
  last: string;
}
function Per(person: Person){
  return 'hello ' + person.first + person.last;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = Per(user);