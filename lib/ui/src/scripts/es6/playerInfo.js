(function () {
    'use strict';

    let leaderboard;

    leaderboard = {
        template: `
            <div class='container'>
                <div class='player-card row'
                    v-if='selectedPlayer.id !== 0'>

                    <div class='row'>
                        <div class='col-xs-2'>
                            <img class='avi' v-bind:src="'/ui/assets/' + selectedPlayer.name + '.jpg'"/>
                        </div>

                        <div class='col-xs-7'>
                            <h2>Name: {{ selectedPlayer.name }}</h2>
                            <h3>Score: {{ selectedPlayer.fullScore }}</h3>
                        </div>
                    </div>

                    <div class='row'>
                        <ul class='col-xs-4 col-xs-offset-2'>
                            <li>ssbCharacterOfChoice : {{ selectedPlayer.ssbCharacterOfChoice }} </li>
                            <li>fifaClubOfChoice : {{ selectedPlayer.fifaClubOfChoice }} </li>
                            <li>ssbKills : {{ selectedPlayer.ssbKills }} </li>
                            <li>ssbFalls : {{ selectedPlayer.ssbFalls }} </li>
                            <li>ssbGames : {{ selectedPlayer.ssbGames }} </li>
                            <li>ssbPositionPoints : {{ selectedPlayer.ssbPositionPoints }} </li>
                            <li>fifaGoalsFor : {{ selectedPlayer.fifaGoalsFor }} </li>
                            <li>fifaGoalsAgainst : {{ selectedPlayer.fifaGoalsAgainst }} </li>
                            <li>fifaWins : {{ selectedPlayer.fifaWins }} </li>
                            <li>fifaDraws : {{ selectedPlayer.fifaDraws }} </li>
                            <li>fifaLosses : {{ selectedPlayer.fifaLosses }} </li>
                        </ul>
                        <ul class='col-xs-6'>
                            <li>soberGames : {{ selectedPlayer.soberGames }} </li>
                            <li>maggedGames : {{ selectedPlayer.maggedGames }} </li>
                            <li>ssbScore : {{ selectedPlayer.ssbScore }} </li>
                            <li>fullScore : {{ selectedPlayer.fullScore }} </li>
                            <li>fifaScore : {{ selectedPlayer.fifaScore }} </li>
                            <li>ssbDamageGiven : {{ selectedPlayer.ssbDamageGiven }} </li>
                            <li>ssbDamageTaken : {{ selectedPlayer.ssbDamageTaken }} </li>
                            <li>ssbRandomGames : {{ selectedPlayer.ssbRandomGames }} </li>
                        </ul>
                    </div>

                    <a @click='selectedPlayer = { id: 0 }'>back to leaderboard</a>
                </div>

                <div class='player-card row'
                    v-for='player in players'
                    v-show='selectedPlayer.id === 0'>

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
                selectedPlayer: {
                    id: 0
                }
            };

            console.log(data);

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
