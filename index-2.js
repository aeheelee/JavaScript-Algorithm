/**
 * 2.
 * 길이가 서로 다른 a, b, c, 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력합니다.
 */

function solution2(a, b, c) {
  // to do ...
  let number = [a, b, c]; // 값 가져오기
  let numberDefault = number[0]; // 첫번째 값을 index로 설정

  for (let i = 0; i < 3; i++) {
    if (number[i] > numberDefault) {
      numberDefault = number[i];
    }
  }

  // 가장 높은 값 index 구하기
  const numberIndex = number.indexOf(numberDefault);
  // 가장 높은 값 index 배열에서 삭제
  number.splice(numberIndex, 1);
  // 남은 배열 더하기
  const sum = number.reduce((a, b) => a + b);

  /* sort함수로도 가능
  number.sort(function(x, y) {
    return y - x;
  });
  */

  // 제일 큰 변의 길이를 제외한 나머지 2변의 길이의 합이 같거나 높아야한다.
  return sum >= numberDefault ? "YES" : "NO";
}

console.log(solution2(6, 7, 11)); // YES
