/* x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 = x의 배수들로 구성된 배열
    1. n개 만큼 출력  (반복문 for문)
	2. x씩 증가 ( 연산자 * )
	3. 그 값들을 배열에 push() 
*/

function solution(x, n) {
    let answer = [];
    
    for(i=1; i<=n; i++) { // x값부터 시작해야하기 때문에 i가 1부터 시작해야함
      answer.push(x*i);  // x * 0 = 0 이니까
    }
    return answer;
}

/* length를 쓰면안됨 여기서는 배열과 문자열이 입력값으로 들어오는게 아니라 자연수가 입력값으로 들어오기 때문에 사용 x
length : 배열의 길이를 알고자 할때 사용하는 메소드
length() : 문자열의 길이를 알고자 할 때 사용하는 메소드

push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
         매개변수 : 배열의 끝에 추가할 요소를 넣어야함
*/

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
/* Array(n).fill(x) : n개의 길이만큼의 배열을 x로 시작하는 값으로 채운다

    map() : 새로운 배열로 반환 
     구문 : 배열.map((요소, 인덱스, 배열) => { return 요소 });
          +1 : map뒤에 index는 0부터 시작하기 때문에
*/