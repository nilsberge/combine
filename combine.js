function combine(arraysToCombine, separator) {
    'use strict';
    var strBase = [];
    var separatorVal = separator || '';
    var firstArr = arraysToCombine.shift();
    var secondArr;

    if (arraysToCombine.length) {
        secondArr = arraysToCombine.shift();
        firstArr.forEach(function (item1) {
            secondArr.forEach(function (item2) {
                strBase.push('' + item1 + separatorVal + item2);
            });
        });
        arraysToCombine.unshift(strBase);
        return combine(arraysToCombine, separatorVal);
    }
    return firstArr;
}
