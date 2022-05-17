/* 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
1. 정수 배열 numbers에 없는 숫자 찾기 : 문자열 찾는 함수 사용 
    -> 배열에 있는 모든 숫자 확인 : 반복문 for문 사용
2. 정수 배열 numbers에 길이가 9보다 작은거 인지 
    -> 반복문 for문 돌릴 때 length를 많이 쓰지만 여기선 x
*/

function solution(numbers) {
    let answer = 0;
  
    for (let i = 0; i < 10; i++) { 
      if(!numbers.includes(i)){ // i값이 없을 때 true
          answer += i           // 특정 값을 찾는게 아니라 없는 값을 찾아서 누적합
      }
    }
    return answer
  }

// includes() : 배열이 특정 요소를 포함하고 있는지 판별하는 함수
//               boolean로 반환

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 
//                  하나의 결과값을 반환
// 리듀서 함수는 네 개의 인자를 가짐
// 누산기 (acc), 현재 값 (cur), 현재 인덱스 (idx), 원본 배열 (src)

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
