/* 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
   1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
   2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
ex) 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 된다.
        위 작업을 몇 번이나 반복해야하는지 반환하는 함수
*/

function solution(num) {
    let answer = 0;
    while (num !== 1) { // num이 1이 아닐때 무한반복
        if(answer > 500) { //  500번을 반복해도 1이 되지 않는다면 –1을 반환
            return -1; 
        } else {
            num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
            answer ++; // 반복 횟수
        }
    }
    return answer;
}

function solution(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}