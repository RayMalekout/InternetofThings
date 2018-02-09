function ConnectedThing(name, capacity, location, status) {
      this.thingName = name;
      this.totalCapacity = capacity;
      this.thingLocation = location;
      this.thingStatus = status;
}


var newBin  = function() {
Bin = new ConnectedThing("Dustbin", 80, "north", "full");
};

var newFridge = function() {
Fridge = new ConnectedThing("Fridge",60,"south", "empty");
};

var newCar = function() {
Car = new ConnectedThing("Car", 200, "east", "new");
};

var newWaterPipe = function() {
WaterPipe = new ConnectedThing("Water Pipe", 500, "west", "full");
};

var output = function() {

window.alert("The bin is called " + Bin.thingName);
window.alert("The fridge is " + Fridge.thingStatus);
window.alert("The car has " + Car.totalCapacity + " kg of space");
window.alert("The water pipe is located in the " + WaterPipe.thingLocation);

};
