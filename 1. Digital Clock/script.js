const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('second');
const day = document.getElementById('day');

let monthName = ['January','February','March','April','May','June','July','August','September','October','November','December']

const clock = setInterval(() => {
    let today = new Date();

    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let hr = today.getHours() 
    let mins = today.getMinutes()
    let sec = today.getSeconds()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.innerHTML = hr;
    minute.innerHTML = mins;
    seconds.innerHTML = sec;


},1000)