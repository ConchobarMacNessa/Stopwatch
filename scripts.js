window.onload = function () {

var start = document.getElementbyId('start'),
	stop = document.getElementbyId('stop'),
	reset = document.getElementbyId('reset'),
	secondsCount = document.getElementbyId('seconds'),
	minutesCount = document.getElementbyId('minutes'),
	seconds = 00,
	minutes = 00,
	time;

start.onlick = function () {
	clearInterval(time);
	time = setInterval(startTimer, 10);
}
stop.onlick = function () {
	clearInterval(time);
}
reset.onlick = function () {
	clearInterval(time);
	seconds = 00;
	minutes = 00;
	secondsCount.innerHTML = seconds;
	minutesCount.innerHTML = minutes;
}
function startTimer () {
	seconds++;
	if (seconds < 9) {
		secondsCount.innerHTML = '0' + seconds;
	} if (seconds > 9) {
		secondsCount.innerHTML = seconds;
	} if (seconds > 59) {
		console.log("minutes");
		minutes++;
		minutesCount.innerHTML = "0" + minutes;
		seconds = 0;
		secondsCount.innerHTML = "0" + 0
	} if ( minutes > 9) {
		minutesCount.innerHTML = minutes;
	}
}
}