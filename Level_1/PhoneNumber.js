/*
마지막 4자리만 빼고 ‘*’로 변경
	1. 문자열의 길이를 알아야함 (length)
	2. 뒤에서부터 문자열을 읽을 수 있는 메소드 (substring(), slice())
	3. 문자열을 변경할 수 있는 메소드 (replace())
*/
function solution(phone_number) {
    let answer = '';
    answer = '*'.repeat(phone_number.length-4) + phone_number.slice(-4);
    return answer;
}

function solution(phone_number) {
	let answer = '';
	let len = phone_number.length-4;
    answer = '*'.repeat(len) + phone_number.substring(len);
    return answer;
}

/* substring(‘시작위치’, ‘종료위치’) or substring(‘시작위치’) : 시작위치에서 종료위치-1 까지 문자열을 자른다
 ex) substring(2, 6) -> ‘스크립트‘
        0  1  2  3  4  5
        자 바 스 크 립 트
    인자에 음수(-)가 들어갈 경우, 해당 값은 ’0‘으로 치환
	또는 종료위치에 음수(-) or 0이 들어갈 경우, 두개의 인수가 뒤바뀜
    ex) substring(2, -1) = substring(0, 2)

    slice(‘시작위치’, ‘종료위치’) or slice('시작위치’) :substring()과 동일 
    다른점은 음수(-)를 자유롭게 사용할 수 있어서 뒤에서부터 문자열을 자를 때 유용하게 사용 가능
 ex) slice(-4, 5) -> ‘스크립‘         slice(-4) -> ’스크립트’
            0  1  2  3  4  5
            자 바 스 크 립 트
            -6 -5 -4 -3 -2 -1

    -> 보통 앞에서 문자열을 자른다면 substring으로 충분하지만 
    뒤에서부터 자르고 싶은 경우에는 slice함수가 효율적임
*/
// repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환

function solution(phone_number) {
    let len = phone_number.length - 4;

    for (let i = 0; i < len; i++) { // 뒤에 4자리를 뺀 수만 ‘*’로 문자열을 바꿈
       phone_number = phone_number.replace(/\d/, '*'); // \d : 숫자와 일치하는 것만 매치
    }
    
    return phone_number;
}

function solution(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

/* replace() : 특정문자를 다른 문자로 치환할 때 많이 사용하며 
                바꿀 문자열을 직접 입력하거나 또는 정규표현식으로 사용할 수 있음
 구문 : str_text.replace("찾을 문자열", "변경할 문자열")
*/

function solution(phone_number) {
    let answer = '';
    for(i=0; i<phone_number.length; i++){
      if(i >= phone_number.length -4) {
        answer += phone_number[i];
      } else {
        answer += "*";
      }
    }
    return answer;

}