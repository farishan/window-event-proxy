if (!window) throw Error('`window` is not defined. This module is for browser environment.')

function WindowEventProxy() {
    const eventListener = {}

    this.addEventListener = (eventKey, key, func) => {
        // set default value
        if (!eventListener[eventKey]) eventListener[eventKey] = {}

        // save listener
        eventListener[eventKey][key] = func

        // add listener to real window
        window.addEventListener(eventKey, func)
    }

    this.removeEventListener = (eventKey, key) => {
        // remove listener from real window first
        window.removeEventListener(eventKey, eventListener[eventKey][key])

        // remove listener
        delete eventListener[eventKey][key]
    }

    this.debug = () => {
        const id = 'WindowEventProxy'
        let debugWindow = document.getElementById(id)
        if (debugWindow) document.body.removeChild(debugWindow)

        debugWindow = document.createElement('div')
        debugWindow.id = 'WindowEventProxy'
        debugWindow.style.border = '1px solid'
        debugWindow.style.padding = '1rem'

        const listeners = []
        Object.keys(eventListener).forEach(eventKey => {
            Object.keys(eventListener[eventKey]).forEach(key => {
                listeners.push(eventKey + '/' + key)
            });
        });

        debugWindow.innerHTML = `<pre><code>${JSON.stringify(listeners, ' ', 2)}</code></pre>`
        document.body.appendChild(debugWindow)
        console.log(this)
    }

    return this
}

const windowEventProxy = new WindowEventProxy()

export default windowEventProxy