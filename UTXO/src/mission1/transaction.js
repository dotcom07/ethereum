class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.transaction = { inputUTXOs, outputUTXOs };
  }

  execute() {
    const isDoubleSpend = this.transaction.inputUTXOs.findIndex(
      (utxo) => utxo.spent == true
    );

    if (isDoubleSpend !== -1) {
      throw new Error("input TXO is already spent.");
    }

    /**
     * 📚 Mission 1.
     * 입력 UTXO의 총값이 출력 UTXO의 총값을 커버할 만큼 충분한지 확인한다.
     * 입력의 총값이 출력의 총값보다 작으면 execute 함수에서 에러를 던진다.
     */
    const inputSum = this.mysum(this.transaction.inputUTXOs);
    const outputSum = this.mysum(this.transaction.outputUTXOs);
    if (inputSum < outputSum) {
      throw new Error("Input insufficient.");
    }
  }

  mysum(UTXOlist) {
    let sum = 0;

    for (let UTXO of UTXOlist) {
      sum += UTXO.amount;
    }

    return sum;
  }
}

module.exports = Transaction;
