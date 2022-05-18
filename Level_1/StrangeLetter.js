/* 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수
    ex) "try hello world" -> "TrY HeLlO WoRlD"
*/

function solution(s) {
    let answer = "";
    let a = s.split(" ")
    for(let i =0; i < a.length; i++) {
        for(let j = 0; j <a[i].length; j++) {
            if(j % 2 == 0) {
                answer += a[i][j].toUpperCase()
            }else{
                answer += a[i][j].toLowerCase()
            }
        }
    answer += " "; // 단어가 끝날 때 마다 띄어쓰기
    } 
    return answer.slice(0,-1); // 마지막 단어가 끝나도 띄어쓰기가 있으므로 
                               // slice로 마지막 띄어쓰기 지워줌
}

function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// join() : 배열의 모든 요소를 연결해 하나의 문자열로 만들어줌
/*
    s.split(' ')  -> 	[ 'try', 'hello', 'world' ]
    i.split('')   -> [
                        't', 'r', 'y', ' ',
                        'h', 'e', 'l', 'l',
                        'o', ' ', 'w', 'o',
                        'r', 'l', 'd'
                    ]   
    TIP : 단어별로(separator=" "), 글자별로(separator="")                 
   j : 배열의 요소
   key : 현재 배열 요소의 index
   
    join을 안하면  -> [["T","r","Y"],["H","e","L","l","O"],["W","o","R","l","D"]]
    .join('') -> ["TrY","HeLlO","WoRlD"]
    .join(' ') -> "TrY HeLlO WoRlD"
    만약 .join('')을 한다면 "TrYHeLlOWoRlD"
*/


