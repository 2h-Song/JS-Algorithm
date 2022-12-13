function divisors(num) {
    let count = 0;
    
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            count++; // 약수 개수 카운트
        }
    }
    
    return count;
}

function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        let count = divisors(i);           // 약수의 개수 
        if (count % 2 === 0) { // 약수의 개수가 짝수면
            answer += i;
        } else {
            answer -= i;
        }      
    }   
    
    return answer;
}

// function을 2개를 나눠주는 것을 고려해야함
// 약수의 개수 카운트를 설정해줘야함
