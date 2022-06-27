const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var calWrapper = document.getElementById('wrapper')
var select = document.createElement('select')
for(var i = 0; i < months.length; i++){
    var option = document.createElement('option')
    option.value = i+1
    option.textContent = months[i]
    select.append(option)
}
calWrapper.append(select)
var input = document.createElement('input')
input.type = 'number'
input.placeholder = 'Pick a year, Marty'
calWrapper.append(input)

var button = document.getElementById('clickMe')
button.addEventListener('click', printCalendar)
function printCalendar(){

const today = new Date(`${select.value}/1/${input.value}`)
const month = today.getMonth()
let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
document.getElementById('calendarDays').innerHTML = ' '

let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)


const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}
}
