let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;


//home add score buttons
function add1Home () {
    homeCount += 1;
    homeScore.innerText = homeCount;
}

function add2Home () {
    homeCount += 2;
    homeScore.innerText = homeCount;
    }

function add3Home () {
    homeCount += 3;
    homeScore.innerText = homeCount;
}

//guest add score buttons
function add1Guest () {
    guestCount += 1;
    guestScore.innerText = guestCount;
    }
    
function add2Guest () {
    guestCount += 2;
    guestScore.innerText = guestCount;
    }
    
function add3Guest () {
    guestCount += 3;
    guestScore.innerText = guestCount;
    }

//home substract score buttons
function sub1Home () { 
    if (homeCount > 0) {
        homeCount -= 1;
        homeScore.innerText = homeCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}

function sub2Home () {
    if (homeCount > 1) {
        homeCount -= 2;
        homeScore.innerText = homeCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}

function sub3Home () {
    if (homeCount > 2) {
        homeCount -= 3;
        homeScore.innerText = homeCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}

//guest substract score buttons
function sub1Guest () { 
    if (guestCount > 0) {
        guestCount -= 1;
        guestScore.innerText = guestCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}
    
function sub2Guest () {
    if (guestCount > 1) {
        guestCount -= 2;
        guestScore.innerText = guestCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}    

function sub3Guest () {
    if (guestCount > 2) {
        guestCount -= 3;
        guestScore.innerText = guestCount;
    }
    else {
        alert("You can't have a negative score!")
    }
}