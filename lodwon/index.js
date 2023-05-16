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

/**
 * last: takes in an array a, and a number n and returns the last n values within a array.
 * 
 * @param {Array,number} value: takes in an array and a number
 * @returns {any value} value: returns the last <n> values within <a> array
 */
_.last = function (a, n) {
    if (!Array.isArray(a) || n < 0) {
        return []
    }
    else if (typeof n !== 'number') {
        return a[a.length - 1]
    }
    else {
        if (n > a.length) {
            return a
        }
        else {
            let count = n
            let index = []
            for (let i = a.length - 1; count > 0; i--) {
                index.unshift(a[i])
                count--
            }
        return index
        }
    }
}
/**
 * indexOf: Return the index of the first occurrence of a value in an array
 * 
 * @param {array} array: An array to search in
 * @param {any} value: A value to search for
 * @returns {number}: The index of the first occurrence of the value in the array, or -1 if not found
 */
_.indexOf = function(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

/**
 * each: Iterates over a collection and applies a function to each element or property
 * 
 * @param {array|object} collection: The collection to iterate over
 * @param {function} func: The function to apply to each element or property
 */
_.each = function(collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection);
            }
        }
    }
};

/**
 * unique: Return a new array of all elements from an array with duplicates removed
 * 
 * @param {array} array: An array to remove duplicates from
 * @returns {array}: A new array with duplicate elements removed
 */
_.unique = function(array) {
    const a = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(a, array[i]) === -1) {
            a.push(array[i]);
        }
    }
    return a;
};

/**
 * _.filter: Call a function for each element in an array and return a new array of elements for which the function returned true
 * 
 * @param {array} array: An array to filter
 * @param {function} func: The function to call for each element
 * @returns {array}: A new array of elements for which the function returned true
 */
_.filter = function(array, func) {
    const a = [];
    _.each(array, function(element, index, array) {
        if (func(element, index, array)) {
            a.push(element);
        }
    });
    return a;
};

/**
 * _.reject: Call a function for each element in an array and return a new array of elements for which the function returned false
 * 
 * @param {array} array: An array to reject elements from
 * @param {function} func: The function to call for each element
 * @returns {array}: A new array of elements for which the function returned false
 */
_.reject = function(array, func) {
    const a = [];
    _.each(array, function(element, index, array) {
        if (!func(element, index, array)) {
            a.push(element);
        }
    });
    return a;
};

/**

_.partition
@param {array} array: An array to partition
@param {function} func: A function to apply to each element in the array
@returns {array}: An array of two sub arrays: one containing the elements for which the function returned truthy, and one containing the elements for which the function returned falsy
*/
_.partition = function(array, func) {
    const truthyArray = [];
    const falsyArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = func(array[i], i, array);
        if (result) {
        truthyArray.push(array[i]);
    } else {
        falsyArray.push(array[i]);
        }
    } 
return [truthyArray, falsyArray];
};

/**
 * _.map: Call a function for each element in a collection and return an array of the return values
 * 
 * @param {array|object} collection: The collection to iterate over
 * @param {function} func: The function to call for each element or property
 * @returns {array}: An array of the return values of the function calls
 */
_.map = function(collection, func) {
    const newArray = [];

    _.each(collection, function(element, index, collection) {
        newArray.push(func(element, index, collection));
    });

    return newArray;
};

/**
 * _.pluck: Return an array containing the value of a specified property for every element in an array of objects
 * 
 * @param {array} array: An array of objects
 * @param {string} property: The property to extract values from
 * @returns {array}: An array containing the values of the specified property
 */
_.pluck = function(array, property) {
    return _.map(array, function(obj) {
        return obj[property];
    });
};

/**
 * _.every: Call a function for every element of a collection and return true if the function returns true for every element, otherwise return false
 * 
 * @param {array|object} collection: The collection to iterate over
 * @param {function} func: The function to call for each element or property
 * @returns {boolean}: True if the function returns true for every element, false otherwise
 */
_.every = function(collection, func) {
    if (func === undefined) {
        return _.reduce(collection, function(result, element) {
            return result && Boolean(element);
        }, true);
    }

    return _.reduce(collection, function(result, element, index, collection) {
        return result && Boolean(func(element, index, collection));
    }, true);
};

/**
 * _.some: Call a function for every element of a collection and return true if the function returns true for at least one element, otherwise return false
 * 
 * @param {array|object} collection: The collection to iterate over
 * @param {function} func: The function to call for each element or property
 * @returns {boolean}: True if the function returns true for at least one element, false otherwise
 */
_.some = function(collection, func) {
    if (func === undefined) {
        return _.reduce(collection, function(result, element) {
            return result || Boolean(element);
        }, false);
    }
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection)) {
                return true;
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (func(collection[key], key, collection)) {
                return true;
            }
        }
    }
    return false;
};

/**
 * contains: takes in an array a, and a value v and returns true if a contains v and false otherwise.
 * 
 * @param {Array,value} value: takes in an array and any value
 * @returns {boolean} value: returns true if v is in a or false otherwise
 */
_.contains = function (a, v) {
    return (a.includes(v) ? true : false);
}

/**
 * _.extend: Copy properties from multiple objects to a target object and return the updated target object
 * 
 * @param {object} target: The target object to extend
 * @param {object} sources: Objects to copy properties from
 * @returns {object}: The updated target object with copied properties
 */
_.extend = function(target, ...sources) {
    for (let source of sources) {
        for (let key in source) {
            target[key] = source[key];
        }
    }
    return target;
};

_.reduce = function(array, func, seed){
    let result;
    // determine if seed was not passed in
    if (seed === undefined){
        // use first element of array as seed
        result = array[0]; // result = 1
        for (let i = 1; i < array.length; i++){ 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
            
        }
    } else { // else it was
        result = seed; // result = 0
        for (let i = 0; i < array.length; i++){ // 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
        }
    }
    return result;
}