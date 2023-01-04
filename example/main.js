import windowEventProxy from "../index.js";

console.log(windowEventProxy)
windowEventProxy.addEventListener('mousemove', 'testId', () => {
    console.log('mousemoving...')
})

windowEventProxy.visualize()

setTimeout(() => {
    windowEventProxy.removeEventListener('mousemove', 'testId')
    console.log('mousemove event removed')
}, 1000)

// GUI for testing
const addClickEventButton = document.createElement('button')
addClickEventButton.innerHTML = 'Add click event'
addClickEventButton.onclick = function() {
    windowEventProxy.addEventListener('click', Math.random().toString(), () => {})
    windowEventProxy.visualize()
}
document.body.appendChild(addClickEventButton)