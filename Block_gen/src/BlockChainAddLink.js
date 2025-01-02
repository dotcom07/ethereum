// TODO: BlockHash 파일로 가서 먼저 코드를 작성해주세요.
import BlockHash from "./BlockHash";

export default class BlockChainAddLink {
  constructor() {
    const genesisBlock = new BlockHash("hello");
    this.chain = [genesisBlock];
    this.index = 0;
  }

  // TODO: 새로운 블록을 추가하기 전에 이전 블록의 해시값을 previousHash에 추가해주세요.
  addBlock(block) {
    const previousHash = this.chain[this.index++].toHash();
    block.previousHash = previousHash;
    this.chain.push(block);
  }
}
