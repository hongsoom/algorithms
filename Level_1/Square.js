/* n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
    ex) 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴
*/ 

function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n) // 제곱근
    if(Number.isInteger(x))  // 또는 if(x % 1 === 0) 
        answer = (x+1)*(x+1)
    else
        answer = -1
    return answer;
}
/* Number.inInteger() : 파라미터로 입력받은 값이 정수인지 판단
    정수 %  == 0 : 정수는 1로 나누었을 경우 항상 나머지가 0이 됨
    Math.sqrt() : 매개변수 값의 제곱근을 구하는 메소드
*/