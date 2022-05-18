/* 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수
    배열이 빈 배열인 경우엔 배열에 -1 리턴
    ex)  arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 
*/

function solution(arr) {
    var answer = [];
    let arrMin = Math.min(...arr); 
    if (arr.length < 1) { // 빈 배열 이거나 비교할게 없을 때
        answer.push(-1)
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arrMin < arr[i]) { // 최소값과 배열 arr값들 비교! 최소값이 더 작으면 arr[i]값 배열에 push
                answer.push(arr[i])
            }
        }
    }
    return answer;
}
/*  Math.min() : 파라미터로 입력받은 숫자들 중 최소값을 구해서 리턴하는 함수 

Spread Operator(전개 연산자)는 ES6 문법으로
'...' 이렇게 점 3개로 표현하고,
객체나 배열의 원소들을 하나씩 꺼내어서 펼쳐서 리턴한다.

즉, Math.max(...arr)와 같이 작성해주면 실제로는
Math.max(1, 2, 3, 4, 5)와 같이 실행되게 됩니다.

*/