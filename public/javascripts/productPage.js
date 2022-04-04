const dropDownDiv = document.querySelector('.dropdown-div')
const dropDown = document.querySelector('.dropdown')
const showMoreSvg = document.querySelector('.dropdown-svgs > svg:nth-of-type(1)')
const showLessSvg = document.querySelector('.dropdown-svgs > svg:nth-of-type(2)')
const moreDetailsBtn = document.querySelector('#more-details-link')
const extendedDescDiv = document.querySelector('.product-extended-description-div')


let visibility = 'hidden'

dropDown.addEventListener('click', (event) => {
    if (visibility === 'hidden') {
        visibility = 'visible'
        dropDownDiv.style.visibility = 'visible'
        showMoreSvg.style.visibility = 'hidden'
        showLessSvg.style.visibility = 'visible'
    } else {
        visibility = 'hidden'
        dropDownDiv.style.visibility = 'hidden'
        showMoreSvg.style.visibility = 'visible'
        showLessSvg.style.visibility = 'hidden'
    }
})

moreDetailsBtn.addEventListener('click', (event) => {
    if (moreDetailsBtn.innerHTML === 'MORE DETAILS') {
        extendedDescDiv.style.display = 'block'
        moreDetailsBtn.innerHTML = 'SHOW LESS'
    } else {
        extendedDescDiv.style.display = 'none'
        moreDetailsBtn.innerHTML = 'MORE DETAILS'
    }
})