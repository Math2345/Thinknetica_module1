function reverseWord(str) {
    if ( str && typeof str === 'string' && str.trim()) {
       let reverseStr = '';
       for (let i = str.length - 1; i >= 0; i--) {
           reverseStr += str[i];
       }

       return reverseStr;
    } else  {
        return "Данные не корректны, пожалуйста введите строку";
    }
}

// console.log(reverseWord('кот'));
// console.log(reverseWord('компьютер'));
// console.log(reverseWord(55));
// console.log(reverseWord(' '));