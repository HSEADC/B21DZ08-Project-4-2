const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
)
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
)
const img = new Image()

function draw() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = vw
  canvas.height = vh
  var img = document.getElementById('mousecard')
  canvas.addEventListener('mousemove', function (e) {
    console.log(`${e.offsetY}`)
    console.log(`${e.offsetX}`)
    console.log(vh, vw)
    ctx.drawImage(img, e.offsetX - vw / 100, e.offsetY - vh / 100, 50, 70)
    ctx.drawImage(img, vw - e.offsetX - vw / 100, e.offsetY - vh / 100, 50, 70)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  draw()
})
