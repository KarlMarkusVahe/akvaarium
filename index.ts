class Aquarium {
    private length: number;
    private width: number;
    private height: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    calculateVolume(): number {
        return this.length * this.width * this.height;
    }
}

// Example usage
const myAquarium = new Aquarium(50, 30, 20);
const volume = myAquarium.calculateVolume();
console.log("Volume:", volume);