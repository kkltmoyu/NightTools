/* class case */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

//enum case
enum Color { Red, Blue, Black }
let color:Color = Color.Blue

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName + ' ' + color;
}

let user = new Student("Jane", "M.", "User");
/* class case end */

//提前声明case
// console.log(haha)
// let haha: string = 'haha'


document.body.innerHTML = greeter(user);

