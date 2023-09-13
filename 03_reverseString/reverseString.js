const reverseString = function(input) {
    let initialInput = String(input);
    let myarr = []
    let arr2 = []
    myarr = initialInput.split('');
    for(let i=0;i<myarr.length;i++){
        arr2.unshift(myarr[i]);
    };
    arr2 = arr2.join('');
    return arr2;
};

// Do not edit below this line
module.exports = reverseString;
