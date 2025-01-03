class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.transactions = { inputUTXOs, outputUTXOs };
  }
  execute() {
    const isDoubleSpend = this.transactions.inputUTXOs.findIndex(
      (utxo) => utxo.spent === true
    );

    if (isDoubleSpend !== -1) {
      throw new Error("input TXO is already spent.");
    }

    /**
     * 📚 Mission 2.
     * 트랜잭션이 성공한다면, 이중 지출되지 않게 입력 UTXO가 사용되었다고 처리해줍니다.
     */

    const totalInputAmount = this.transactions.inputUTXOs.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    const totalOutputAmount = this.transactions.outputUTXOs.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );

    if (totalInputAmount < totalOutputAmount) {
      throw new Error(
        "insufficient amount: total value of the inputs is less than the total value of the outputs!"
      );
    }

    for (let UTXO of this.transactions.inputUTXOs) {
      UTXO.spend();
    }
  }
}

module.exports = Transaction;
