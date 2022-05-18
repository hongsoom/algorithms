/*  s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 
    p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
    개수를 비교할 때 대문자와 소문자는 구별하지 x

    1. 특정 문자열을 찾는 메소드
	2. 특정 문자열을 찾았으면 개수를 구하기 (length)
	3. 개수가 같으면 true, 다르거나 하나도 없으면 fals (조건문 if)

	-> 개수를 어떤 방식으로 구할 것인지? 문자열을 먼저 찾고 그다음에 개수를 구하자!
*/

function solution(s){ // ex) "pPoooyY"
    s = s.toLowerCase();
    let a = s.split('p').length; // [ '', '', 'oooyy' ]
    let b = s.split('y').length; // [ 'ppooo', '', '' ]
    if ( a == b) {
        return true;
    } else {
        return false;
    }
}

function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
  }
/* match() : 특정 텍스트 안에 검색할 단어, 찾고싶은 단어가 있는 경우
     해당 텍스트가 문구에 포함되어 있는지 확인할 수 o 
    또한 단어뿐만 아니라 정규표현식을 사용하여 특정 패턴을 검색하는 것 역시 가능
  구문 : 해당 문자열.match('찾을 단어')
  TIP : indexOf()의 경우 위치값을 index로 반환하기 때문에
   위치확인을 위한 방법등의 간단한 기능 구현에 사용되는 방법

/* 정규표현식의 플래그 : 
    표현식의 옵션으로 표현식으로 검색하려는 문자 패턴에 추가적인 옵션을 넣어 원하는 문자 검색 결과 반환

    g : 모든 문자와 여러 줄 일치 = 모든 문자를 검색하겠다
    i : 영어 대소문자를 구분 않고 일치
 
*/