//Here we're importing items we'll need. You can add other imports here.

const durations = [
  300, // 0:05
  600, // 0:10
  1800, // 0:30
  3600, // 1:00
  7200, // 2:00
  10800, // 3:00
];

//The first function. Remove this.
const btn = document.querySelector("button");
btn.onclick = function () {
  alert("You ran some JavaScript");
};

// I found this function here: https://codingbeautydev.com/blog/javascript-convert-seconds-to-hours-and-minutes/
function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { h: hours, m: minutes, s: seconds };
}

// { h: 0, m: 1, s: 0 }
console.log(toHoursAndMinutes(60));

// { h: 0, m: 16, s: 40 }
console.log(toHoursAndMinutes(1000));

// { h: 1, m: 10, s: 50 }
console.log(toHoursAndMinutes(4250));
