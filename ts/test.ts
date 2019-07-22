class Student{
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = firstName + '' + middleName + '' + lastName
  }
}
interface Person{
  firstName: string;
  lastName: string;
}
function getPerson(person: Person){
  return person.firstName + '' + person.lastName;
}
let user = new Student('1', 'w', '3')
console.log(getPerson(user))