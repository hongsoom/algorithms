/* 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
    숫자만 있으면 true, 문자 있으면 false

    1. 문자열의 길이가 4 혹은 6이니까 or 연산자 사용
    2. 숫자로만 구성 : 문자열이 숫자인지 확인할 수 있는 메소드
    3. 조건문 if문 
*/

function solution(s) {
    if(s.length == 4 || s.length == 6)  {
        if(s.includes('e')) return false;
        return !isNaN(s);
    } else return false;
}
/* 자바스크립트에서 지수 e = 숫자 이지만, 우리는 숫자로만 구성된 것을 찾아야하기 때문에 e는 문자열로 처리해줘야한다.
    includes() : 배열이 특정 요소를 포함하고 있는지 판별하는 함수
		            반환 값은 boolean로 반환 (true/false)
*/

function solution(s) {
    if(s.length == 4 || s.length == 6)  {
        return s.split('').every(s => !isNaN(s)); 
    } return false; // 조건문의 false 
}
/* every() : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 
             Boolean 값을 반환 -> 판별 함수가 통과하면 true 통과 못하면 false
  s.split('').every(s => !isNaN(s)); -> 
  split() 메소드를 통해 배열 s의 요소들을 하나하나로 배열로 만든 후
  every() 메소드로 모든 요소가 주어진 조건을 통과하면 true, 그렇지 않으면 false로 반환
*/
/* isNaN() : 매개변수가 숫자인지 검사하는 함수
            숫자가 아닐 때 true이고 숫자이면 false를 반환
    우리는 숫자로만 구성된 것을 찾아야 하기 때문에 isNaN앞에 ! 부정을 써줌
*/