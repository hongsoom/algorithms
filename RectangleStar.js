process.stdin.setEncoding('utf8'); // 표준입력으로 들어온 데이트를 utf8 방식으로 인코딩
process.stdin.on('data', data => { // 사용자가 키보드에서 Enter키를 눌렀을 때 발생하는 데이터 수신
    const n = data.split(" "); // 띄어쓰기 구분자로 여러개의 문자열을 배열로 나눔
    const a = Number(n[0]); // 문자 -> 숫자
    const b = Number(n[1]); 
    for(let i=1; i<=b; i++){ // 전체 반복되는 횟수 (세로)
        let str = ""
      for(let j=1; j<=a; j++){ // 찍어야되는 별의 수 만큼 반복(가로)
        str += "*";
      }
    console.log(str);
    }
});

// repeat() : 문자열을 주어진 횟수만큼 반복해 붙여서 새로운 문자열로 반환
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a); // *을 a번 반복
    for(var i = 0; i < b; i++) { // row을 b번 반복
        console.log(row);    
    }    
});
