function Person(name) {
    this.name = name;
}
let b = Object.create(Person.prototype);

function F() {}
F.prototype = Person.prototype;

console.log(b.constructor === Person)

let d = new Person('Tom')