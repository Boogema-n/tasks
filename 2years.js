function getDateInWords() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const dateInWords = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  return dateInWords;
}

function updateDateInWords() {
  document.getElementById("dateInWords").innerHTML = getDateInWords();
}

setInterval(updateDateInWords, 1000);

function updateTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("currentTime").innerHTML = timeString;
}

setInterval(updateTime, 1000);
