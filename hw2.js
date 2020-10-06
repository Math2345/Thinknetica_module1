function lengthStr(str) {
   const isWord = /^[a-zа-я]+$/i.test(str);

   if (str && typeof str === 'string' && isWord) {
      return 'Количество букв слова = ' + str.length;
   } else {
      return "Данные не корректны, пожалуйста введите слово";
   }

}

// tests

// console.log(lengthStr('sssss'));
// console.log(lengthStr('JavaScript'));
// console.log(lengthStr(' '));
// console.log(lengthStr(''));
// console.log(lengthStr('898988'));
// console.log(lengthStr('898988ddd'));
// console.log(lengthStr(55));
// console.log(lengthStr(true));
// console.log(lengthStr(null));