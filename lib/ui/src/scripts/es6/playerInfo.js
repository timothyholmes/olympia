(function () {
    'use strict';

    let leaderboard = {
        template: `
            <div>
                <div class='player-card row' v-for='player in players'>
                    <div class='col-xs-3'>
                        <img class='avi' v-bind:src="'/ui/assets/' + player.name + '.jpg'"/>
                    </div>

                    <div class='col-xs-9'>
                        <h2>Name: {{ player.name }}</h2>
                        <h3>Score: {{ player.fullScore }}</h3>
                    </div>
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
