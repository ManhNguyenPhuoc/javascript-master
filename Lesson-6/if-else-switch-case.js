// If-else
const age = 22;
if (age > 18) {
  console.log("Bạn trên 18 tuổi");
} else {
  console.log("Bạn dưới 18, không được vào rạp phim!");
}

// Switch-case
let day = new Date().getDay();
console.log(day);
switch (day) {
  case 0:
    console.log("Chủ nhật");
    break;
  case 1:
    console.log("Thứ hai");
    break;
  case 2:
    console.log("Thứ ba");
    break;
  case 3:
    console.log("Thứ tư");
    break;
  case 4:
    console.log("Thứ năm");
    break;
  case 5:
    console.log("Thứ sáu");
    break;
  case 6:
    console.log("Thứ bảy");
    break;
  default: // Khi không trường hợp nào trên nó sẽ nhảy vào default.
    console.log("Ngày không hợp lệ");
}
