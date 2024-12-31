// Primitive Khi gán giá trị mới vào một biến, một bản sao độc lập
// của nó được tạo ra mới, và không ảnh hưởng đến
// biến cũ đã tồn tại.

// Reference khi đang tham chiếu cùng một đối tượng,
// khi thay đổi giá trị của một trang 2 thì sẽ thay
// đổi giá trị của cả 2.
const objA = {
  username: "nguyencm",
};

const objB = objA;

objB.username = "nguyencm 1978";

console.log(objA.username);
