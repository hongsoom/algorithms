/* 내적 : 두 수열의 해당 항목의 곱의 합
    a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
*/

function solution(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++) {
        answer += a[i]*b[i];
    }
    return answer;
}

function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

/* reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
    arr.reduce(callback[, initialValue])
        accumulator - callback함수의 반환값을 누적
        currentValue - 배열의 현재 요소
        index(Optional) - 배열의 현재 요소의 인덱스
        array(Optional) - 호출한 배열
*/