// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.floor((idx - 1) / 2);
  }
  
  function insert(heap, item) {
    // TODO: 여기에 코드를 작성합니다.
    heap.push(item);
    if (heap.length > 1) {
      let curIdx = heap.length - 1;
      let pIdx = getParentIdx(curIdx);
      while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
        swap(curIdx, pIdx, heap);
        curIdx = pIdx;
        pIdx = getParentIdx(curIdx);
      }
    }
    return heap;
  }
  
  function removeRoot(heap) {
    // TODO: 여기에 코드를 작성합니다.
    swap(0, heap.length - 1, heap); 
    // 맨 위 최소값을 0으로 지정해두고
    // 원래대로 최대힙으로 들어왔던 큐값을 반대로 넣어준다
    heap.pop();
    if (heap.length === 0) return [];
  
    let curIdx;
    let minIdx = 0;
    while (curIdx !== minIdx) {
      curIdx = minIdx;
      let left = curIdx * 2 + 1; // 왼쪽 자식 인덱스
      let right = curIdx * 2 + 2; // 오른쪽 자식 인덱스 
      if (left < heap.length && heap[left] < heap[minIdx]) {
        // 왼쪽자식인덱스가 벗어나거나
        // 자식 노드 중에 더 작은것이 있으면 minIdx로 바뀜
        minIdx = left;
      }
  
      if (right < heap.length && heap[right] < heap[minIdx]) {
        // rightIdx 중에 더 작은 노드가 있으면 minIdx로 바뀜
        minIdx = right;
      }
  
      swap(curIdx, minIdx, heap);
      // 현재 인덱스가 minIdx면 바꿔준다
    }
  
    return heap;
  }
  
  // 아래 코드는 수정하지 마세요.
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  
  const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    // TODO: 여기에 코드를 작성합니다.
    const sorted = [];
    while (minHeap.length > 0) {
      sorted.push(minHeap[0]); // Q를 순서대로 push
      minHeap = removeRoot(minHeap); // 맨 위에 있던 루트값을 지운것이 minHeap
    }
    return sorted;
  };