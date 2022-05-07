import data from './data'

const bands = [
  require('../images/artist1.jpg'),
  require('../images/artist2.jpg'),
  require('../images/artist3.jpg'),
  require('../images/artist4.jpg'),
  require('../images/artist5.jpg'),
  require('../images/artist6.jpg')
]


const JSX = ({title, img, description, schedule}) => {
  return `
    <img src="${img}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">${schedule}</small>
    </div>
  `
}


const rowHelper = (min, max) => {
  return data.map((band, i) => {
    if (i >= min && i < max) {
      const box = document.createElement('div')
      box.classList.add('card')
      box.innerHTML = JSX({
        title: band.title,
        img: bands[band.img],
        description: band.description,
        schedule: band.schedule
      })
      return box
    }
  }).filter(band => band)
}


function populateBandsBox()  {
  const rowTop = rowHelper(0, 3)
  const rowBottom = rowHelper(3, 6)
  const row1 = document.querySelector('.bands__box--row1')
  const row2 = document.querySelector('.bands__box--row2')
  rowTop.forEach(r => row1.appendChild(r))
  rowBottom.forEach(r => row2.appendChild(r))
}


+( function() {
  populateBandsBox()
} )();
