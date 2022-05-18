/* 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
    완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
                    완주하지 못한 선수의 이름을 return 
제한) 1. completion의 길이는 participant의 길이보다 1 작습니다.
      2. 참가자 중에는 동명이인이 있을 수 있습니다.
*/

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    } 
}
/* sort() : 매개변수에 아무것도 안넣으면 문자열로 변환하고 유니코드포인트 순서로
            문자열을 비교하여 정렬! 다만 숫자만 조심해야함 숫자는 달라!
    -> 배열의 index값으로 비교하는데 선수들 이름이 뒤죽박죽 섞여 있어 배열들을 정렬
*/