'use strict';

module.exports = [
    {
        uri: 'newPlayer',
        payload: {
            id: 100,
            name: 'Tony',
            ssbCharacterOfChoice: 'Kirby',
            fifaClubOfChoice: 'DC United'
        }
    },
    {
        uri: 'newPlayer',
        payload: {
            id: 101,
            name: 'Corey',
            ssbCharacterOfChoice: 'Dr. Mario',
            fifaClubOfChoice: 'Chelsea'
        },
    },
    {
        uri: 'houseRecord',
        payload: {
            payload: {
                player: 'Corey',
                game: 'Fifa \'16',
                recordName: 'Biggest Horse',
                recordValue: '900 lbs'
            }
        },
    },
    {
        uri: 'fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Corey',
                    goalsFor: 3,
                    goalsAgainst: 2,
                    team: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Tony',
                    goalsFor: 2,
                    goalsAgainst: 3,
                    team: 'DC United',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:56',
            level: 'Hyrule',
            players: [
                {
                    name: 'Corey',
                    kills: 5,
                    falls: 2,
                    sds: 1,
                    character: 'Link',
                    damageGiven: 100,
                    damageTaken: 100,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: false
                },
                {
                    name: 'Tony',
                    kills: 1,
                    falls: 5,
                    sds: 0,
                    character: 'Kirby',
                    damageGiven: 100,
                    damageTaken: 100,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/melee/matchResults',
        payload: {
            duration: '07:54',
            level: 'Corneria',
            players: [
                {
                    name: 'Corey',
                    kills: 5,
                    falls: 2,
                    sds: 1,
                    character: 'Mewtwo',
                    damageGiven: 100,
                    damageTaken: 100,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: false
                },
                {
                    name: 'Tony',
                    kills: 1,
                    falls: 5,
                    sds: 0,
                    character: 'Kirby',
                    damageGiven: 100,
                    damageTaken: 100,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/og/matchResults',
        payload: {
            duration: '05:35',
            level: 'Sector Z',
            players: [
                {
                    name: 'Corey',
                    kills: 5,
                    falls: 4,
                    sds: 0,
                    character: 'Ness',
                    damageGiven: 150,
                    damageTaken: 150,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: false
                },
                {
                    name: 'Tony',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    character: 'Kirby',
                    damageGiven: 150,
                    damageTaken: 150,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: true
                }
            ]
        }
    }
];
