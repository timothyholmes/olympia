(function () {
    'use strict';

    let app;

    app = new Vue({
        el: '#app',
        data: {
            title: 'Greenwood Olympia',
            activeState: 'home',
        },
        methods: {
            setActiveState: function (currentState) {
                this.activeState = currentState;
            }
        }
    });
})();
