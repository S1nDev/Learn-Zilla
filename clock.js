// internal software clock
var date = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[date.getDay()];

var objPeople = JSON.parse(localStorage.getItem("objPeople"));

for(var i = 0; i < objPeople.length; i++) {
    if (objPeople[i].status === true) {
        // search for current day of the week
        if (day === "Sunday") {
            var sun = ave / 250;
        }
        else if (day === "Monday") {
            var mon = ave / 250;
        }
        else if (day === "Tuesday") {
            var tue = ave / 250;
        }
        else if (day === "Wednesday") {
            var wed = ave / 250;
        }
        else if (day === "Thursday") {
            var thu = ave / 250;
        }
        else if (day === "Friday") {
            var fri = ave / 250;
        }
        else if (day === "Saturday") {
            var sat = ave / 250;
        }
        else {
            console.log("Day of the week not found.");
        }
        break;
    }
} 