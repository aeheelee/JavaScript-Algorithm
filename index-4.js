/**
 * 4.
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 함수를 작성해주세요.
 */

function solution4(num) {
  // to do ...
  let isNumber = num;
  let beforeNumber = [];

  for (let i = 0; i <= isNumber; i++) {
    beforeNumber.push(i);
  }

  const sum = beforeNumber.reduce((a, b) => a + b);

  return sum;

  // 이 방식으로도 가능
  // let result = null;

  // for(let i = 0; i <= num; i++) {
  //   result += i;
  // }

  // return result;
}

console.log(solution4(6)); // 21
