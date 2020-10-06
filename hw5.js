function accessСheck(user) {
   if (user && typeof user === "object") {
       let message = '';

       if ( (user.isAdmin) || ( (user.age >= 18 && user.age <= 35) && user.paid && !user.blocked && !user.badUsername )){
           message = 'Ваш профиль успешно сохранен. Добро пожаловать на наш сайт';
       } else {
           message = 'Доступ на сайт запрещен';
       }

       return message;

   } else {
       return "Данные не корректны";
   }
}

// console.log(accessСheck(
// {
//     age: 18,
//     paid: true,
//     blocked: false,
//     badUsername: false,
//     isAdmin: false
// }));
//
// console.log(accessСheck('rgeyhjyj'));
// console.log(accessСheck(''));
// console.log(accessСheck(
//     {
//         paid: true,
//         blocked: false,
//         badUsername: false,
//         isAdmin: true
//     }));

