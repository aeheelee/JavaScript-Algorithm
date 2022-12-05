/**
 * 3.
 * 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
 * N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 함수를 작성해주세요.
 */

function solution3(numbers) {
  // to do ...
  let result;
  const bundle = 12;
  const divided = parseInt(numbers / bundle);
  const remainder = numbers % bundle;

  /* 소수값을 올려 계산하는 방법으로도 가능
  Math.ceil(numbers / bundle);
  */

  result = divided + remainder;

  return result;
}

console.log(solution3(25)); // 3
