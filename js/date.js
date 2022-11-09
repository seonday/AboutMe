const timeElement = document.getElementById('time');
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

function clock() {
  const halfHours = hours % 12 || 12;
  const hoursToStr = ('00' + halfHours.toString()).slice(-2);
  const minToStr = ('00' + minutes.toString()).slice(-2);
  let dayAndNight = '오전';

  if (hours >= 12) {
    dayAndNight = '오후';
  } else {
    dayAndNight;
  }
  let realTime = `${dayAndNight} ${hoursToStr}:${minToStr}`;
  timeElement.innerText = realTime;
  return;
}
clock();
// const realTimeRepeat = setInterval(clock, 1000);
