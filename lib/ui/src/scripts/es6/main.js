(function () {
    'use strict';

    let app;

    app = new Vue({
        el: '#app',
        data: {
            title: 'Greenwood Olympia',
            activeView: {},
            views: [
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
            activeView: function () {
                console.log('New Active State: ' + this.activeView.title, this.activeView);
            }
        },
        methods: {
            setActiveView: function (currentState) {
                this.activeView = currentState;
            }
        }
    });
})();
