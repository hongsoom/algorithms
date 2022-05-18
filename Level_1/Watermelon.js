/* 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴
     예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴
*/

function solution(n) {
    let answer = '';
    let a = ['수', '박'] // '수’의 index = 0, '박‘의 index = 1
    
    for (let i = 0; i < n; i++) {
        answer += a[i%2] // index값에 짝수일 때 ’수‘ 홀수일 때 ’박‘이 나오게 하기 위해
    }
    return answer;
}

function solution(n) {
    return "수박".repeat(n).substring(0,n)
}
/*  substring(start, end) : 특정 문자열을 잘라내여 반환
        start값은 필수이며, end 값이 지정되지 않으면 문자열의 끝까지를 의미
    
    n이 3일때 "수박".repeat(n) -> 수박수박수박
    수박수박수박.substirng(0, n) -> 수박수
*/

const solution = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}
/* repeat() 매개변수는 0과 양의 무한대 사이의 정수, 최대 문자열 크기를 넘어선 안됨.
    ex) 'abc'.repeat(3.5);  // 'abcabcabc' 
        -> 카운트가 정수로 변환
*/
const waterMelon = n => "수박".repeat(n).slice(0,n);
/* slice()는 substring()과 사용법이 같다.
    
    1.파라미터로 전달되는 start > end 일 경우
    substring() : start 값과 end 값을 바꾸어서 처리 
        ex) substring(1, 0) -> substring(0, 1)로 처리 : string의 첫번째 글자 하나를 리턴
    slice() : 그냥 비어있는 string, 즉 ""을 리턴

    2. start 또는 end 값이 음수인 경우
    substring() : start값이 음수인 경우, start값은 0으로 취급
                end값이 음수인 경우에도, start값과 마찬가지로 end값은 0으로 취급
    slice() : string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급
                slice(-2, 6) => slice(4, 6)으로 계산
                 slice(0, -2) => slice(0, 4)으로 계산
*/

function solution(n) {
    let result = ""
    for(let i = 1; i<=n; i++){
        if(i % 2 === 0){
            result += "박"
        }else{
            result += "수"
        }
    }
    return result
}
