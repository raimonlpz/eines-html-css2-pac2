const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

const palette = [
  "rgb(133, 255, 206)",
  "#ffb23e",
  "#59d5de",
  "#fbfefb"
]

context.strokeStyle = palette[0]
context.lineWidth = 10
context.lineCap = 'round'

let shouldPaint = false

document.addEventListener('mousedown', (event) => {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener('mouseup', (event) => {
  shouldPaint = false
})

document.addEventListener('mousemove', (event) => {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
    context.stroke()
  }
})


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (event) {
    let bgColor = ''
    switch (event.target.className) {
      case 'palette--one':
        bgColor = palette[1]
        break;
      case 'palette--two':
        bgColor = palette[2]
        break;
      case 'palette--three':
        bgColor = palette[0]
        break;
      case 'palette--four':
        bgColor = palette[3]
        break;
    }
    context.strokeStyle = bgColor
  })
})
