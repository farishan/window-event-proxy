import windowEventProxy from "./index.js";

console.log(windowEventProxy)
windowEventProxy.addEventListener('mousemove', 'testId', () => {
    console.log('mousemoving...')
})

setTimeout(() => {
    windowEventProxy.removeEventListener('mousemove', 'testId')
    console.log('mousemove event removed')
}, 1000)