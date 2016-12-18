(function () {
    'use strict';

    let leaderboard;

    leaderboard = {
        template: `
            <div class='container'>
                <div class='player-card row'
                    v-for='player in players'>

                    <div>
                        <a @click="selectedPlayer = {}"
                        {{ selectedPlayer }}
                    </div>

                    <div>
                        <div class='col-xs-2'>
                            <img class='avi' v-bind:src="'/ui/assets/' + player.name + '.jpg'"/>
                        </div>

                        <div class='col-xs-7'>
                            <h2>Name: {{ player.name }}</h2>
                            <h3>Score: {{ player.fullScore }}</h3>
                            <a @click="selectedPlayer = player">
                                More Deets
                            </a>
                        </div>

                        <div class='col-xs-3'>
                            <div class='fifa-quick-view'>
                                <div>Club: {{ player.fifaClubOfChoice }}</div>
                                <div>W/L: {{ player.fifaWins / (player.fifaWins + player.fifaLosses)}}</div>
                            </div>

                            <div>
                                <div>Smash: {{ player.ssbCharacterOfChoice }}</div>
                                <div>Kills: {{ player.ssbKills }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        props: ['players'],
        watch: {
            selectedPlayer: function () {
                console.log('New selectedPlayer ', this.selectedPlayer);
            }
        },
        data: function () {
            let data = {
                players: this.players,
                selectedPlayer: {}
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
