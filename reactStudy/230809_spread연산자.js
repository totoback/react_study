//spread연산자
const cookie = {
  base: "cookie",
  madeIn: "korea",
};
//객체의 값을 새로운 객체에 펼쳐주는 역할

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const redCookie = {
  ...cookie,
  toping: "red",
};

console.log(chocochipCookie)
console.log(blueberryCookie)
console.log(redCookie)

//배열에서도 사용
const noTopingCookies = ['촉촉한쿠키','안촉촉하쿠키']
const topingCookies = ['바나나쿠키','블루베리쿠키','딸기쿠키']

const allCookies = [...noTopingCookies,...topingCookies]
console.log(allCookies)