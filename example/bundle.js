(function () {
    'use strict';

    if (!window) throw Error('`window` is not defined. This module is for browser environment.')

    const windowEventProxy = {
        eventListener: {
            mousemove: {},
            mouseup: {}
        },
        addEventListener: function (event, id, fn) {
            if (!this.eventListener[event]) {
                this.eventListener[event] = {};
            }
            this.eventListener[event][id] = fn;
            window.addEventListener(event, fn);
        },
        removeEventListener: function (event, id) {
            window.removeEventListener(event, this.eventListener[event][id]);
            delete this.eventListener[event][id];
        },
        visualize: function () {
            const self = this;
            const debugWindow = document.createElement('div');
            debugWindow.innerHTML = JSON.stringify(Object.keys(self.eventListener));
            document.body.appendChild(debugWindow);
        }
    };

    console.log(windowEventProxy);
    windowEventProxy.addEventListener('mousemove', 'testId', () => {
        console.log('mousemoving...');
    });

    windowEventProxy.visualize();

    setTimeout(() => {
        windowEventProxy.removeEventListener('mousemove', 'testId');
        console.log('mousemove event removed');
    }, 1000);

    // GUI for testing
    const addClickEventButton = document.createElement('button');
    addClickEventButton.innerHTML = 'Add click event';
    addClickEventButton.onclick = function() {
        windowEventProxy.addEventListener('click', Math.random().toString(), () => {});
        windowEventProxy.visualize();
    };
    document.body.appendChild(addClickEventButton);

})();
