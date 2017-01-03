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
        uri: 'newPlayer',
        payload: {
            id: 105,
            name: 'Kimball',
            ssbCharacterOfChoice: 'Falco',
            fifaClubOfChoice: 'Bayern'
        },
    },
    {
        uri: 'houseRecord',
        payload: {
            player: 'Andrew',
            game: 'SSB Brawl',
            recordName: 'Grenade Christ',
            recordValue: 'Crazy save of Tim on Hyrule'
        },
    },
    {
        uri: 'houseRecord',
        payload: {
            player: 'Kimball',
            game: 'Fifa',
            recordName: 'Quickest Goal',
            recordValue: '02:20'
        },
    },
    {
        uri: 'points/fifa/matchResults',
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
        uri: 'points/fifa/matchResults',
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
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '06:15',
            level: 'Corneria',
            players: [
                {
                    name: 'Matt',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Ness',
                    damageGiven: 637,
                    damageTaken: 687,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 8,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 988,
                    damageTaken: 634,
                    victim: 'Tim',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Pikachu',
                    damageGiven: 509,
                    damageTaken: 833,
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
            duration: '05:57',
            level: 'Corneria',
            players: [
                {
                    name: 'Matt',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Pikachu',
                    damageGiven: 643,
                    damageTaken: 547,
                    victim: 'Andrew',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 452,
                    damageTaken: 632,
                    victim: 'Matt',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 6,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Pikachu',
                    damageGiven: 509,
                    damageTaken: 833,
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
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 7,
                    falls: 3,
                    sds: 1,
                    position: 4,
                    character: 'Wolf',
                    damageGiven: 1191,
                    damageTaken: 943,
                    victim: 'Tim',
                    bully: 'Andrew',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 509,
                    damageTaken: 766,
                    victim: 'Matt',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Random',
                    damageGiven: 1036,
                    damageTaken: 1070,
                    victim: 'Matt',
                    bully: 'Andrew',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'points/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Tony',
                    goalsFor: 3,
                    goalsAgainst: 1,
                    team: 'Chelsea',
                    sober: false
                },
                {
                    name: 'Andrew',
                    goalsFor: 1,
                    goalsAgainst: 3,
                    team: 'Dortmund',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'points/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Tony',
                    goalsFor: 0,
                    goalsAgainst: 0,
                    team: 'Chelsea',
                    sober: false
                },
                {
                    name: 'Matt',
                    goalsFor: 0,
                    goalsAgainst: 0,
                    team: 'Bayern',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 10,
                    falls: 5,
                    sds: 0,
                    position: 4,
                    character: 'Wolf',
                    damageGiven: 992,
                    damageTaken: 872,
                    victim: 'Andrew',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 4,
                    falls: 7,
                    sds: 0,
                    position: 2,
                    character: 'Snake',
                    damageGiven: 724,
                    damageTaken: 784,
                    victim: 'Matt',
                    bully: 'Matt',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 5,
                    falls: 7,
                    sds: 0,
                    position: 3,
                    character: 'Pikachu',
                    damageGiven: 892,
                    damageTaken: 956,
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
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Matt',
                    kills: 2,
                    falls: 7,
                    sds: 0,
                    position: 2,
                    character: 'Pikachu',
                    damageGiven: 1094,
                    damageTaken: 1021,
                    victim: 'Andrew',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Andrew',
                    kills: 9,
                    falls: 5,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 1077,
                    damageTaken: 1301,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: false
                },
                {
                    name: 'Tim',
                    kills: 8,
                    falls: 7,
                    sds: 0,
                    position: 3,
                    character: 'Lucas',
                    damageGiven: 1313,
                    damageTaken: 1209,
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
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Andrew',
                    kills: 2,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Snake',
                    damageGiven: 566,
                    damageTaken: 914,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Tim',
                    kills: 5,
                    falls: 2,
                    sds: 0,
                    position: 4,
                    character: 'Lucas',
                    damageGiven: 914,
                    damageTaken: 595,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Andrew',
                    kills: 4,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Ike',
                    damageGiven: 565,
                    damageTaken: 887,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Tim',
                    kills: 5,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Lucas',
                    damageGiven: 887,
                    damageTaken: 567,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:26',
            level: 'Hyrule',
            players: [
                {
                    name: 'Andrew',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Pikachu',
                    damageGiven: 828,
                    damageTaken: 746,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Tim',
                    kills: 5,
                    falls: 3,
                    sds: 0,
                    position: 4,
                    character: 'ROB',
                    damageGiven: 754,
                    damageTaken: 828,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '04:56',
            level: 'Corneria',
            players: [
                {
                    name: 'Andrew',
                    kills: 5,
                    falls: 3,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 664,
                    damageTaken: 482,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Tim',
                    kills: 3,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Diddy Kong',
                    damageGiven: 482,
                    damageTaken: 664,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'ssb/brawl/matchResults',
        payload: {
            duration: '09:44',
            level: 'Hyrule',
            players: [
                {
                    name: 'Andrew',
                    kills: 6,
                    falls: 4,
                    sds: 0,
                    position: 4,
                    character: 'Snake',
                    damageGiven: 1386,
                    damageTaken: 1051,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                },
                {
                    name: 'Tim',
                    kills: 7,
                    falls: 5,
                    sds: 0,
                    position: 3,
                    character: 'Lucas',
                    damageGiven: 1088,
                    damageTaken: 1302,
                    victim: 'Andrew',
                    bully: 'Andrew',
                    sober: true
                },
                {
                    name: 'Kimball',
                    kills: 1,
                    falls: 5,
                    sds: 0,
                    position: 2,
                    character: 'Falco',
                    damageGiven: 676,
                    damageTaken: 831,
                    victim: 'Tim',
                    bully: 'Tim',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'points/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Andrew',
                    goalsFor: 3,
                    goalsAgainst: 2,
                    team: 'Brazil',
                    sober: true
                },
                {
                    name: 'Kimball',
                    goalsFor: 2,
                    goalsAgainst: 3,
                    team: 'France',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'points/nhl/matchResults',
        payload: {
            players: [
                {
                    name: 'Tony',
                    goalsFor: 3,
                    goalsAgainst: 2,
                    sober: false
                },
                {
                    name: 'Andrew',
                    goalsFor: 2,
                    goalsAgainst: 3,
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'points/nhl/matchResults',
        payload: {
            players: [
                {
                    name: 'Tim',
                    goalsFor: 2,
                    goalsAgainst: 1,
                    sober: false
                },
                {
                    name: 'Matt',
                    goalsFor: 1,
                    goalsAgainst: 2,
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'points/nhl/matchResults',
        payload: {
            players: [
                {
                    name: 'Tim',
                    goalsFor: 1,
                    goalsAgainst: 11,
                    sober: false
                },
                {
                    name: 'Tony',
                    goalsFor: 11,
                    goalsAgainst: 1,
                    sober: false
                }
            ]
        }
    },
];
