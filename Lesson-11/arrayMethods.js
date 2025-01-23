let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]);

// 1. Mở rộng mảng
numbers.push(11);
console.log("Numbers after pushing: ", numbers.toString());

// 2. Xóa phần tử cuối mảng
numbers.pop();
console.log("Numbers after pop: ", numbers.toString());

// 3. Xóa phần tử đầu mảng
numbers.shift();
console.log("Numbers after shift: ", numbers.toString());

// 4. Thêm phần tử đầu mảng (ngược lại shift)
numbers.unshift(0);
console.log("Numbers after unshift: ", numbers.toString());

// 5. Lặp qua từng phần tử trong mảng
console.log("Start foreach loop: ");
numbers.forEach((numbers, index) => {
  console.log("Index: ", index, " \nValue of index " + index + ": ", numbers);
});

// 6. map(): Tạo một mảng mới biến đổi các phần tử trong
// mảng gốc. Ex: 1,2,3,4,5 -> 2,4,6,8,10
let mappedNumbers = numbers.map((number) => {
  return number * 2;
});
console.log("Mapped numbers: ", mappedNumbers.toString());

// 7. filter(): Lọc mảng theo một điều kiện
let filteredNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log("Filtered numbers: ", filteredNumbers.toString());

// 8. find(): Tìm phần tử đầu tiên trong mảng thỏa điều
// kiện đưa chỉ định.
let foundNumber = numbers.find((number) => {
  return number % 2 === 0;
});
console.log("Found number: ", foundNumber);

// 9. reduce(): Tính toán giá trị duy nhất từ mảng, ví dụ
// tính tổng các phần tử trong mảng, ...
let sumUsedReduce = numbers.reduce((total, number) => {
  return total * number;
}, 0);
console.log("Sum of numbers using reduce: ", sumUsedReduce);

// 10. some(): Check xem mảng có ít nhất một phần tử
// thỏa điều kiện hay không (return boolean true/false)
// *Chỉ chạy đến phần tử đầu tiên trong mảng thỏa mãn,
// không tự động lặp qua tất cả phần tử trong mảng.*
let someUsed = numbers.some((number) => {
  return number % 2 === 0;
});
console.log("Some numbers: ", someUsed);
// ------------------------Part 2----------------------
// 1. concat(): Nối chuỗi -> Tạo một mảng mới từ hai
// mảng gốc. *Không thay đổi cấu trúc mảng gốc.*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrPlus = arr1.concat(arr2);
console.log("Array 1 and Array 2 plus: ", arrPlus.toString());

// 2. slice(): Lấy một chuỗi bắt đầu từ vị trí index-vị trí bất kì
// *không bao gồm end index* từ mảng gốc -> Tạo một mảng mới
// không thay đổi cấu trúc mảng gốc.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrSlice = arr3.slice(2, 5);
console.log("Array 3 sliced: ", arrSlice.toString());

// 3. splice(): *Có thể thay đổi cấu trúc mảng gốc*
// Thay đổi một phần tử trong mảng gốc, hoặc thêm một phần tử
let arr4 = [22, 24, 26, 28, 30];
let arrSplced = arr4.splice(2, 4, "A", "B", "C");
//Bắt đầu từ index: 2, lấy ra bốn phần tử và thêm vào
// các phần tử A, B, C vào mảng gốc. CÓ THAY ĐỔI CẤU TRÚC
// MẢNG GỐC.
console.log("Array 4 spliced: ", arrSplced.toString());
console.log("Array 4 after splice: ", arr4.toString());

// 4. every():
