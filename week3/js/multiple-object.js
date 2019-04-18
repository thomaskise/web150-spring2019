//multiple-objects.js is a template for hotel objects
function Hotel(name, rooms, booked){
    this.name = name; // this.<> is property of the object; name is the passed argument
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

//create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25)
var parkHotel = new Hotel('Park', 120, 77)

//update object
quayHotel.roms = 120;

//update the html for the page
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;