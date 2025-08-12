class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(): void {
        this.speed -= 10;
        console.log(`vehicle decreased to: ${this.speed}`);
    }

    public speedUp(): void { 
        this.speed += 10;
        console.log(`vehicle increased to: ${this.speed}`);
    }

    public showSpeed(): void {
        console.log(`speed right now: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

const bicycle = new Bicycle("ABC", 60, 14, 10);
bicycle.showSpeed();
console.log("");
bicycle.slowDown();
console.log("");
bicycle.speedUp();
console.log("");