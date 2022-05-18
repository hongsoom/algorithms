/* String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환
    "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없고 반드시 seoul 안에 포함
        -> 반복문for문을 돌면서 어디에 있는지 찾아볼 필요가 없다.
    -> Kim"이라는 문자열이 있는지 찾아보고 index를 반환해주는 메소드를 찾아야 하는 문제
*/

function solution(seoul) {
    let num = seoul.indexOf("Kim");
    let answer = "김서방은 " + num + "에 있다"
    return answer;
}
/* indexOf(searchValue) : 
        호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
        일치하는 값이 없으면 -1을 반환
    ->  searchValue(문자열)의 첫 번째 등장 인덱스. 찾을 수 없으면 -1.
ex) 배열 let arr = ['one', 'two', 'three'];
        arr.indexOf('two'); // 1
    문자열 let str = 'My name is pro-self-studier.';
            str.indexOf('self'); // 15 : 공백포함
 TIP : indexOf 메서드는 대소문자를 구분한다는 것
*/

function findKim(seoul){
    let idx = 0;

      for (var i = 0; i < seoul.length; ++i)
    {
      if (seoul[i] == "Kim")
      {
          idx = i;
        break;
      }
    }
    return "김서방은 " + idx + "에 있다";
  }