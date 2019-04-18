//assignment.js is a template for Student objects
function Student(name, gradelevel, homeroom, teacher){
    this.name = name; // this.<> is property of the object; name is the passed argument
    this.gradelevel = gradelevel;
    this.homeroom = homeroom;
    this.teacher = teacher;

    this.eligible = function(){
        if(gradelevel > 0 && gradelevel <5)
            return 'Eligible'
        else
            return 'Not eligible';
    };
}

//create two Student objects
var braden = new Student('Braden', 1, '10', 'Wangen');
var chloe = new Student('Chloe', 6, '14', 'Bossie');

//update object
//quayHotel.roms = 120;

//update the html for the page
var details1 = '<b>Student name: </b>';
details1 += braden.name;
details1 += ' | <b>Grade: </b>';
details1 += braden.gradelevel;
details1 += ' | <b>Status: </b>';
details1 += '<span style="color:red">' + braden.eligible() + '</span>';

var elStudent1 = document.getElementById('student1');
elStudent1.innerHTML = details1;


var details2 = '<b>Student name: </b>';
details2 += chloe.name;
details2 += ' | <b>Grade: </b>';
details2 += chloe.gradelevel;
details2 += ' | <b>Status: </b>';
details2 += '<span style="color:red">' + chloe.eligible() + '</span>';

var elStudent2 = document.getElementById('student2');
elStudent2.innerHTML = details2;

