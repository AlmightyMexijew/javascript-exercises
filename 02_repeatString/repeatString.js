const repeatString = function(string,num) {
   let mystring = String(string);
   let mynum = Number(num);
   if(mynum == 0){return ''};
   if(mynum < 0){return 'ERROR'};
   for(i=1;i<mynum;i++){mystring+=string};
   return mystring;
};

// Do not edit below this line
module.exports = repeatString;
