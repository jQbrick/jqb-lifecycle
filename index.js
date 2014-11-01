/**
 * start/stop utility on a list of given features object.
 */

exports.start = function(features, config) {
    var args = Array.prototype.slice.call(arguments, 1);
    features.forEach(function(feature) {
        if (feature.init && typeof feature.init === 'function') {
            feature.init.apply(null, args);
        }
    });
    features.forEach(function(feature) {
        if (feature.start && typeof feature.start === 'function') {
            feature.start();
        }
    });
};

exports.stop = function(features) {
    features.forEach(function(feature) {
        if (feature.stop && typeof feature.stop === 'function') {
            feature.stop(config);
        }
    });
};
