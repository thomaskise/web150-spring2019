//create vars
var subtotal = (13+ 1) * 5; //70

//shipping
var shipping = 0.5 * (13 + 1); //7

//total
var total = subtotal+ shipping; //77

//get elements by id
    //get welcome
    var elSub   = document.getElementById("subtotal");
    elSub.textContent = subtotal;

    //get calcLeader
    var elShip = document.getElementById("shipping");
    elShip.textContent = shipping;
    
    //get addend1
    var elTotal = document.getElementById("total");
    elTotal.textContent = total;