'use strict';

const _ = require('lodash');

module.exports = function combineObjectsWithNumericalValues (first, second) {
    let combinedObject = {};

    console.log('first', first);
    console.log('second', second);

    // Avoid the n^2; make this check catch when there're no duplicate keys
    if (_.isEmpty(first) || _.isEmpty(second)) {
        return _.merge(first, second);
    }

    Object.keys(first).forEach((mainKey) => {
        Object.keys(second).forEach((comparisonKey) => {
            if (mainKey === comparisonKey) {
                combinedObject[mainKey] = first[mainKey] + second[mainKey];
            }
        });
    });

    console.log('combinedObject', combinedObject);

    return combinedObject;
};
