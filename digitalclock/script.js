const clock = () => {
	const fullDate = new Date();
	let hours = fullDate.getHours();
	let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    
    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }

	const hoursDisplay = document.getElementById('hour');
	const minutesDisplay = document.getElementById('minute');
	const secondsDisplay = document.getElementById('second');

	hoursDisplay.innerHTML = hours;
	minutesDisplay.innerHTML = `: ${minutes}`;
	secondsDisplay.innerHTML = `: ${seconds}`;
}

setInterval(clock, 1000);
