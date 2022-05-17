/* 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴
    1. SUN,MON,TUE,WED,THU,FRI,SAT을 가지고 있는 배열 만들기
	2. 실제 Date를 가져와야 하니 Date의 요일을 주는 메소드 (getDay())
	3. 내가 설정한 요일 배열과 실제 Date의 요일이 일치한지 확인 (if문, for문) 
*/

function solution(a, b) {
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let dat = new Date(2016, a-1, b).getDay();

    for (let i = 0; i < day.length; i++) { // i를 0부터 day배열길이 만큼 반복해서 dat과 비교
        if(i == dat){ 
            return day[i]
        }
    }
}

/* Date()라는 객체를 new라는 연산자를 사용하여 생성
   매개변수가 없으면 생성 순가의 날짜와 시간을 나타내는 객체
   매개변수가 있으면 모든 구성인 연, 월, 일, 시, 분, 초, 밀리초를 가진 객체

   월은 0부터 시작하기 때문에 -1를 꼭 줘야함
    ex) 5월 -> 컴퓨터에 5월 = 4

    getDay() : 요일을 반환, 반환값으로 숫자를 주는데 (0 : 일요일 ~ 6 : 토요일)
*/

