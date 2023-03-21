import './index.css'

$('.starsvg1').on('mouseout', function () {
  $(this).css('-webkit-animation-play-state', 'paused')
  $(this).css('animation-play-state', 'paused')
})

$('.starsvg1').on('mouseover', function () {
  $(this).css('-webkit-animation-play-state', 'running')
  $(this).css('animation-play-state', 'running')
})

$('.Q_MenuStar').on('mouseout', function () {
  $(this).css('-webkit-animation-play-state', 'paused')
  $(this).css('animation-play-state', 'paused')
})

$('.Q_MenuStar').on('mouseover', function () {
  $(this).css('-webkit-animation-play-state', 'running')
  $(this).css('animation-play-state', 'running')
})
