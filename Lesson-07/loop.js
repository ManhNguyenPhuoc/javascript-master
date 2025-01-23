// for loop: dùng khi biết trước số lần lặp.
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// } // Từ 0 đến 9
//
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// } // Từ 10 đến 0
//------------------------------------------------------------------------------
// while loop: lặp code đến khi điều kiện false.
// let i = 0;
// while (i < 10) {
//   console.log("Count: " + i);
//   i++;
// }
//------------------------------------------------------------------------------
// do-while loop: giống while, nhưng thực hiện ít nhất
// 1 lần trước khi check điều kiện.
// let j = 0;
// do {
//   console.log("Count: " + j);
//   j++;
// } while (j < 10);
//------------------------------------------------------------------------------
// for-in loop: loop object
// let statusStudent = {
//   name: "Trung Quan",
//   age: 20,
//   gender: "Male",
//   hobbies: ["coding", "playing game", "sleeping"],
// };
//------------------------------------------------------------------------------
// for (let key in statusStudent) {
//   console.log("Key: " + key + " Value: " + statusStudent[key]);
// }
//------------------------------------------------------------------------------
// for-of loop: loop array
// let hobbies = ["coding", "playing game", "sleeping", "travelling"];
// for (let hobby of hobbies) {
//   console.log("Hobby: " + hobby);
// }              //Lặp qua từng ký tự một, còn for in thì theo key.
// let result = [];
// for (let hobby of hobbies) {
//   result = result.concat(hobby.split(" "));
//   console.log(result);
// }
const listBooks = [
  "Tôi thấy hoa vàng trên cỏ xanh",
  "Kính Vạn Hoa",
  "Đường tôi chở em về",
  "Đắc nhân tâm",
  "Harry Potter",
];

// for (let index in listBooks) {
//   console.log("Số thứ tự: " + index + "\n Tên sách: " + listBooks[index]);
// }
// Result: Số thứ tự: 0
//         Tên sách: Tôi thấy hoa vàng trên cỏ xanh

// for (let book of listBooks) {
//   console.log(book);
// }
// Result: Tôi thấy hoa vàng trên cỏ xanh (Chỉ lặp qua
// mỗi value trong array và KHÔNG lặp qua key VÀ OBJECT.)
