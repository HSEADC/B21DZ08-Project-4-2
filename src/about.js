import './about.css'
var element = document.querySelector('.logoanimation')
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 1) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}
let timeoutID
TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length
  var fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

  var that = this
  var delta = 200 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }
  timeoutID = setTimeout(function () {
    that.tick()
  }, delta)
}
setInterval(function () {
  console.log('работает')
  clearTimeout(timeoutID)
  element.classList.remove('animationstep1')
  element.classList.add('animationstep2')
  $('.pagewithoutanimation').removeClass('hidden')
}, 8000)
window.onload = function () {
  var elements = document.getElementsByClassName('typewrite')
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type')
    var period = elements[i].getAttribute('data-period')
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period)
    }
  }
  // INJECT CSS
  var css = document.createElement('style')
  css.type = 'text/css'
  css.innerHTML =
    '.typewrite > .wrap { border-right: 0.5vw solid #313131 height:2vw text-aligh center}'
  document.body.appendChild(css)
}
