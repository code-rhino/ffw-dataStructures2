# Stacks and Queues 2

[Video](https://vimeo.com/936994614/7b131b0cd1?share=copy)

#### 1. **Class Definition and Constructor**
Start by defining a `RestaurantQueue` class. This class will utilize an instance of `Queue` to manage the list of guests waiting to be seated.

**Code:**
```javascript
const Queue = require('../libs/Queue');

class RestaurantQueue {
    constructor() {
        this.waitList = new Queue();
    }
}
```
- **Constructor:** Initializes a new `Queue` object to store the names of guests waiting for a table.

#### 2. **Adding Guests to the Queue**
Implement a method `addGuest(guestName)` within `RestaurantQueue` to add a guest's name to the queue. This method enqueues the guest and logs a message confirming their addition.

**Code:**
```javascript
addGuest(guestName) {
    this.waitList.enqueue(guestName);
    console.log(`${guestName} added to the wait list`);
}
```
- **Enqueue Operation:** Adds the guest to the end of the queue.

#### 3. **Seating Guests**
Create a method `seatGuest()` that dequeues the next guest from the queue and logs their name as being seated. If the queue is empty, it should inform that no guests are waiting.

**Code:**
```javascript
seatGuest() {
    const guest = this.waitList.dequeue();
    if (guest) {
        console.log(`${guest} has been seated`);
        return guest;
    } else {
        console.log("No guest are waiting");
        return "No guest are waiting";
    }
}
```
- **Dequeue Operation:** Removes the first guest from the queue and logs their seating.
- **Empty Queue Check:** If no guests are left, it logs and returns a message indicating the queue is empty.

#### 4. **Simulation of Guest Management**
Create an instance of `RestaurantQueue` and simulate adding guests and seating them.

**Code:**
```javascript
// Create a new restaurant queue
const restaurant = new RestaurantQueue();

// Add some guests
restaurant.addGuest("Alice");
restaurant.addGuest("Bob");
restaurant.addGuest("Carol");

// Start seating guests
restaurant.seatGuest();  // Alice has been seated
restaurant.seatGuest();  // Bob has been seated
restaurant.seatGuest();  // Carol has been seated

// Attempt to seat another guest
restaurant.seatGuest();  // No guest are waiting
```
- **Adding Guests:** Guests are added in the order "Alice", "Bob", and "Carol".
- **Seating Guests:** Guests are seated in the order they were added.
- **Empty Queue Handling:** When no guests are left, the console logs that no guests are waiting.

#### Conclusion
This demonstration provides a clear understanding of how to implement and use a queue for managing tasks in a sequential order, such as seating guests in a restaurant. The example is straightforward and utilizes console logging to visually represent the operations performed on the queue, making it easy to follow and understand for new learners.