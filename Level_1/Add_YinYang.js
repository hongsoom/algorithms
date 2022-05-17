/* 절댓값을 차례대로 담은 정수 배열 absolutes
   이 정수들의 부호를 차례대로 담은 불리언 배열 signs
1. 정수들이 어떤 부호를 가지고 있는지 확인 필요
	1) 모든 정수들을 차례대로 확인 해야함 : 반복문 for문을 통해 정수 배열 absolutes 길이 만큼 반복하며 정수들을 차례대로 확인
	2) 정수들을 차례대로 반복하며 확인할 때, 조건문 if문을 사용하여 true 일때 양의 정수, false 일 때 음의 정수를 확인 함
	-> 이렇게 가능한 이유는 절대값과 부호들이 차례대로 담겨있음 
2. signs은 [true,false,true] 이렇게 담겨져있음 
*/

function solution(absolutes, signs) {
    let answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]  == true) { // 양수일때
            answer +=  absolutes[i]
        }
        else {                  // 음수일때
            answer -= absolutes[i]
        }
    }
    
    return answer;
}

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

function solution(absolutes, signs) {
    return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0)
}