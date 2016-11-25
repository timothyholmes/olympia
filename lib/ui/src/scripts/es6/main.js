(function () {
    'use strict';

    let vm;

    Vue.component('match-results', {
        template: 'boy',
        data: function () {
            let data = {
                results: []
            };

            return data;
        },
        created: function () {
            this.$http.get('/ssb/brawl/matchResults/')
                .then((response) => {
                    this.results = response.data.result;
                    console.log(this.results);
                })
                .catch((error) => {
                    throw error;
                });
        }
    });

    vm = new Vue({
        el: '#app',
        data: {
            title: 'Greenwood Olympia',
            activeView: {},
            views: [
                {
                    title: 'Home',
                    content: 'Score tracking app for games at the Greenwood.'
                },
                {
                    title: 'Profiles',
                    content: 'Player profiles and statistics.'
                },
                {
                    title: 'Matches',
                    content: 'Match results.'
                },
                {
                    title: 'Post',
                    content: 'Forms for posting match results.'
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
