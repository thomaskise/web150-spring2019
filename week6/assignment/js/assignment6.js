/***************************************************************************************
 *****                                #1                                           *****
 ***** add elements to the DOM tree using createElement() & getElementsByTagName() *****
 ****************************************************************************************/

//set-up the menu in an array
var menuList = [menuItem = ['Braised Duck Burger', '$9.95'],
                menuItem = ['Wok\'d Mushroom & Tofu Burger', '$8.95'],
                menuItem = ['No SPAM Loco Moco Burger', '$10.95'],
                menuItem = ['Grilled Chicken Burger', '$8.95'],
                menuItem = ['House Special Fried Rice', '$7.95']];

var numItems = menuList.length;//number of items on the menu

//loop through the menuList and create a row for each menuItem
for (var i1 = 0; i1 < numItems; i1++) {

    //set-up the <tr> element
    //set the newTr, position and append the new <tr>
    var newTr = document.createElement('tr'); //*** DOM Method */
    var position = document.getElementsByTagName('tbody')[0]; //*** DOM Query */
    position.appendChild(newTr);  //*** DOM Method */

    //set-up the <td> elements
    //create var for <td> processing and intitalize to blank string
    var newTd = '';

    //var for the current row number being set
    var currentMenuItem = document.querySelectorAll('tr').length - 1;  //*** DOM Query */
    
    //set up the element id
    //var to create the id value
    var currentID = 'menuitem' + currentMenuItem;
    //Get the last item
    var lastItem = document.getElementsByTagName('tr').item(currentMenuItem);  //*** DOM Query/Property */
    //add the id attribute
    lastItem.setAttribute('id', currentID);  //*** DOM Method */

    //use currentMenuItem to set the position for the row being processed
    var position = document.getElementsByTagName('tr')[currentMenuItem];  //*** DOM Query */

    //set an array of <td> text with an item for each column
    var newTextTd = [document.createTextNode(currentMenuItem), //set column 1 - Item #   //*** DOM Method */
    document.createTextNode(menuList[i1][0]), //set column 2 - Menu Item   //*** DOM Method */
    document.createTextNode(menuList[i1][1])]; //set column 3 - Price   //*** DOM Method */

    //create and append each <td> element
    for (var i2 = 0; i2 < newTextTd.length; i2++) {
        newTd = document.createElement('td');  //*** DOM Method */
        newTd.appendChild(newTextTd[i2]);   //*** DOM Method */
        position.appendChild(newTd);   //*** DOM Method */
    }
}

/***************************************************************************
 *****                                #2                               *****
 ***** Use querySelectorAll() to make everyother row a different color *****
 ***************************************************************************/

//use qSA to get all the tr's 
var els = document.querySelectorAll('tr');   //*** DOM Query */
var arraylength = els.length;

//start with els[1] to skip the header row of the <tr> then loop through the tr's & check the 
//counter "i" to see if it is even
for (var i = 1; i < arraylength; i++){
    //if the counter is even, then change the className to t_even else change it to t_odd
    if (isEven(i)) {
        els[i].className = "t_even";  //*** DOM Property */
    }else {
        els[i].className = "t_odd";   //*** DOM Property */
    }
}

/**********************************************************************************************
 *****                                #3                                                  *****
 ***** remove an element using the removeChild(method) *****
 **********************************************************************************************/
//set up a var with the element to remove & one for the container element
var removeEl = document.getElementsByTagName('p')[0];   //*** DOM Query */
var containerEl = removeEl.parentNode;

//remove the element
containerEl.removeChild(removeEl);   //*** DOM Method */

/**********************************************************************************************
 *****                                #4                                                  *****
 ***** use getElementByID and text node nodeValue property to change the text on the page *****
 **********************************************************************************************/

//set-up vars
var itemTopic = document.getElementById('topic');   //*** DOM Query */
var h2Text = itemTopic.firstChild.nodeValue;   //*** DOM Property */

//substitue the text and assign it
h2Text = 'Checkout our ' + whatDay() + ' Menu';
itemTopic.firstChild.nodeValue = h2Text;   //*** DOM Property */


//this function examines a value input to see if it is even
function isEven(value) {
    if (value%2 == 0)
		return true;
	else
    return false;
}

//this function gets the day of the week
function whatDay() {
    //set up vars
    var day;
    var dayNum = new Date().getDay();
    //switch to set the day
    switch(dayNum){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Fabulous";
    }
    return day;
}