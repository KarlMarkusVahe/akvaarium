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

    isSpaceAvailable(amount: number): boolean {
        const remainingSpace = this.height - this.waterLevel;
        return remainingSpace >= amount;
    }

    issueWarning(): void {
        console.log("Warning: Not enough space to pour water!");
    }

    pourWater(amount: number, targetAquarium: Aquarium): void {
        if (targetAquarium.isSpaceAvailable(amount)) {
            targetAquarium.addWater(amount);
            this.addWater(-amount)
            console.log(`${amount} units of water poured from Aquarium A to Aquarium B.`);
        } else {
            this.issueWarning();
        }
    }
}

const aquariumA = new Aquarium(50, 30, 20);
aquariumA.addWater(100);
console.log("Water level in Aquarium A:", aquariumA.getWaterLevel());

const aquariumB = new Aquarium(40, 25, 15);
console.log("Water level in Aquarium B:", aquariumB.getWaterLevel());

aquariumA.pourWater(4, aquariumB); // should be enough space
console.log("Water level in Aquarium A after pouring:", aquariumA.getWaterLevel());
console.log("Water level in Aquarium B after pouring:", aquariumB.getWaterLevel());

aquariumA.pourWater(8, aquariumB); // Not enough space
console.log("Water level in Aquarium A after second pouring:", aquariumA.getWaterLevel());
console.log("Water level in Aquarium B after second pouring:", aquariumB.getWaterLevel());