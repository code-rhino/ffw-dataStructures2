const Queue = require('../libs/Queue');

class RestaurantQueue {
    constructor() {
      this.waitList = new Queue();
    }
    
    addGuest(guestName) {
        this.waitList.enqueue(guestName);
        console.log(`${guestName} added to the wait list`);
    }
    
    seatGuest() {
        const guest = this.waitList.dequeue();
        if(guest){
            console.log(`${guest} has been seated`);
            return guest;
        }{
            console.log("No guest are waiting");
            return "No guest are waiting";
        }
    }
}

// Create a new restaurant queue
const restaurant = new RestaurantQueue();

// Add some guests
restaurant.addGuest("Alice");
restaurant.addGuest("Bob");
restaurant.addGuest("Carol");

// Start seating guests
restaurant.seatGuest();
restaurant.seatGuest();
restaurant.seatGuest();

// Attempt to seat another guest
restaurant.seatGuest();
