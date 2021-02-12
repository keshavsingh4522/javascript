const FEATURED = document.querySelector('.featured-image');
const img = FEATURED.querySelector('img')

var txtNode = img.getAttribute('alt')

// create figcaption element
var figCaption = document.createElement('figcaption')
// create text
var figText = document.createTextNode(txtNode)
//append to figCaptio
figCaption.appendChild(figText)
// figCaption.innerHTML = txtNode
// console.log(figCaption)
//append to featured
FEATURED.appendChild(figCaption)
img.setAttribute('alt','')