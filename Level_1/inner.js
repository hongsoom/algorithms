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