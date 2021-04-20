const noon = 12;
const evening = 18; // 6PM
const wakeupTime = 9; // 9AM
const lunchTime = 12; // 12PM
const partyTime = 17; // 5PM
const napTime = lunchTime + 2; // 2PM
let time = new Date().getHours();
const partyTimeButton = document.querySelector("#partyTimeButton");
const napTimeSelector = document.querySelector("#napTimeSelector");
const lunchTimeSelector = document.querySelector("#lunchTimeSelector");
const wakeUpTimeSelector = document.querySelector("#wakeUpTimeSelector");
let isPartyTime = false;

const updateClock = function () {

	const message = document.querySelector('#timeEvent');
	const lolcat = document.querySelector('#lolcat');
	let messageText;
	let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == partyTime){
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    	messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    	messageText = "IZ NAP TIME…";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    	messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    	messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    	messageText = "Good morning!";
	} else if (time > evening) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    	messageText = "Good Evening!";
	} else {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    	messageText = "Good afternoon!";
	}

	message.innerText = messageText;
	lolcat.src = image;

const showCurrentTime = function() {
    // display the string on the webpage
    let clock = document.querySelector('#clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    const clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();

};

updateClock();

const oneSecond = 1000;

setInterval(updateClock, oneSecond);

const partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

const lunchEvent = function() {
		lunchTime = lunchTimeSelector.value;
	};
const wakeUpEvent = function() {
		wakeupTime = wakeUpTimeSelector.value;
	};
const napEvent = function() {
		napTime = napTimeSelector.value;
	};

partyTimeButton.addEventListener('click', partyEvent);

partyTimeButton.addEventListener('click', partyEvent);

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
