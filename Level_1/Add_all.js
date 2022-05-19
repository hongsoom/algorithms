/* 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return
    ex) N = 123이면 1 + 2 + 3 = 6을 return

    숫자 -> 문자열 -> 숫자
*/

function solution(n)
{
    let answer = 0;
    let num = n.toString() // 자연수 -> 문자열
    for(let i = 0; i < num.length; i++) {
        answer += parseInt(num[i]) // 문자열 -> 숫자
    }
    return answer;
}

function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}
// split() :  String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 : ""는 글자마다 배열로
// (n + " ") : 가산연산자를 쓰면 문자 + 숫자일 경우, 문자열 타입으로 반환
// parseInt(string, n) : 문자열을 정수로 바꾸는 함수
// toString() : 숫자를 문자열로 변환
/* reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
    arr.reduce(callback[, initialValue])
        accumulator - callback함수의 반환값을 누적
        currentValue - 배열의 현재 요소
        index(Optional) - 배열의 현재 요소의 인덱스
        array(Optional) - 호출한 배열
*/

function solution(n){
    let sum = 0;

    do {
        sum += n%10;  // 3 + 2 + 1
        n = Math.floor(n/10); // 123 -> 12 -> 1 -> 0
    } while(n > 0);

    return sum;
}
// Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환

function solution(n) {
    let arr = n.toString().split('');
    let sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}
// forEach() : 주어진 함수를 배열 요소 각각에 대해 실행

function solution(n)
{
    let answer = 0;
    String(n).split('').map(data => answer += parseInt(data));
    return answer;
}
// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환


