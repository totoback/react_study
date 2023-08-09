//조건문 업그레이드
function isKoreanFood(food) {
  // if(food === "불고기" || food ==="비빔밥" || food === "떡볶이"){ //기본 적인 if문
  if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
    //조건문 업그레이드
    return true;
  }
  return false;
}
const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("짜장면");
console.log(food1);
console.log(food2);

const meal = {
  한식: "불고기",
  양식: "파스타",
  중식: "멘보샤",
  일식: "초밥",
  인도식: "카레",
};

const getMeal = (mealType) => {
  //원ㄹ ㅐ생각 하는 if문
  // if (mealType === "한식") return "불고기";
  // if (mealType === "양식") return "파스타";
  // if (mealType === "중식") return "멘보샤";
  // if (mealType === "일식") return "초밥";
  // return "굶기";

  //업그레이드
  return meal[mealType] || "굶기";
  // meal.한식 => "불고기"
  // meal["한식"] => "불고기"
};
console.log(getMeal("한식"));
console.log(getMeal());
