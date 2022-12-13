// 최대힙 MaxHeap

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2); // 부모 idx 찾는 방법
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item); // maxheap 기준 맨 마지막 큐에 push
  let curIdx = heap.length - 1; // 현재 idx 
  let pIdx = getParentIdx(curIdx); // 부모 idx 
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) { // heap[pIdx] > heap[curIdx] 면 노드가 정리가 완료라서 반복문 종료 
    swap(curIdx, pIdx, heap); // 부모idx와 curidx와 비교해서 큰 걸로 바꿔준다
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};