abstract class Animal {
    protected name:string;
    constructor(name:string){
        this.name =name;
    }
    abstract makeNoise (): void;
    printName():void {
        console.log(this.name);
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log("MEO MEO");
    }
}
class Dog extends Animal {
    makeNoise(): void {
        console.log("GÂU GÂU");
    }
}

const cat = new Cat ("Mèo Tom");
const dog = new Dog ("KiKi");
cat.printName();
cat.makeNoise();

dog.printName();
dog.makeNoise();