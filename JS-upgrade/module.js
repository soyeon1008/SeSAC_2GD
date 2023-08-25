/* 1. export default키워드를 앞에 붙이거나 */
// export default function sayHi() {
//   console.log("export default 사용");
// }

function sayHi() {
  console.log("export default 사용");
}
/* 함수/ 클래스 선언이 모두 끝난 후에 따로 보내도 돼요. */
export default sayHi;

// (주의!) export default 키워드로 함수 표현식은 내보낼 수 없습니다.
// export default sayHi2 = () => {
//   console.log("함수 표현식은 안돼요");
// };
