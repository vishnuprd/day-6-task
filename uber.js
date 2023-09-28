class Uber {
    constructor(baseFare, costPerMile, costPerMinute, rideDistance, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.rideDistance = rideDistance;
        this.bookingFee = bookingFee;
        this.rideTime = rideDistance / costPerMile; 
    }

    getFare() {
        return this.baseFare + (this.costPerMinute * this.rideTime + this.costPerMile * this.rideDistance) + this.bookingFee;
    }

    setCostPerMile(newCostPerMile) {
        this.costPerMile = newCostPerMile;
        this.rideTime = this.rideDistance / this.costPerMile; 
    }
}

var taxi = new Uber(300, 15, 2.5, 30, 25);
taxi.setCostPerMile(20);

var fare = taxi.getFare(); 
console.log(`Total fare is: ${fare}`);
console.log(`Cost per mile: ${taxi.costPerMile}`);
