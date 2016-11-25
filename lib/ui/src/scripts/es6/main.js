(function () {
    'use strict';

    let vm;

    Vue.component('match-results', {
        template: `
        <div>
            <div v-for='result in results'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Stage</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ result.level }}</td>
                        <td>{{ result.duration }}</td>
                    </tr>
                </tbody>
            </table>

            <table class='table table-striped'>
                <thead>
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
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div></div>
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
