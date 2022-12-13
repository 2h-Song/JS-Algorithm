const LCS = function (str1, str2) {
    const M = str1.length;
    const N = str2.length;
    const memo = [];
    // 중복 계산을 방지하기 위해 left, right
    for (let i = 0; i < M + 1; i++) 
    memo.push(Array(N + 1).fill(-1));
  
    const compareOneByOne = (left, right, len) => {
        // DP 효율성 극대화 하는 지점 
      if (memo[left][right] !== -1) return memo[left][right];
  
      if (left === str1.length || right === str2.length) return 0;
      // LCS 찾기 실패 지점
  
      if (str1[left] === str2[right]) { // 양쪽에서 같은문자열 발견시 
        memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
        return memo[left][right];
      }
      
      // 일반적인 상황에서 양쪽에 각각 하나씩 진행해서 상황을 살핀다
      // Memorization을 이용하여 연산을 줄인다 
      memo[left][right] = Math.max(
        compareOneByOne(left + 1, right, len), 
        compareOneByOne(left, right + 1, len)
      );
      return memo[left][right];
    };
  
    return compareOneByOne(0, 0, 0);
  };

  let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')