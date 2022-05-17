/* 정수를 담고 있는 배열 arr의 평균값
평균 : 모든 합 / 모든 숫자의 수 (여기선 길이)
	1. 정수 배열의 모든 합이 필요 (반복문 for문으로 모든 값 더함)
	2. 정수 배열의 길이 필요 (length)
*/

function solution(arr) {
    var answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i] 
    }
    return answer/ arr.length;
}

function average(array){
    return array.reduce((a, b) => a + b) / array.length;
  }