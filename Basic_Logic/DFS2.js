const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  function gossipProtocol(village, row, col){
    let q = [];
    let dx = [0,1,0,-1];
    let dy =  [1,0,-1,0];
    let time = 0;
  
    village = village.map(e=>[].concat(e.split('')));
    // [0,1,0,1][0,x,x,x][...]... 식으로 묶어버렸음 행렬로
    
    q.push([row,col,0]); // 초기값 0은 day값 
    village[row][col]= '0'; // 초기 village는 0으로 설정해준다. 
  
    const isInScope = (x,y) => {
      return (x >= 0 && x < village.length && y >= 0 && y < village[0].length )
    }
    // 범위함수를 따로 지정 
    // 위에 라인은 bfs를 위한 초기 설정 

    while(q.length){
      let [x,y,cnt] = q.shift();
      if(cnt>time) time = cnt; // cnt > time 이 되면 time = cnt 
      // 즉 time은 어차피 0 이고 cnt는 증가함
      
      for(let i=0;i<4;i++){
        let nextx= x + dx[i];
        let nexty= y + dy[i];
        if(isInScope(nextx,nexty)&&village[nextx][nexty]==='1'){
            // 상하좌우 부분과 village[x][y] 가 1이라면 
          q.push([nextx,nexty,cnt+1]);  // q에 추가하고 cnt증가하고
          village[nextx][nexty] = '0'; // 다시 원래 있던 부분은 0으로 바꾼다
        }
      }
    }
  
    return time;
  }
  