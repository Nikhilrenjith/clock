const sHand = document.querySelector(".second-hand");
const mHand = document.querySelector(".min-hand");
const hHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const sDegrees = (seconds / 60) * 360 + 90;
  sHand.style.transform = `rotate(${sDegrees}deg)`;

  const mins = now.getMinutes();
  const mDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  mHand.style.transform = `rotate(${mDegrees}deg)`;

  const hour = now.getHours();
  const hDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hHand.style.transform = `rotate(${hDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
