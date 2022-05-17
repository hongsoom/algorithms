/* array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
    divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환

    1. 오름차순으로 배열 정렬할 수 있는 메소드 (sort())
	2. divisor 떨어지는 값을 배열에 push()
	3. divisor로 떨어지지 못하면 -1를 배열에 -> if문 사용
	-> divisor로 나눴을 때 나눈 값을 배열에 넣는게 아니라 딱 떨어지는배열의 원소를 넣는 것!	
*/
/* sort()
a,b 두 요소를 전달하고 a - b로 크기를 비교해서 양수인지, 음수인지, 0인지 봐준다.
a > b : 양수  ------------> b를 앞으로 내보냄
a = b : 0   --------------> 그대로 있음
a < ｂ : 음수 -----------> a를 앞으로 내보냄
*/

function solution(arr, divisor) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    if(answer.length == 0) { // divsior로 떨어지는 값만 배열에 넣었으니 배열에 아무값이 없는건 떨어지지 못한 것
            answer.push(-1) 
    }
    answer.sort((a,b) => a - b); // 배열을 오름차순 정렬하는 메소드
    return answer;
}

function solution(arr, divisor) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a - b); // 삼항연산자
}

function solution(arr, divisor) {
	let answer = arr.filter( (number) => number % divisor == 0);
	return answer.length == 0 ? [-1] : answer.sort((a,b) => a - b);
}

/* filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 메소드
                true를 반환하면 요소를 유지하고, false를 반환하면 버린다.
 ex) const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
     const result = words.filter(word => word.length > 6);
     console.log(result) -> ["exuberant", "destruction", "present"]
*/

function solution(arr, divisor) {
    let answer = [];
    arr.forEach((i) => {
        if (i % divisor == 0) answer.push(i);
    });
    return (answer.length == 0) ? [-1] : answer.sort((a,b) => (a-b));
}
/* forEach() : 주어진 함수를 배열 요소 각각에 대해 실행하는 메소드
                for문과 비슷하게 반복적인 기능을 수행할때 사용
                다른점은 for문처럼 index, 조건식을 정의하지 않아도 함수를 통해 기능을 수행할 수 있는 메소드
*/
