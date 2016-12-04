'use strict';

module.exports = [
    {
        uri: 'newPlayer',
        payload: {
            id: 100,
            name: 'Tim',
            ssbCharacterOfChoice: 'Pikachu',
            fifaClubOfChoice: 'Manchester United'
        }
    },
    {
        uri: 'newPlayer',
        payload: {
            id: 101,
            name: 'Matt',
            ssbCharacterOfChoice: 'Wolf',
            fifaClubOfChoice: 'Chelsea'
        },
    },
    {
        uri: 'newPlayer',
        payload: {
            id: 103,
            name: 'Andrew',
            ssbCharacterOfChoice: 'Snake',
            fifaClubOfChoice: 'Manchester City'
        },
    },
    {
        uri: 'newPlayer',
        payload: {
            id: 104,
            name: 'Tony',
            ssbCharacterOfChoice: 'Kirby',
            fifaClubOfChoice: 'Chelsea'
        },
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '07:42',
            level: 'Hyrule',
            players: [
                {
                    name: 'Tony',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Kirby',
                    damageGiven: 584,
                    damageTaken: 811,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 6,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 663,
                    damageTaken: 713,
                    victim: 'Tony',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 5,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Pikachu',
                    damageGiven: 923,
                    damageTaken: 645,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: false
                }
            ]
        }
    }
];
