/* 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야
    ex) 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수
    -> 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수   
    arr	return
    10	true
    12	true
    11	false
    13	false
*/

function solution(x) {
    let answer = 0
    let a = String(x).split("");

    for(let i = 0; i < a.length; i++) {
        answer += Number(a[i])
    }

    return x % answer == 0 ? true : false
}

function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}
/* sum에 x을 10으로 나눈 나머지를 더하고
    x을 10으로 나눈 몫이 0보다 클 동안 반복한다.
    ex) 18 % 10 = 8 -> sum = 8
        18 / 10 = 1.8 -> Math.floor(1.8) = 1
*/