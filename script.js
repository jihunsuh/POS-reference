let data = [
  { name: "민트초코 라떼", sub: ["휘핑", "얼음"], price: 6500 },
  { name: "카페 아메리카노", sub: ["휘핑", "얼음"], price: 8500 },
  { name: "카라멜 마끼아또", sub: ["휘핑", "얼음"], price: 4500 },
  { name: "에스프레소", sub: ["휘핑", "얼음"], price: 4500 },
  { name: "오트밀 라떼", sub: ["휘핑", "얼음"], price: 5000 },
  { name: "모카 프라푸치노", sub: ["휘핑", "얼음"], price: 7500 },
  { name: "제주 말차 라떼", sub: ["휘핑", "얼음"], price: 4000 },
  { name: "애플망고 요거트", sub: ["휘핑", "얼음"], price: 8000 },
  { name: "망고 블렌디드", sub: ["휘핑", "얼음"], price: 6700 },
  { name: "쿨 라임 피지오", sub: ["휘핑", "얼음"], price: 6000 },
  { name: "애플 블랙 티", sub: ["휘핑", "얼음"], price: 5000 },
  { name: "고구마 라떼", sub: ["휘핑", "얼음"], price: 9500 },
  { name: "차이 티", sub: ["휘핑", "얼음"], price: 5000 },
  { name: "캐모마일 티", sub: ["휘핑", "얼음"], price: 5000 },
  { name: "얼 그레이 티", sub: ["휘핑", "얼음"], price: 5000 },
  { name: "초코 라떼", sub: ["휘핑", "얼음"], price: 7500 },
  { name: "딸기 라떼", sub: ["휘핑", "얼음"], price: 6700 },
  { name: "파인애플 라떼", sub: ["휘핑", "얼음"], price: 8000 },
  { name: "포도 라떼", sub: ["휘핑", "얼음"], price: 6900 },
  { name: "자몽 라떼", sub: ["휘핑", "얼음"], price: 5500 },
  { name: "두리안 라떼", sub: ["휘핑", "얼음"], price: 5500 },
];

let menu = {
  orderList: [],
  print: function() {
    let selector = document.getElementById("h9").querySelector("ul");
    selector.innerHTML = "";

    let totalPrice = 0;

    this.orderList.forEach((el, i) => {
      totalPrice += el.amount * el.price;

      let li = document.createElement("li");
      li.textContent = el.name;

      let amt = document.createElement("div");
      amt.textContent = el.amount;
      amt.classList.add("amount");
      amt.onclick = (e) => e.stopPropagation();

      let decamt = document.createElement("div");
      decamt.textContent = "-";
      decamt.classList.add("decrease");
      decamt.onclick = function(e) {
        e.stopPropagation();
        this.decrease(i);
        this.print();
      }.bind(this);

      let incamt = document.createElement("div");
      incamt.textContent = "+";
      incamt.classList.add("increase");
      incamt.onclick = function(e) {
        e.stopPropagation();
        this.increase(i);
        this.print();
      }.bind(this);

      li.append(decamt, amt, incamt);

      li.onclick = function() {
        this.remove(i);
        this.print();
      }.bind(this);

      selector.appendChild(li);
    });

    document.getElementById("totalPrice").innerText = totalPrice;

    return this;
  },
  add: function(item, price) {
    for (let i = 0; i < this.orderList.length; i++) {
      if (this.orderList[i].name === item) {
        this.orderList[i].amount++;
        return this;
      }
    }
    this.orderList.push({
      name: item,
      amount: 1,
      price,
    });
    return this;
  },
  remove: function(i) {
    this.orderList.splice(i, 1);
    return this;
  },
  increase: function(i) {
    this.orderList[i].amount++;
    return this;
  },
  decrease: function(i) {
    this.orderList[i].amount--;
    if (this.orderList[i].amount <= 0) {
      this.orderList.splice(i, 1);
    }
    return this;
  },
};

for (let i = 0; i < data.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = data[i].name + "<br/>" + data[i].price;

  li.onclick = function(e) {
    e.preventDefault();
    menu.add(data[i].name, data[i].price).print();
  };

  document
    .getElementById("menu")
    .querySelector("ul")
    .appendChild(li);
}
document.getElementById("h1").onclick = (e) => {
  e.preventDefault();
  menu.orderList = [];
  menu.print();
};
