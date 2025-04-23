function reverseString(userString) {
    if (userString.length === "" || userString === 1) {
        return userString;
        
    }
        return userString.split('').reverse().join('');
    
    }

console.log(reverseString("c"));