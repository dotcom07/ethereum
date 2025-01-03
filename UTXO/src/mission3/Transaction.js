class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.transactions = { inputUTXOs, outputUTXOs };
    this.fee = 0;
  }
  execute() {
    const isDoubleSpend = this.transactions.inputUTXOs.findIndex(
      (utxo) => utxo.spent === true
    );

    if (isDoubleSpend !== -1) {
      throw new Error("input TXO is already spent.");
    }

    const prevInputUTXOs = [...this.transactions.inputUTXOs];
    const prevOutputUTXOs = [...this.transactions.outputUTXOs];

    const totalInputAmount = prevInputUTXOs.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    const totalOutputAmount = prevOutputUTXOs.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );

    if (totalInputAmount < totalOutputAmount) {
      this.fee = 0;
      throw new Error(
        "insufficient amount: total value of the inputs is less than the total value of the outputs!"
      );
    }

    const newInputUTXOs = prevInputUTXOs.map((utxo) => (utxo.spent = true));

    this.transactions.inputUTXOs = newInputUTXOs;

    /**
     * 📚 Mission 3.
     * 보상자의 수수료를 구합니다.
     * 수수료는 모든 입력값의 합계에서 모든 출력값의 합계를 뺀 값입니다.
     */
    this.fee = totalInputAmount - totalOutputAmount;
  }
}

module.exports = Transaction;
