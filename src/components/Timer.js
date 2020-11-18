import React from "react";

const Timer = () => {

  const countDate = new Date("jan 1, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  console.log(now);
  var gap = countDate - now;
  //  console.log(gap)

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
};

setInterval( () => {
  Timer();
}, 1000);

export default Timer