(function () {
    'use strict';

    let vm;

    Vue.component('match-results', {
        template: `
        <div>
            <table v-for='result in results' class='table table-striped'>
                <tr>
                    <th>Duration</th>
                    <th>Level</th>
                </tr>
                <tr>
                    <td>{{ result.duration }}</td>
                    <td>{{ result.level }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Character</th>
                    <th>Kills</th>
                    <th>Falls</th>
                    <th>Self Deaths</th>
                    <th>Damage Given</th>
                    <th>Damage Taken</th>
                    <th>Bully</th>
                    <th>Victim</th>
                    <th>Sober</th>
                </tr>
                <tr v-for='player in result.players'>
                    <td>{{ player.name }}</td>
                    <td>{{ player.character }}</td>
                    <td>{{ player.kills }}</td>
                    <td>{{ player.falls }}</td>
                    <td>{{ player.sds }}</td>
                    <td>{{ player.damageGiven }}</td>
                    <td>{{ player.damageTaken }}</td>
                    <td>{{ player.bully }}</td>
                    <td>{{ player.victim }}</td>
                    <td>{{ player.sober }}</td>
                </tr>
            </table>
        </div>
        `,
        data: function () {
            let data = {
                results: {}
            };

            return data;
        },
        created: function () {
            this.$http.get('/ssb/brawl/matchResults/')
                .then((response) => {
                    this.results = response.data.result;
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
