
let display = document.getElementById('display')
let displayWeather = document.getElementById('displayWeather')
let time = function () {
    var minute = Math.round(Math.random() * 1);
    var sec = 60;
    setInterval(function () {
        document.getElementById("timer").innerHTML = minute + 'min' + ":" + sec + 'sec';
        sec--;
        if (sec === 0) {
            document.getElementById('timeEnd').innerHTML = "Վարորդը տեղում է "
        }
    }, 1000);
}
let km = Math.round(Math.random() * 5)
let pay1 = km * 200
let pay2 = km * 500
let pay3 = km * 400
let pay4 = km * 300
let money = ''
let weather = ' '
let word = ['Sunny', 'snow', 'rain', 'cloudy'];
weather = word[Math.floor(Math.random() * word.length)];
if (weather === 'Sunny') {
    money = pay1
} else if (weather === 'snow') {
    money = pay2
} else if (weather === 'rain') {
    money = pay3
} else if (weather === 'cloudy') {
    money = pay4
}
let textFunction = function (youraddress, whereareyougoing, name) {
    displayWeather.innerHTML = weather
    display.innerHTML = ("Dear " + " " + name + " " + "you have booked a taxi from " + " " + youraddress + "  " + " to" +
        " " + whereareyougoing + "  " + ".Trip distance is " + " " + km + " " + " km, eshimated fave is " + " " + money + " " + "dram։ Thank you for  your booking։ ")

}



setInterval(myTimer, 1000)
function myTimer() {
    let today  = new Date();
    document.getElementById('time').innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()  
  document.getElementById('date').innerHTML = today.toLocaleDateString()
}


