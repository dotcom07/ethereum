class TXO {
    constructor(owner, amount) {
        this.owner = owner;   // 수신자 주소
        this.amount = amount; // 금액
        this.spent = false;   // 사용 여부 (초기값은 false)
    }

    spend() {
        if (this.spent) {
            throw new Error('This TXO is already spent');
        }
        this.spent = true;
    }
}

// A가 B에게 10코인을 전송하여 B의 TXO 생성 Case
const txoB = new TXO('B', 10);
console.log(txoB);  
// TXO { owner: 'B', amount: 10, spent: false }

// B가 C에게 10코인을 전송하여 B의 TXO 사용 Case
txoB.spend();
console.log(txoB);  
// TXO { owner: 'B', amount: 10, spent: true }

// C에게 새로운 TXO 생성 Case
const txoC = new TXO('C', 10);
console.log(txoC);  
// TXO { owner: 'C', amount: 10, spent: false }

// B가 동일한 TXO를 다시 사용하려고 시도 Case
try { 
    txoB.spend();
} catch (error) {
    console.error(error.message);  
    // 'This TXO is already spent'
}

