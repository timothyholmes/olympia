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
                    title: 'home',
                    content: 'home content'
                },
                {
                    title: 'profiles',
                    content: 'profiles content'
                },
                {
                    title: 'matches',
                    content: 'matches content'
                },
                {
                    title: 'forms',
                    content: 'forms content'
                }
            ]
        },
        watch: {
            activeView: function () {
                console.log('New Active View: ' + this.activeView.title, this.activeView);
            }
        },
        methods: {
            setActiveView: function (currentState) {
                this.activeView = currentState;
            }
        }
    });
})();
