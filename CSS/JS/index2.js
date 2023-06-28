console.log("안녕하세요");
// alert("안녕하세요!");
// confirm("js 재밌지 않나요?");
// prompt("당신의 이름은?");

/* 1. 문자열 , String */
let myName = "진형";
let mycity = "부산";
console.log(myName);
// 내 이름은 진형이고요, 사는 곳은 seoul이예요.
console.log("내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요");
console.log("내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이예요");
console.log(`내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`);

let myInfo1 = "내 이름은 " + myName + "이고요, 사는 곳은 " + mycity + "이예요";
let myInfo2 = `내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`;
// let myIfo3="내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요"
// > 쉼표를 이용해서 문자열을 연결하는 것은 안됩니다!
console.log(myInfo1);
console.log(myInfo2);

/* 2. Number */
// 연산 가능
let num1 = 100;
let num2 = 3.14;
console.log(num1 + num2);
console.log(myName + num1); // 숫자와 문자열의 덧셈 = 숫자가 문자열 취급되어 연결됨
console.log(myName - num1); // 숫자와 문자열의 뺄셈 = NaN(Not a Number)

/* 3. Boolean */
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

/* 4. undefined & null*/
let undef;
console.log(undef);

let empty = null;
console.log(empty);

/* 5. Array 배열*/
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

// 이차원 배열, 배열 안에 배열이 있는 형태
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];
console.log(kr[0][1]);
console.log(kr[2][2]);
const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

/* 6. Object */
// 베열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
};

console.log(cat);
// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
// 대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);
cat["gender"] = "F";
cat["parents"] = ["mom", "dad"];
console.log(cat.parents[0]);

console.log("-----typeof-----");

let und;
console.log(typeof "문자");
console.log(typeof 245);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});
// 형변환
// let likeNum = prompt("가장 좋아하는 숫자는?");
// likeNum = Number(likeNum);
// console.log(likeNum + 10);
// 1. >> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

// 2. >> 숫자
let n1 = true; //boolean
let n2 = false; //boolean
let n4 = "3.14"; //string

console.log(Number(n1)); //true -> 1
console.log(Number(n2)); //false -> 0

console.log(typeof Number(n4)); //3.14
console.log(Number(n4)); //3.14
console.log(typeof parseInt(n4));
console.log(parseInt(n4));
let n5 = parseInt(n4);

console.log(typeof 1 + "isn't" + typeof "안뇽" + "datatype.");
console.log(
  "typeof를 bootlean이나 null에 사용하면" +
    typeof null +
    "결과를 얻을 수 있습니다."
);

// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");
// let avg = (mathScore + engScore) / 2;
// console.log(avg);

let mathScore = prompt("수학점수를 입력하세요");
let engScore = prompt("영어점수를 입력해주세요");
// let avg = (mathScore + engScore) / 2;
// console.log(avg);
mathScore = Number(mathScore);
engScore = Number(engScore);
let avg = (mathScore + engScore) / 2;
console.log(avg);

// console.log(typeof mathScore);
// console.log(Number(mathScore));
// console.log(Number(engScore));

// avg = (mathScore + engScore)
