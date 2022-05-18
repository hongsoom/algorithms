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

/* reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
    arr.reduce(callback[, initialValue])
        accumulator - callback함수의 반환값을 누적
        currentValue - 배열의 현재 요소
        index(Optional) - 배열의 현재 요소의 인덱스
        array(Optional) - 호출한 배열
*/