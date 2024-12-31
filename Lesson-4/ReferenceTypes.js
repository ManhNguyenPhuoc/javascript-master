console.log("----------------------------------");

// Object
const dev = {
  age: 22,
  name: "Nguyễn Phước Mạnh",
  greet: function () {
    console.log("Hello, I'm " + this.name);
    console.log("I'm " + this.age + " years old");
  },
  // ES6
  // greet() {
  //   console.log("Hello, I'm " + this.name);
  //   console.log("I'm " + this.age + " years old");
  // },
};

// Array
