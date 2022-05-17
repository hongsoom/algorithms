/* 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로
    놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return

    1. price는 고정된 값 count수 만큼 price에 곱해줘야함 (반복문 for문)
	2. 얼마가 모자라는지 구현하는 문제 단, 조건은 금액이 부족하지 않으면 0 (조건문 if문)
*/

function solution(price, money, count) {
    let answer = 0;
    let total = 0;
    
    for(let i=1; i<=count; i++) {
      total += (price * i);
    }
    
    if(total > money) {
      answer = total - money;
    } else {
      return 0;
    }
    
    return answer;
}

function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}

function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money; // 1 ~ x까지의 합 n * (n + 1) / 2
    return tmp > 0 ? tmp : 0;
}