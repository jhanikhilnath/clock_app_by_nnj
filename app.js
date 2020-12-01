let dayDOM = document.querySelector('.dayname');
let monthDOM = document.querySelector('.month');
let dateDOM = document.querySelector('.daynum');
let yearDOM = document.querySelector('.year');
let hourDOM = document.querySelector('.hour');
let minuteDOM = document.querySelector('.min');
let secondDOM = document.querySelector('.sec');
let periodDOM = document.querySelector('.period');
let thDOM = document.querySelector('.th');

let months = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

newTime();

function newTime() {
	let curr = new Date();
	let hour = curr.getHours();
	let min = curr.getMinutes();
	let sec = curr.getSeconds();
	let day = curr.getDay();
	let date = curr.getDate();
	let month = curr.getMonth();
	let year = curr.getFullYear();
	let period = 'AM';
	let th = 'th'
	
	  if (date == 1){
	    th = "st"
	  }
	
	  if (date == 1){
	    th = "nd"
	  }
	
	  if (date == 3){
	    th = "rd"
	  }
	
	  if(hour >= 12){
            period = "PM";
          }
          if(hour == 0){
            hour = 12;
          }
          if(hour > 12){
            hour -= 12;
          }

	hour = hour < 10 ? '0' + hour : hour;
	min = min < 10 ? '0' + min : min;
	sec = sec < 10 ? '0' + sec : sec;

	monthDOM.textContent = months[month];
	dayDOM.textContent = weekDays[day - 1];
	secondDOM.textContent = sec;
	minuteDOM.textContent = min;
	periodDOM.textContent = period;
	hourDOM.textContent = hour;
	dateDOM.textContent = date;
	yearDOM.textContent = year;
	thDOM.textContent = th;
}

setInterval(newTime, 100);
