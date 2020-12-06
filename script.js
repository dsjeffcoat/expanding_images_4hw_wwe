const panels = document.querySelectorAll('.panel')

// Event Listener for Images

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log("You clicked an image")
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}