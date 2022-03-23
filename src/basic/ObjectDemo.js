// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// When the object's members are functions there's a `simpler syntax`.
//Instead of bio: function() we can write bio(). Like this:

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.bio());
console.log(person.introduceSelf());
