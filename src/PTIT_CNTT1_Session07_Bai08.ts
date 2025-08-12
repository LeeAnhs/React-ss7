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
        console.log("Lịch sử giao dịch:");
        for (const item of this.history) {
            console.log(item);
        }
    }
}

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: string, balance: number = 0, overdraftLimit: number = 0, status: string = "active") {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    public withdraw(amount: number): void {
        if (amount > 0 && this.status === "active") {
            if (amount <= this.balance + this.overdraftLimit) {
                this.balance -= amount;
                this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
            } else {
                this.history.push(`Rút vượt hạn mức cho phép: -${amount}, Số dư: ${this.balance}`);
            }
        } else {
            this.history.push(`Rút thất bại: -${amount}, Số dư: ${this.balance}`);
        }
    }
}
const checkAcc = new CheckingAccount("987654321", 3000, 2000);
checkAcc.deposit(2000);     
checkAcc.withdraw(4000);  
checkAcc.withdraw(1500);   
checkAcc.withdraw(2000);  
checkAcc.showHistory();    