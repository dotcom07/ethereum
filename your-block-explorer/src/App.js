import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// TODO: README를 참고해서 Alchemy 메인넷 API 키를 환경변수로 설정해주세요.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// Alchemy SDK는 여러 가지 패키지를 담고 있는 라이브러리입니다.
// (참고: https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();
  const [transaction, setTransaction] = useState();
  const [TransactionReceipt, setTransactionReceipt] = useState();

  useEffect(() => {
    // 가장 최근에 생성된 블록 번호를 조회하는 API입니다. 
    // (참고: https://docs.alchemy.com/reference/sdk-getblocknumber)
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    async function getBlock() {
      const latestBlock = await alchemy.core.getBlock("latest");
      setBlock(latestBlock);
    }

    async function getTransaction() {
      let txHash = "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3";
      const response = await alchemy.core.getBlockWithTransactions(txHash);
      setTransaction(response);
    }

    async function getTransactionReceipt() {
      const tx = "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b";
      let response = await alchemy.core.getTransactionReceipt(tx);
      setTransactionReceipt(response);
    }

    getBlockNumber();
    getBlock();
    getTransaction();
    getTransactionReceipt();
  }, []);

  // TODO: README를 참고하여 자유롭게 페이지를 구성해주세요.
  return (
    <div className="App">
      <h1>블록 익스플로러 만들기</h1>
      <div>
        <strong>Latest Block Number:</strong> {blockNumber || "로딩 중..."}
      </div>
      <div>
        <strong>Gas Limit:</strong>{" "}
        {block ? block.gasLimit.toString() : "로딩 중..."}
      </div>
      <div>
        <strong>nonce:</strong>{" "}
        {transaction ? transaction.nonce.toString() : "로딩 중..."}
      </div>
      <div>
        <strong>to:</strong>{" "}
        {TransactionReceipt ? TransactionReceipt.to : "로딩 중..."}
      </div>
    </div>
  );
}

export default App;
