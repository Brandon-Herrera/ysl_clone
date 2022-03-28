const leftPanel = document.querySelector('.left-panel')
const firstLevelButtons = [...leftPanel.querySelectorAll('ul > li > button')]

let activeButton = false

findChildren = (buttonClicked) => {
    let relatedButtons = false

    if (activeButton.attributes['data-level'].value === '1') {
        const children = [...parent // active level 1 button
        .nextElementSibling // the subnav div attached to that button (next element in html tree)
        .children[0] // the ul of the subnav
        .children]

        for (i = 0; i < children.length; i++) {
            if (children[i] === buttonClicked) {
                relatedButtons = true
            }
        }
    }

    if (relatedButtons === true) {
        buttonClicked.nextElementSibling.attributes['data-expanded'].value = 'true'
    }
}


firstLevelButtons.forEach(
    button => button.addEventListener('click', (event) => {
        // if a level one button is active
        if (!activeButton) {
            const subnav = event.target.nextElementSibling
            subnav.attributes['data-expanded'].value = 'true'
            activeButton = button
        // if active level one button is clicked again, close that open subnav
        } else if (activeButton === button) {
            activeButton.nextElementSibling.attributes['data-expanded'].value = 'false'
            activeButton = false
        } else if (activeButton && activeButton !== button) {
            findChildren(button)
        // if not button is active, open subnav of clicked button
        } else {
            activeButton.nextElementSibling.attributes['data-expanded'].value = 'false'
            const subnav = event.target.nextElementSibling
            subnav.attributes['data-expanded'].value = 'true'
            activeButton = button
        }

        // TODO: check if active button is level one and button clicked is level two of an active level one button
    }
))


// activeButton.attributes['data-level'].value === '1'

// if there is a active button, and the button clicked is a sibling of the active button, open up the subnav of the active button and don't close the level one subnav