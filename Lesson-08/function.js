// Declaration function: dùng để khai báo một hàm
// function sayCheese(name) {
//   console.log("Hey " + name + ", say cheese!");
// }

// sayCheese("Trung Quan"); // Hey Trung Quan say cheese!
// -----------------------------------------------------------------------------
// Expression function (Hàm biểu thức): dùng để khai báo một hàm
// và được gán cho một biến.
// const sayCheeseExpression = function (name) {
//   console.log("Hey " + name + ", say cheese!");
// };
// console.log(sayCheeseExpression("Trung Quan"));
// -----------------------------------------------------------------------------
// Arrow function:
// const sayCheeseArrow = (name) => {
//   console.log("Hey " + name + ", say cheese!");
// };
// sayCheeseArrow("Trung Quan");
// -----------------------------------------------------------------------------
// Anonymous function: hàm ẩn danh và không có tên. Thường làm
// đối số cho hàm khác.
// setTimeout(() => {
//   console.log("Sau 3 giây sẽ chúc mừng năm mới!");
// }, 3000);
// -----------------------------------------------------------------------------
// Method function: dùng để khai báo một hàm của một object
// const name = "con heo";
// const person = {
//   name: "Trung Quan",
//   age: 20,
//   gender: "Male",
//   hobbies: ["coding", "playing game", "sleeping"],
//   //   sayName: function () {
//   //     console.log("My name is " + this.name);
//   //   },  //Nó lấy giá trị ở key name trong object person
//   sayName: () => {
//     console.log("My name is " + person.name);
//   }, // Arrow funciton không dùng được this
// };
// person.sayName(); // My name is Trung Quan
// -----------------------------------------------------------------------------
// Constructor function
function user(userName) {
  this.userName = userName;
  this.sayName = function () {
    console.log("Tên của tui là: " + this.userName);
  };
}

const userA = new user("Trung Quan");
userA.sayName(); // Tên của tui là: Trung Quan
