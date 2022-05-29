const removeFromArray = function(arr, ...toRemove) {
    for (let n=0; n < toRemove.length; n++) {
        for (let i=0; i < arr.length; i++) {
            if (arr[i] === toRemove[n]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
