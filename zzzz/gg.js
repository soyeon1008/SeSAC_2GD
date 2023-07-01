console.log(typeof 1 + "isn't" + typeof "문자" + "data type.");
console.log(
  "typeof를 Array이나 null에 사용하면," +
    typeof null +
    "결과를 얻을 수 있습니다."
);

let mathScore = prompt("수학점수를 입력하세요");
let engScore = prompt("영어점수를 입력하세요");
mathScore = Number(mathScore);
engScore = Number(engScore);

// console.log(Number(mathScore));
// console.log(Number(engScore));

let avg = (mathScore + engScore) / 2;
console.log(avg);
