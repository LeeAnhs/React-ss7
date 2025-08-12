class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, balance: number = 0, status: string = "active") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }

    public deposit(amount: number): void {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
        } else {
            this.history.push(`Nạp thất bại: +${amount}, Số dư: ${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        } else {
            this.history.push(`Rút thất bại: -${amount}, Số dư: ${this.balance}`);
        }
    }

    public showHistory(): void {
        for (const item of this.history) {
            console.log(item);
        }
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: string, balance: number = 0, interestRate: number = 0, status: string = "active") {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    public withdraw(amount: number): void {
        if (amount > 0 && this.status === "active") {
            if (amount >= this.balance) {
                this.history.push(`Rút toàn bộ: -${this.balance}, Số dư: 0`);
                this.balance = 0;
            } else {
                this.balance -= amount;
                this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
            }
        } else {
            this.history.push(`Rút thất bại: -${amount}, Số dư: ${this.balance}`);
        }
    }
}

const savingAcc = new SavingAccount("123456789", 5000, 0.05);

savingAcc.deposit(2000);   
savingAcc.withdraw(1000); 
savingAcc.withdraw(7000);  

savingAcc.showHistory();   