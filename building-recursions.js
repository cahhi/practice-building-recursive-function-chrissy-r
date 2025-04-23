/*function reverseString(userString) {
    if (userString.length === "" || userString === 1) {
        return userString;
        
    } if(userString.length>1){
        //return userString.split('').reverse().join('');
        lastLetter = userString.slice(userString - 1, userString.length);
        remainingLetter = userString.slice(0,userString.length -1);
        return reverseString(lastLetter) + reverseString(remainingLetter);
    }
}

console.log(reverseString("hello"));*/


function reverseString(str) {
    if (str.length === 1 || str === "") {
        return str
    }
    if (str.length > 1) {
        lastLetter = str.slice(str.length - 1,str.length);
        remainingLetters = str.slice(0,str.length - 1);
        return reverseString(lastLetter) + reverseString(remainingLetters);
    }
}
console.log(reverseString('Pizza'));