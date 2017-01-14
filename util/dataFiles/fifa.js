'use strict';

module.exports = [
    {
        uri: 'v2/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Tony',
                    placement: 2,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 1
                        },
                        {
                            label: 'goalsAgainst',
                            value: 2
                        }
                    ],
                    minion: 'Chelsea',
                    sober: false
                },
                {
                    name: 'Andrew',
                    placement: 1,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 2
                        },
                        {
                            label: 'goalsAgainst',
                            value: 1
                        }
                    ],
                    minion: 'Brazil',
                    sober: false
                }
            ]
        }
    },
    {
        uri: 'v2/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Matt',
                    placement: 1,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 3
                        },
                        {
                            label: 'goalsAgainst',
                            value: 1
                        }
                    ],
                    minion: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Andrew',
                    placement: 2,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 1
                        },
                        {
                            label: 'goalsAgainst',
                            value: 3
                        }
                    ],
                    minion: 'Brazil',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'v2/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Matt',
                    placement: 2,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 1
                        },
                        {
                            label: 'goalsAgainst',
                            value: 2
                        }
                    ],
                    minion: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Andrew',
                    placement: 1,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 2
                        },
                        {
                            label: 'goalsAgainst',
                            value: 1
                        }
                    ],
                    minion: 'Brazil',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'v2/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Matt',
                    placement: 2,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 2
                        },
                        {
                            label: 'goalsAgainst',
                            value: 3
                        }
                    ],
                    minion: 'Chelsea',
                    sober: true
                },
                {
                    name: 'Tony',
                    placement: 1,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 3
                        },
                        {
                            label: 'goalsAgainst',
                            value: 2
                        }
                    ],
                    minion: 'Brazil',
                    sober: true
                }
            ]
        }
    },
    {
        uri: 'v2/fifa/matchResults',
        payload: {
            players: [
                {
                    name: 'Andrew',
                    placement: 2,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 1
                        },
                        {
                            label: 'goalsAgainst',
                            value: 2
                        }
                    ],
                    minion: 'Brazil',
                    sober: false
                },
                {
                    name: 'Tony',
                    placement: 1,
                    points: [
                        {
                            label: 'goalsFor',
                            value: 2
                        },
                        {
                            label: 'goalsAgainst',
                            value: 1
                        }
                    ],
                    minion: 'Chelsea',
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
                    name: 'Andrew',
                    goalsFor: 2,
                    goalsAgainst: 2,
                    sober: false
                },
                {
                    name: 'Matt',
                    goalsFor: 2,
                    goalsAgainst: 2,
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
];
