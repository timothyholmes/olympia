(function () {
    'use strict';

    let app;

    app = new Vue({
        el: '#app',
        data: {
            title: 'Greenwood Olympia',
            activeState: {},
            states: [
                {
                    title: 'home'
                },
                {
                    title: 'profiles'
                },
                {
                    title: 'matches'
                },
                {
                    title: 'forms'
                }
            ]
        },
        watch: {
            activeState: function () {
                console.log('New Active State: ' + this.activeState.title, this.activeState);
            }
        },
        methods: {
            setActiveState: function (currentState) {
                this.activeState = currentState;
            }
        }
    });
})();
