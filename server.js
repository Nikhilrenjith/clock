function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  amTopm = " AM";

  if (hour > 12) {
    hour -= 12;
    amTopm = " PM";
  }
  if (hour == 0) {
    hr = 12;
    amTopm = " AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + amTopm;

  document.getElementById("time").innerHTML = currentTime;
}
setInterval(showTime, 1000);
showTime();
