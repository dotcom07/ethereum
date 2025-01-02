import sha256 from "crypto-js/sha256";

export default class BlockData {
  // TODO 1
  // BlockData 클래스에 data를 인자로 받는 생성자(constructor)를 추가해주세요.
  // 입력 받은 data는 this.data에 할당해주세요.
  constructor(data) {
    this.data = data;
  }

  // TODO 2
  // 입력 받은 data를 해시값으로 변환한 뒤 반환해보세요.
  toHash() {
    const hash = sha256(this.data);
    return hash;
  }
}
