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
                    goalsFor: 56,
                    goalsAgainst: 0,
                    team: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Tony',
                    goalsFor: 0,
                    goalsAgainst: 56,
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
                    damageGiven: 654,
                    damageTaken: 456,
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
                    damageGiven: 456,
                    damageTaken: 654,
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
            duration: '09:56',
            level: 'Hyrule',
            players: [
                {
                    name: 'Corey',
                    kills: 5,
                    falls: 2,
                    sds: 1,
                    character: 'Link',
                    damageGiven: 654,
                    damageTaken: 456,
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
                    damageGiven: 456,
                    damageTaken: 654,
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
            duration: '09:56',
            level: 'Hyrule',
            players: [
                {
                    name: 'Corey',
                    kills: 5,
                    falls: 2,
                    sds: 1,
                    character: 'Link',
                    damageGiven: 654,
                    damageTaken: 456,
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
                    damageGiven: 456,
                    damageTaken: 654,
                    victim: 'Tony',
                    bully: 'Tony',
                    sober: true
                }
            ]
        }
    }
];
