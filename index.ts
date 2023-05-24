class Aquarium {
    private length: number;
    private width: number;
    private height: number;
    private waterLevel: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.waterLevel = 0;
    }

    calculateVolume(): number {
        return this.length * this.width * this.height;
    }

    addWater(amount: number): void {
        this.waterLevel += amount;
    }

    getWaterLevel(): number {
        return this.waterLevel;
    }
}

// Example usage
const myAquarium = new Aquarium(50, 30, 20);
const volume = myAquarium.calculateVolume();
console.log("Volume:", volume);

console.log("Initial water level:", myAquarium.getWaterLevel());

myAquarium.addWater(100);
console.log("Water level after adding 100 units:", myAquarium.getWaterLevel());

myAquarium.addWater(50);
console.log("Water level after adding 50 units:", myAquarium.getWaterLevel());