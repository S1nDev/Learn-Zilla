 // localStorage.setItem("objPeople", JSON.stringify([{}]));

var objPeople = JSON.parse(localStorage.getItem("objPeople"));
console.log(objPeople);

// dinosaur emoticon :)
dino = String.fromCodePoint(0x1F996);

function lock() {
    document.getElementById("algebra").href = "#";
    document.getElementById("biology").href = "#";
    document.getElementById("english").href = "#";
    document.getElementById("worldhistory").href = "#";
}
function unlock() {
    for (var i = 0; i < objPeople.length; i++) {
        if (objPeople[i].status === true) {
            document.getElementById("algebra").href = "equations1.html";
            document.getElementById("biology").href = "microbio1.html";
            document.getElementById("english").href = "romeojuliet1.html";
            document.getElementById("worldhistory").href = "revolutionarywar1.html";
            return;
        }
    } 
}

function isLoggedIn() {
    for (var i = 0; i < objPeople.length; i++) {
        if (objPeople[i].status === true) {
            var loginUsername = objPeople[i].username;
            if (loginUsername == undefined || loginUsername == null) {
                return;
            }
            document.getElementById("logPane").style.display = "none";
            document.getElementById("loginStatus").innerHTML = loginUsername + " is currently logged in.";
            document.getElementById("logoutPane").style.display = "inline"; 
            return;
        }
    } 
}

function loginUser() { 
    var loginUsername = document.getElementById('getUsername').value;
    var loginPassword = document.getElementById('getPassword').value;
    // loop through all the user objects and confirm if the username and password are correct
    for (var i = 0; i < objPeople.length; i++) {
        if (loginUsername == 0 || loginPassword == 0) {
            alert('Please enter desired information into the textboxes below.')
            break;
        }
        else if (loginUsername == objPeople[i].username && loginPassword == objPeople[i].password) {
            alert(loginUsername + ' is successfully logged in!\nHello again, adventurous learner!  ' + dino);
            // recognize as logged in
            objPeople[i].status = true;
            localStorage.setItem("objPeople", JSON.stringify(objPeople));
            console.log(JSON.parse(localStorage.objPeople));
            document.getElementById("logPane").style.display = "none";
            document.getElementById("loginStatus").innerHTML = loginUsername + " is currently logged in.";
            document.getElementById("logoutPane").style.display = "inline";
        }
    }
}

function logoutUser() {
    for (var i = 0; i < objPeople.length; i++) {
        if (objPeople[i].status = true) {
            objPeople[i].status = false;
            localStorage.setItem("objPeople", JSON.stringify(objPeople));
        }
    }
    console.log(JSON.parse(localStorage.objPeople));
    document.getElementById("logoutPane").style.display = "none";
    document.getElementById("loginStatus").innerHTML = "";
    document.getElementById("logPane").style.display = "inline";
}

function registerUser() {
    var registerUsername = document.getElementById('newUsername').value;
    var registerPassword = document.getElementById('newPassword').value;
	// loop throught people array to see if the username is taken, or password to short
    for (var i = 0; i < objPeople.length; i++) {
        if (registerUsername == 0 || registerPassword == 0) {
            alert('Please enter desired information into the textboxes below.')
            break;
        }
        else if (registerUsername === objPeople[i].username) {
            alert('This username is already taken. Please choose another.')
            break;
        }
        else if (registerPassword.length < 8) {
            alert('This password is too short. Please make it 8 characters or longer.')
            break;
        }
        else {
            // store new user data in an object
	        var newUser = {
		        username: registerUsername,
                password: registerPassword,
                algebra: 0,
                biology: 0,
                english: 0,
                history: 0,
                status: false
            }
            alert('Account successfully registered!\nWelcome to Learnzilla!  ' + dino);
            // register user
            objPeople.push(newUser);
            localStorage.setItem("objPeople", JSON.stringify(objPeople));
            console.log(JSON.parse(localStorage.objPeople));
            return;
        }
    }
}