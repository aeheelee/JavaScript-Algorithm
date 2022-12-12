/**
 * 5.
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 함수를 작성해주세요.
 */

function solution5(arr) {
  // to do ...
  let numberDefault = arr[0]; // 첫번째 값을 index로 설정

  // for 문을 돌면서 값을 numberDefault과 비교해 적은 수를 numberDefault에 대입한다.
  for (let i = 0; i < 7; i++) {
    if (arr[i] < numberDefault) {
      numberDefault = arr[i];
    }
  }

  return numberDefault;
}

const arr = [5, 3, 7, 11, 2, 16, 17];
console.log(solution5(arr)); // 2
