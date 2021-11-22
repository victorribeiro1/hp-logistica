require('core-js/stable')
require('regenerator-runtime/runtime')

const logo = require('./medias/images/logo.png')
const imagem_secundaria = require('./medias/images/imagem_secundaria.png')
const storageImage = require('./medias/images/storage.jpg')
const trucks = require('./medias/images/trucks.jpg')
const noise = require('./medias/images/noise.jpg')
const graySlideImage = require('./medias/images/gray-slide-image.jpg')
const brownSlideImage = require('./medias/images/brown-slide-image.jpg')
const blueSlideImage = require('./medias/images/blue-slide-image.jpg')
const userImage = require('./medias/images/foto_usuario.png')

const menu = require('./js/menu')
const faq = require('./js/faq')

// const aeonikRegularFont = require('./medias/fonts/aeonik/Aeonik-Regular.otf')
// const aeonikLightFont = require('./medias/fonts/aeonik/Aeonik-Light.otf')


const name = 'Dory'

const obj = { name }

const newObj = { ...name, age: 16}

console.log(newObj.age)