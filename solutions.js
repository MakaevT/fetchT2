// _____________Запрос________________________________________
// fetch ("https://this-site-doesnt-exists.intocode")
// .then((response) => response.json())
// .then((data) => data) 
//____________________________________________________________



// ________________Отлов ошибки________________________________
// fetch ("https://this-site-doesnt-exists.intocode")
// .then((response) => response.json())
// .then((data) => data) 
// .catch(
//     () => {
//       console.log('Ошибка!')
//     }
// )____________________________________________________________


//__________________Получение ответа ввиде обьекта______________
//  fetch ("https://reqres.in/api/users")
//  .then((response) => response.json(console.log(response)))
// _____________________________________________________________


// ____________Запрос с выводов кол-ва элементов массива________
// fetch ("https://reqres.in/api/users")
//  .then((response) => response.json())
//  .then((data) => {
//     const count = data.data.length
//     console.log(`Количество элементов в массиве: ${count}`)
//  })
// _____________________________________________________________
   

// _____________Запрос на вывод почты___________________________
// fetch("https://reqres.in/api/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.data.email);
//   });
// _____________________________________________________________



// const name = {"first_name": "intocode"}
// const url = "https://reqres.in/api/users"
// const option = {
//     method : 'POST',
//     body: JSON.stringify(name),
//     headers:{
//         "Content-type": "application/json"
//     }
// }
// fetch(url,option)
// .then(res => res.json())
// .then(data => console.log(data))

