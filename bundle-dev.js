if (!window) throw Error('`window` is not defined. This module is for browser environment.')

const windowEventProxy = {
    eventListener: {
        mousemove: {},
        mouseup: {}
    },
    addEventListener: function (event, id, fn) {
        this.eventListener[event][id] = fn;
        window.addEventListener(event, fn);
    },
    removeEventListener: function (event, id) {
        window.removeEventListener(event, this.eventListener[event][id]);
        delete this.eventListener[event][id];
    }
};

console.log(windowEventProxy);
windowEventProxy.addEventListener('mousemove', 'testId', () => {
    console.log('mousemoving...');
});

setTimeout(() => {
    windowEventProxy.removeEventListener('mousemove', 'testId');
    console.log('mousemove event removed');
}, 1000);
