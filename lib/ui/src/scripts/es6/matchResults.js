(function () {
    'use strict';

    Vue.component('match-results', {
        template: `
        <div>
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
