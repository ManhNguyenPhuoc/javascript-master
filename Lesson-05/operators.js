// + - * / % ** ++ --, +=, -=, *=, /=, %=
// Assignment Operator: Toán tử gán x = 'Tôi là Mạnh'
// --------------------------------------------------------
// Comparison Operator: Toán tử so sánh x == y, x != y, x > y, x < y
let x = 10;
let y = 10;
console.log(x == y); // Kiểu thoải mái hơn nên true
console.log(x === y); // Tuyệt đối nên cả 2 phải cùng
// kiểu dữ liệu mới là true, còn ngược lại false.
// --------------------------------------------------------
// Logical Operator: Toán tử lệnh
let a = 10;
let b = 20;
console.log("AND result: " + (a > b && b == 20)); // AND
console.log("OR result: " + (a < b || a > b)); //OR
console.log("NOT result: " + !(b > a));
// --------------------------------------------------------
let name = "Mạnh";
console.log(`Tôi tên là ${name}`); // Lớp lại
// --------------------------------------------------------
// Toán tử 3 ngôi
const age = 22;
const checkAge =
  age > 18 ? "Bạn trên 18 tuổi" : "Bạn dưới 18, không được vào rạp phim!";
console.log(checkAge);
// --------------------------------------------------------
// Type Operator: Toán tử kiểu dữ liệu (typeof)
const name2 = "Nguyễn Phước Mạnh";
console.log(typeof name2); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof null); // null
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // array
// --------------------------------------------------------
// Bitwise Operator: Toán tử bit
