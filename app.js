const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2022, 5, 11, 21, 30, 0)
// grabs date 10 days into the future, just so countdown is always going
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}`

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const currentTime = new Date().getTime()
  const t = futureTime - currentTime
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  // set values
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`

    }
    return item
    console.log(item)
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }

}
// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()
