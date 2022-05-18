/* 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
    ex) n이 12345이면 [5,4,3,2,1]을 리턴
*/

function solution(n) {
    let answer = [];
    let q = String(n).split("").reverse() // [ '5', '4', '3', '2', '1' ]
    
    for(let i =0; i < q.length; i++) {
        answer.push(Number(q[i]))
    }
    return answer;
}
/* reverse() : 배열의 순서를 반전시킴
   String() : 숫자를 문자열로 변환
   split() :  String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 : ""는 글자마다 배열로
   Number() : 문자열 -> 숫자 
   push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
*/

function solution(n) {
    return n.toString().split('').reverse().map(val => parseInt(val));
    return (n+"").split("").reverse().map(n => parseInt(n));
}
/*  toString() : 숫자를 문자열로 변환
    split() :  String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 : ""는 글자마다 배열로
    reverse() : 배열의 순서를 반전시킴
    map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    parseInt() : 문자열 -> 숫자 
    (n + " ") : 가산연산자를 쓰면 문자 + 숫자일 경우, 문자열 타입으로 반환
*/

function solution(n) {
    let answer = [];
    let a = String(n).split("");
    for(i=0; i<a.length; i++) {
    	answer.push(parseInt(a[i]));
    }
    answer = answer.reverse();
    return answer;
}

function solution(n) {
    let arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
