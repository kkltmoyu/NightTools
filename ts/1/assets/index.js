var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
var color = Color.Blue;
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName + ' ' + color;
}
var user = new Student("Jane", "M.", "User");
console.log(haha);
var haha = 'haha';
document.body.innerHTML = greeter(user);
