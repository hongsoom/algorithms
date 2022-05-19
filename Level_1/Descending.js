/* 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수 리턴
    -> 정수 내림차순으로 배치하기
    ex) n = 118372 -> 873211 리턴

    숫자 -> 문자열 -> 배열 -> 내림차순 -> 문자열 -> 숫자
*/

function solution(n) {
    let answer = 0;
    let a = String(n).split("")
    answer = Number(a.sort((a,b) => b - a).join(''));
    return answer;
}
/*  String() : 숫자 -> 문자열     〉	118372
    split() -> 문자열을 구분자를 통해 배열로 만들어줌
		[ '1', '1', '8', '3', '7', '2' ]
    sort((a,b) => b - a -> 배열을 내림차순 정렬 [ '8', '7', '3', '2', '1', '1' ]
    join() -> 배열의 모든 요소를 연결해 하나의 문자열로 만들어줌 '873211'
    Number() -> 문자열 -> 숫자  873211
*/
function solution(n) {
    return parseInt((n+"").split("").sort().reverse().join(""));
    return (n+"").split('').sort((a,b)=>b-a).join('');
}

function solution(n) {
    let answer = 0;
    let a = String(n).split("")
    console.log(a)
    answer = parseInt(a.sort((a,b) => b - a).join(''));
    return answer;
}

function solution(n) {
    let nums =[];
    do{
        nums.push(n%10); // 2 -> 7 -> 3 -> 8 -> 1 -> 1
        n=Math.floor(n/10); // 11837 -> 1183 -> 118 -> 11 -> 1 -> 0 
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;
}