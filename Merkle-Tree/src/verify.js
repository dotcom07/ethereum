/*
TODO: 아래의 조건을 만족하는 함수를 만들어주세요.

이 함수는 네 개의 매개변수를 가집니다.
// - proof - data와 left 속성을 가진 객체들의 배열입니다. (이전 실습에서 만든 proof)
// - node - 머클 트리 내에 있는지를 증명하려는 리프 노드입니다.
// - root - 유효한 머클 루트입니다.
// - concat - 리프 노드를 결합하는 데 사용되는 방법입니다.

node를 가져와서 proof에 제공된 모든 데이터와 결합하세요. 
proof의 각 데이터 항목을 순차적으로 node와 결합하여 루트를 계산합니다.
*/
export default function verify(proof, node, root, concat) {
  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      node = concat(proof[i].data, node);
    } else {
      node = concat(node, proof[i].data);
    }
  }

  if (node === root) {
    return true;
  } else {
    return false;
  }
}
