'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes in any value and returns it unchanged
 * 
 * @param {any value} value: takes any value
 * @returns {any value} value: returns the value unchanged
 */
function identity(value) {
    return value;
}

/**
 * typeOf: takes in any value and returns the type of said value as a string
 * 
 * @param {any value} value: takes in any value
 * @returns {any value} value: returns the type of that value as a string
 */
function typeOf(v) {
    if (typeof v === 'object') {
        if (Array.isArray(v)) {
            return 'array'
        }
        else if (v === null) {
            return 'null'
        }
        else {
            return 'object'
        }
    }
    return typeof v
}

/**
 * first: takes in an array a, and a number n and returns the first n values within a array.
 * 
 * @param {Array,number} value: takes in an array and a number
 * @returns {any value} value: returns the first <n> values within <a> array
 */
function first(a, n) {
    if (!Array.isArray(a) || n < 0) {
        return []
    }
    else if (typeof n !== 'number') {
        return a[0]
    }
    else {
        if (n > a.length) {
            return a
        }
        else {
            let index = []
            for (let i = 0; i < n; i++) {
                index.push(a[i])
            }
        return index
        }
    }
}