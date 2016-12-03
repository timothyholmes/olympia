(function () {
    'use strict';

    let leaderboard = {
        template: `
            <div>
                Crazy Vibe
            </div>
        `,
        props: [],
        data: function () {
            let data = {

            };

            return data;
        }
    };

    Vue.component('player-info', {
        template: `
        <div>
            <leaderboard v-bind:players='players'></leaderboard>
        </div>
        `,
        data: function () {
            let data = {
                players: []
            };

            return data;
        },
        components: {
            'leaderboard': leaderboard
        },
        created: function () {
            this.results = [];

            this.$http.get('/players')
                .then((response) => {
                    if (response.data && response.data.result) {
                        this.results = response.data.result;
                    }
                })
                .catch((error) => {
                    throw error;
                });
        }
    });
})();
