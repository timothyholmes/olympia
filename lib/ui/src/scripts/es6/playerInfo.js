(function () {
    'use strict';

    let leaderboard = {
        template: `
            <div>
                <div class='player-card' v-for='player in players'>
                    <h2>Name: {{ player.name }}</h2>
                    <div>ssbKills: {{ player.ssbKills}}</div>
                    <div>ssbFalls: {{ player.ssbFalls}}</div>
                    <div>ssbGames: {{ player.ssbGames}}</div>
                    {{ player }}
                </div>
            </div>
        `,
        props: ['players'],
        data: function () {
            let data = {
                players: this.players
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
            this.players = [];

            this.$http.get('/player')
                .then((response) => {
                    if (response.data && response.data.result) {
                        this.players = response.data.result;
                    }
                })
                .catch((error) => {
                    throw error;
                });
        }
    });
})();
