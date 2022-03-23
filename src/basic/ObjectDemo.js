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
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#arrow_functions_used_as_methods
  // bio: (name = ["Bob", "Smith"], age = 32) => {
  //   console.log(`${name[0]} ${name[1]} is ${age} years old.`);
  // },
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







// Constructor
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

function Person2(
  name,
  age,
  bio,
  introduceSelf = () => {
    console.log(`Hi! I'm ${name}.`);
  }
) {
  this.name = name;
  this.age = age;
  this.bio = bio;
  this.introduceSelf = introduceSelf;
}

const salva = new Person2("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person2("Frankie");
frankie.name;
frankie.introduceSelf();
