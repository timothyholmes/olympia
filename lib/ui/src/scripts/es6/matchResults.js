(function () {
    'use strict';

    let matchTable = {
        template: `
        <div>
            <div v-show='currentFilter.path !== "fifa" && currentFilter.path !== "nhl"'>
                <table class='table'>
                    <thead>
                        <tr>
                            <th>Stage</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ singleMatchResult.level }}</td>
                            <td>{{ singleMatchResult.duration }}</td>
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
                            <th>SDs</th>
                            <th>Damage For</th>
                            <th>Damage Against</th>
                            <th>Bully</th>
                            <th>Victim</th>
                            <th>Sober</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='player in singleMatchResult.players'>
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
            </div>
            <div v-show='currentFilter.path === "fifa" || currentFilter.path === "nhl"'>
                <table class='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Goals For</th>
                            <th>Goals Against</th>
                            <th>Team</th>
                            <th>Sober</th>
                            <th>Match Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='player in singleMatchResult.players'>
                            <td>{{ player.name }}</td>
                            <td>{{ player.goalsFor }}</td>
                            <td>{{ player.goalsAgainst }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.sober }}</td>
                            <td>{{ player.matchStatus }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `,
        props: ['currentResult', 'currentFilter'],
        data: function () {
            let data = {
                singleMatchResult: this.currentResult,
                currentFilter: this.currentFilter
            };

            return data;
        }
    };

    Vue.component('match-results', {
        template: `
        <div>
            <div class='filter-row'>
                <button
                    v-for='filter in filters'
                    v-on:click="activeFilter = filter"
                    v-bind:class="{ selected: activeFilter === filter }"
                    class='btn'>
                    {{ filter.name }}
                </button>
            </div>
            <div v-show='results.length === 0'>
                No {{ activeFilter.name }} results available :^(
            </div>
            <div class='table-group' v-show='results.length > 0' v-for='result in results'>
                <match-table v-bind:current-result='result' v-bind:current-filter='activeFilter'></match-table>
            </div>
        </div>
        `,
        data: function () {
            let data = {
                activeFilter: {},
                filters: [
                    {
                        name: 'Fifa \'17',
                        path: 'fifa'
                    },
                    {
                        name: 'SSB Brawl',
                        path: 'ssb/brawl'
                    },
                    {
                        name: 'SSB 64',
                        path: 'ssb/og'
                    },
                    {
                        name: 'SSB Melee',
                        path: 'ssb/melee'
                    },
                    {
                        name: 'NHL \'17',
                        path: 'nhl'
                    }
                ],
                results: []
            };

            return data;
        },
        components: {
            'match-table': matchTable
        },
        watch: {
            activeFilter: function () {
                let pathStart = this.activeFilter.path.indexOf('ssb') > -1 ? '/' : '/points/';

                this.results = [];

                this.$http.get(pathStart + this.activeFilter.path + '/matchResults/all')
                    .then((response) => {
                        if (response.data && response.data.result) {
                            this.results = response.data.result;
                        }
                    })
                    .catch((error) => {
                        throw error;
                    });
            }
        }
    });
})();
