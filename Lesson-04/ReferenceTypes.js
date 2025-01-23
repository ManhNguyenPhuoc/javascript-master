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
let arr = [1, 2, 3, 4, 5];
console.log(arr[4]);

// Function
const func = (name) => {
  console.log("Hello, nice to meet you " + name);
};

func("Nguyễn Phước Mạnh");
