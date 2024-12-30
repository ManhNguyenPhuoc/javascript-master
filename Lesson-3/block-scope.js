const block = () => {
  {
    const scopeA = "Nguyễn Phước Mạnh";
    var scopeB = "Phước Dũng";
    let scopeC = "Xuân Đạt";
    console.log("a là " + scopeA);
    console.log("b là " + scopeB);
    console.log("c là " + scopeC);
    console.log("----------------------------------");
  }
};
block();

// Const và let chỉ sử dụng trong phạm vi của block.
// tức là trong một khối {}

// Var thì sử dụng toàn cục, nếu khai báo trong một function,
// thì có thể sử dụng mọi nơi.
