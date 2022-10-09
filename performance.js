var objPeople = JSON.parse(localStorage.getItem("objPeople"));

for (var i = 0; i < objPeople.length; i++) {
    if (objPeople[i].status === true) {
        // Determine algebra performance level
        var alvl = objPeople[i].algebra * 50;
        // Determine biology performance level
        var blvl = objPeople[i].biology * 50;
        // Determine english performance level
        var elvl = objPeople[i].english * 50;
        // Determine world history performance level
        var wlvl = objPeople[i].history * 50;
        // Determine average performance level
        var ave = alvl + blvl + elvl + wlvl
        break;
    }
} 

function algPerformance() {
    if (alvl > 150) {
        if (alvl <= 250) {
            document.getElementById("algSkill").innerHTML = "Awesome";
        }
    }
    else if (alvl > 50) {
        if (alvl <= 150) {
            document.getElementById("algSkill").innerHTML = "Average";
        }
    }
    else if (alvl >= 0) {
        if (alvl <= 50) {
            document.getElementById("algSkill").innerHTML = "Awkward";
        }
    }
    else {
        document.getElementById("algSkill").innerHTML = "Data not found.";
    }
}
function bioPerformance() {
    if (blvl > 150) {
        if (blvl <= 250) {
            document.getElementById("bioSkill").innerHTML = "Awesome";
        }
    }
    else if (blvl > 50) {
        if (blvl <= 150) {
            document.getElementById("bioSkill").innerHTML = "Average";
        }
    }
    else if (blvl >= 0) {
        if (blvl <= 50) {
            document.getElementById("bioSkill").innerHTML = "Awkward";
        }
    }
    else {
        document.getElementById("bioSkill").innerHTML = "Data not found.";
    }
}
function engPerformance() {
    if (elvl > 150) {
        if (wlvl <= 250) {
            document.getElementById("engSkill").innerHTML = "Awesome";
        }
    }
    else if (elvl > 50) {
        if (elvl <= 150) {
            document.getElementById("engSkill").innerHTML = "Average";
        }
    }
    else if (elvl >= 0) {
        if (elvl <= 50) {
            document.getElementById("engSkill").innerHTML = "Awkward";
        }
    }
    else {
        document.getElementById("engSkill").innerHTML = "Data not found.";
    }
}
function whsPerformance() {
    if (wlvl > 150) {
        if (wlvl <= 250) {
            document.getElementById("whsSkill").innerHTML = "Awesome";
        }
    }
    else if (wlvl > 50) {
        if (wlvl <= 150) {
            document.getElementById("whsSkill").innerHTML = "Average";
        }
    }
    else if (wlvl >= 0) {
        if (wlvl <= 50) {
            document.getElementById("whsSkill").innerHTML = "Awkward";
        }
    }
    else {
        document.getElementById("whsSkill").innerHTML = "Data not found.";
    }
}
function avePerformance() {
    if (ave > 600) {
        if (ave <= 1000) {
            document.getElementById("aveSkill").innerHTML = "Awesome";
        }
    }
    else if (ave > 200) {
        if (ave <= 600) {
            document.getElementById("aveSkill").innerHTML = "Average";
        }
    }
    else if (ave >= 0) {
        if (ave <= 200) {
            document.getElementById("aveSkill").innerHTML = "Awkward";
        }
    }
    else {
        document.getElementById("aveSkill").innerHTML = "Data not found.";
    }
    document.getElementById("aveScore").innerHTML = ave + " / 1000";
}