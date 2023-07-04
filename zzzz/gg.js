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

// helloworld 3번찍기
// for(초기식; 조건식; 증감식) {
// 반복할 문장 }
for (let i = 0; i <= 2; i++) {
  console.log("helloWorld" + i);
}

for (let index = 0; index; index++) {}

// 1부터 10까지 출력하기
for (i = 1; i <= 10; i++) {
  console.log(i);
}

//10000까지의 숫자중에서
// 13의 배수이면서
// 홀수인 숫자

// for (초기식; 조건식; 증감식) {
// 반복할문장
// }

for (i = 13; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log("연습" + i);
  }
}

// 1부터 10까지 더하기
for (let sum; i < 11; i++) {
  console;
}
