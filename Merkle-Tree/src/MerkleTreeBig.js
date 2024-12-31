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
}
