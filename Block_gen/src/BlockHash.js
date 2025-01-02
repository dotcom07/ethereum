import sha256 from "crypto-js/sha256";

export default class BlockHash {
  // TODO: 이전 블록의 해시값을 저장하기 위한 previousHash 속성을 추가해주세요.
  constructor(data) {
    this.data = data;
    this.previousHash = "";
  }

  // TODO: data의 값과 previousHash 속성의 값을 더해서 해시값을 만들어 반환해주세요.
  toHash() {
    if (this.previousHash === "") {
      const hash = sha256(this.data);
      return hash;
    }
    const hash = sha256(this.data + this.previousHash);
    return hash;
  }
}
