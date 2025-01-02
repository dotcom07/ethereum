import BlockData from "./BlockData";

export default class BlockChainAdd {
  constructor() {
    const genesisBlock = new BlockData("hello");
    this.chain = [genesisBlock];
  }

  // TODO: 제네시스 블록의 뒤에 새로운 블록이 오도록 함수를 작성해주세요.
  addBlock(block) {
    this.chain.push(block);
  }
}
