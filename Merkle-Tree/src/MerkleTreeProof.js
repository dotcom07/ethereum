export default class MerkleTreeBig {
  /*
  TODO: 다음의 조건을 만족하는 생성자를 만들어주세요.
  - 생성자의 첫번째 인자는 리프 노드들로 구성된 배열을 받습니다.
  - 생성자의 두번째 인자는 두 노드를 결합하고 해시하는 함수를 받습니다.
  - root 속성에 트리의 루트 노드를 할당해주세요.
  - leaves 속성에는 입력 받은 leaves 배열을 할당해주세요.
  - hash 속성에는 입력 받은 concat 함수를 할당해주세요.
  */
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.hash = concat;
    this.tree = [];
    this.root = this.getRootact(this.leaves);
  }

  /*
  TODO: 다음의 조건을 만족하는 함수를 만들어주세요.
  - 트리의 루트 노드를 찾아주는 함수입니다.
  */
  getRootact(level) {
    const nextLevel = [];
    if (level.length < 1) {
      console.log("there is no root node");
    }

    this.tree.push(level);

    if (level.length === 1) {
      return level[0];
    }
    for (let i = 0; i < level.length; i += 2) {
      const left = level[i];
      const right = level[i + 1];

      if (right) {
        nextLevel.push(this.hash(left, right));
      } else {
        nextLevel.push(left);
      }
    }
    return this.getRootact(nextLevel);
  }

  getRoot() {
    return this.root;
  }
  /*
  TODO: 리프 노드의 인덱스를 받아서 proof를 반환합니다.
  증명은 해시를 나타내는 data 속성과 해시가 왼쪽에 있는지를 나타내는 left 속성을 가진 객체들의 배열이 됩니다.
  (예시)
  [
  { data: 'D', left: false },
  { data: 'AB', left: true },
  { data: 'E', left: false }
  ]
  */
  getProof(i) {
    let index = i;
    const proof = [];
    for (let level = 0; level < this.tree.length - 1; level++) {
      const datalevel = this.tree[level];
      const isLeft = index % 2 === 0;
      let dataindex = isLeft ? index + 1 : index - 1;

      if (dataindex < datalevel.length) {
        proof.push({
          data: datalevel[dataindex],
          left: !isLeft,
        });
      }
      console.log("proof : \n");
      console.log("----\n");
      console.log(index);
      console.log("----------\n");
      console.log(proof);
      console.log("\n");

      index = Math.floor(index / 2);
    }
    return proof;
  }
}
