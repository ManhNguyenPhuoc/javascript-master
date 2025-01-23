const user = {
  name: "Trung Quan",
  age: 20,
  gender: "Male",
  hobbies: ["coding", "playing game", "sleeping"],
};

user.family = ["Brother", "Sister", "Mother", "Father"]; //add thêm key-value
console.log(user);
user.family.push("Granmother"); //add thêm một value mới trong key family
user.age = 22; // Sửa /update value
delete user.gender; // Xóa key gender
