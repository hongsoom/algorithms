/* 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
    -> 2중 배열 = 2차원 배열 문제
    ex) arr1 = [[1,2],[2,3]] arr2 = [[3,4],[5,6]]
            arr1[0][0] + arr2[0][0] 
	        arr1[0][1] + arr2[0][1]
	        arr1[1][0] + arr2[1][0]
	        arr1[1][1] + arr2[1][1]
*/

function solution(arr1, arr2) {
    let answer = [[]];
    for(let i=0; i<arr1.length; i++){
      answer[i] = [];
      for(let j=0; j<arr1[i].length; j++) {
        answer[i].push(arr1[i][j] + arr2[i][j]);
      }
    }
    return answer;
}

function solution(arr1, arr2) {
return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}