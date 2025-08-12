class Account {
    public id: number;
    public userName: string;
    public password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    public login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công!");
        } else {
            console.log("Sai mật khẩu!");
        }
    }
    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
        }
    }
}

class userAcc extends Account {
    public status: string; 
    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }
    public login(password: string): void {
        if (this.status === "active") {
            super.login(password);
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa!");
        } else {
            console.log("Trạng thái tài khoản không hợp lệ!");
        }
    }
}
const user1 = new userAcc(2, "LeeAnhs06", "123456", "user", "active");
user1.login("123456"); 
user1.logout();  

const user2 = new userAcc(3, "BannedUser", "abc123", "user", "banned");
user2.login("abc123"); 