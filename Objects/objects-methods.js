let restaurant = {
    name: 'Ola',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        let guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount - partySize
    }
}

// console.log(restaurant.checkAvailability(5))

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

// Challenge Area
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))