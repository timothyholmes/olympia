(function () {
    'use strict';

    let matchFilters = {
        template: `
        <div class='filter-row'>
            <button
                v-for='filter in filters'
                v-on:click="activeFilter = filter"
                v-bind:class="{ selected: activeFilter === filter }"
                class='btn'>
                {{ filter.name }}
            </button>
        </div>
        `,
        data: function () {
            let data = {
                activeFilter: {},
                filters: [
                    {
                        name: 'Fifa \'16',
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
                    }
                ]
            };

            return data;
        }
    };

    Vue.component('match-results', {
        template: `
        <div>
            <match-filters></match-filters>
            <div class='table-group' v-for='result in results'>
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
                            <th>SDs</th>
                            <th>Damage For</th>
                            <th>Damage Against</th>
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
            </div>
        </div>
        `,
        components: {
            'match-filters': matchFilters
        },
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
})();
