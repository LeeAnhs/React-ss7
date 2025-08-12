abstract class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public abstract displayInfo(): void;
}

class Student extends Person {
    protected id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    public displayInfo(): void {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}

class Teacher extends Person {
    protected subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    public displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}

const student = new Student("NGUYEN A", 1);
student.displayInfo();

const teacher = new Teacher("Thay giao Ba", "Toan");
teacher.displayInfo();