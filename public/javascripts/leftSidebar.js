const leftPanel = document.querySelector('.left-panel')
const firstLevelButtons = [...leftPanel.querySelectorAll('ul > li > button')]

const allButtons = [...leftPanel.querySelectorAll('button')]

let activeBtns = []

class Button {
    constructor(button) {
        this.button = button
        this.dataLevel = button.attributes['data-level'].value
        this.dataActive = button.attributes['data-active'].value
    }

    addActiveButton() {
        activeBtns.push(this)
    }

    removeActiveButton() {
        const index = activeBtns.indexOf(this)
        activeBtns.splice(index, 1)
    }

    expand() {
        this.button.nextElementSibling.attributes['data-expanded'].value = 'true'
    }

    contract() {
        this.button.nextElementSibling.attributes['data-expanded'].value = 'false'
    }

    activate() {
        this.button.attributes['data-active'].value = 'true'
        this.dataActive = 'true'
        this.expand()
        this.addActiveButton()
    }

    deactivate() {
        this.button.attributes['data-active'].value = 'false'
        this.dataActive = 'false'
        this.contract()
        this.removeActiveButton()
    }
}


allButtons.forEach(
    button => button.addEventListener('click', (event) => {
        const btn = new Button(button)

        // if no button is active
        if (!activeBtns.length) {
            btn.activate()

        // if clicked is already active
        } else if (activeBtns.filter(e => e.button === btn.button).length) {
            btn.deactivate()

        // if clicked is same data-level as an already active button
        } else if (activeBtns.filter(e => e.dataLevel === btn.dataLevel).length) {
            activeBtns.filter(e => e.dataLevel === btn.dataLevel)[0].deactivate()
            btn.activate()
            
        } else {
            btn.activate()
        }
    }
))
