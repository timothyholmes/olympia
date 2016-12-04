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
        uri: 'houseRecord',
        payload: {
            payload: {
                player: 'Andrew',
                game: 'SSB Brawl',
                recordName: 'Grenade Christ',
                recordValue: 'Crazy save of Tim on Hyrule'
            }
        },
    },
    {
        uri: 'fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Tony',
                    goalsFor: 1,
                    goalsAgainst: 2,
                    team: 'Chelsea',
                    sober: false
                },
                {
                    name: 'Andrew',
                    goalsFor: 2,
                    goalsAgainst: 1,
                    team: 'Brazil',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Matt',
                    goalsFor: 3,
                    goalsAgainst: 1,
                    team: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Andrew',
                    goalsFor: 1,
                    goalsAgainst: 3,
                    team: 'Brazil',
                    sober: true
                }
            ]
        }
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
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:04',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Random',
                    damageGiven: 774,
                    damageTaken: 1119,
                    victim: 'Tim',
                    bully: 'Andrew',
                    sober: true
                },
                {
                    name: 'Andrew',
                    kills: 7,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 1356,
                    damageTaken: 1051,
                    victim: 'Matt',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Random',
                    damageGiven: 1233,
                    damageTaken: 1222,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '04:11',
            level: 'Corneria',
            players: [
                {
                    name: 'Matt',
                    kills: 5,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Wolf',
                    damageGiven: 657,
                    damageTaken: 671,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                },
                {
                    name: 'Andrew',
                    kills: 8,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 634,
                    damageTaken: 676,
                    victim: 'Tim',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 1,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Random',
                    damageGiven: 604,
                    damageTaken: 602,
                    victim: 'Matt',
                    bully: 'Andrew',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:50',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 6,
                    falls: 3,
                    sds: 0,
                    position: 4,
                    character: 'Pikachu',
                    damageGiven: 1034,
                    damageTaken: 773,
                    victim: 'Tim',
                    bully: 'Andrew',
                    sober: true
                },
                {
                    name: 'Andrew',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 576,
                    damageTaken: 828,
                    victim: 'Tim',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Lucas',
                    damageGiven: 1033,
                    damageTaken: 1070,
                    victim: 'Andrew',
                    bully: 'Matt',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '05:34',
            level: 'Final Destination',
            players: [
                {
                    name: 'Matt',
                    kills: 6,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Wolf',
                    damageGiven: 662,
                    damageTaken: 701,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Andrew',
                    kills: 3,
                    falls: 3,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 823,
                    damageTaken: 665,
                    victim: 'Matt',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Random',
                    damageGiven: 600,
                    damageTaken: 703,
                    victim: 'Matt',
                    bully: 'Matt',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '08:16',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 7,
                    falls: 3,
                    sds: 0,
                    position: 4,
                    character: 'Pikachu',
                    damageGiven: 1284,
                    damageTaken: 494,
                    victim: 'Tim',
                    bully: 'Andrew',
                    sober: true
                },
                {
                    name: 'Andrew',
                    kills: 2,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 617,
                    damageTaken: 551,
                    victim: 'Matt',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Random',
                    damageGiven: 467,
                    damageTaken: 1323,
                    victim: 'Andrew',
                    bully: 'Matt',
                    sober: false
                }
            ]
        }
    }
];
