let value = Number(prompt("숫자를 입력해주세요"));
switch (value) {
  case 1:
  case 3:
    console.log("a는 홀수입니다");
    break;
  case 2:
  case 4:
    console.log("a는 짝수입니다");
    break;
  default:
    console.log("검사할 수 없습니다");
    break;
}

let number = 50;
if (number % 2 === 0) {
  console.log("짝수입니다");
} else {
  console.log("홀수입니다");
}

number % 2 === 0 ? console.log("짝수입니다") : console.log("홀수입니다");

for (let i = 0; i < 20; i = i + 2) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
