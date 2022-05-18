function solution(s) {
    let answer = '';
    
    let n = s.length;
    if (n % 2 == 1) {
        answer = s[Math.floor(n/2)] 
    } else {
        answer = s[n/2 -1] + s[n/2]  
    }
    return answer;
}
// Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수 반환
//                  소수값이 존재할 때 소수값을 버리는 역활을 하는 함수
// ex) 5 -> 5    0.9 -> 0    -7.4 -> -8

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
//                  소수값이 존재할 때 값을 올리는 역활을 하는 함수
// ex)  5 -> 5    0.9 -> 1    -7.4 -> -7

// substr() : 문자열에서 특정한 구간의 문자열을 추출하는 메소드