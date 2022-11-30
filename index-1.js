/**
 * 1.
 * 100이하의 자연수 a, b, c를 입력받아 세 수 중 가장 작은 값을 출력하는 함수를 작성해주세요.
 * (정렬을 사용하면 안됩니다.)
 */

function solution1(a, b, c) {
  // to do ...
  let number = [a, b, c]; // 값 가져오기
  let numberDefault = number[0]; // 첫번째 값을 index로 설정

  // for 문을 돌면서 값을 numberDefault과 비교해 적은 수를 numberDefault에 대입한다.
  for (let i = 0; i < number.length; i++) {
    if (number[i] < numberDefault) {
      numberDefault = number[i];
    }
  }

  return numberDefault;
}

console.log(solution1(4, 7, 1)); // 1
