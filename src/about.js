import './about.css'
var element = document.querySelector('.logoanimation')
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 1) || 1400
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
}, 10000)
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

// function success() {
//   if ($('#myform').value === '') {
//     $('.everything').disabled = true
//   } else {
//     $('.everything').disabled = false
//   }
// }
// ховеры емае
$('.part1').hover(
  function () {
    $(this).addClass('hovertext')
    $('.arrowleft').addClass('hovertext2')
    $('.theme2').addClass('hovertext3')
    $('.arrowright').addClass('hovertext4')
    $('.theme1').addClass('hovertext4')
    $('.part3').addClass('hovertext4')
  },
  function () {
    $(this).removeClass('hovertext')
    $('.arrowleft').removeClass('hovertext2')
    $('.theme2').removeClass('hovertext3')
    $('.arrowright').removeClass('hovertext4')
    $('.theme1').removeClass('hovertext4')
    $('.part3').removeClass('hovertext4')
  }
)

$('.part3').hover(
  function () {
    $(this).addClass('hovertext')
    $('.arrowright').addClass('hovertext2')
    $('.theme1').addClass('hovertext3')
    $('.arrowleft').addClass('hovertext4')
    $('.theme2').addClass('hovertext4')
    $('.part1').addClass('hovertext4')
  },
  function () {
    $(this).removeClass('hovertext')
    $('.arrowright').removeClass('hovertext2')
    $('.theme1').removeClass('hovertext3')
    $('.arrowleft').removeClass('hovertext4')
    $('.theme2').removeClass('hovertext4')
    $('.part1').removeClass('hovertext4')
  }
)
