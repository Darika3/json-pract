

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/
let list = document.querySelector('.list');

let z = fetch('https://rickandmortyapi.com/api/character');
z.then((response) => {
  // console.log(response)
  return response.json();
}).then((i) => {
  console.log(i.results);
  list.innerHTML = '';
  i.results.forEach((elem) => {
    // console.log(elem.name)
    list.innerHTML += `<li>${elem.name}</li> 
    <br>
    <img width=50px src="${elem.image}" alt="image">`;

  });
});

// let list = document.querySelector('.list');


// let dataFetch = fetch('https://rickandmortyapi.com/api/character');
// dataFetch.then((response) => {
//     return response.json();
// }).then((info) => {
//     console.log(info);
//         fetch('http://localhost:8080/characters', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify()
//    })
// })
// .then((data) => {
//     list.innerHTML = '';
//     data.results.forEach((elem) => {
//         console.log(elem);
//         list.innerHTML += `<div class="user-n">
//         <h5>${elem.name}</h5>
//         <br>
//         <img src="${elem.image}" alt="user" width="100">
//     </div>`;
//     });
// })


/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// fetch('https://rickandmortyapi.com/api/character').then((res) => {
//   return res.json();
// }).then((i) => {
//   console.log(i.results);

//   i.results.forEach((elem) => {
//     console.log(elem)
   
//     fetch('http://localhost:3000/characters',{
//       method:"POST",
//       headers:{"Content-type": "application/json"},
//       body:JSON.stringify(elem)})

//   });
// });





/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/

let list2 = document.querySelector('.list2');

let v = fetch('http://localhost:3000/characters', {
  method: "GET",
  headers: {
      "Content-type" : "application/json"
  }
});
v.then((response) => response.json())
.then((data1) => data1)
.then((i) => {
  console.log(i.results);
  list2.innerHTML = '';
  i.results.forEach((elem) => {
    console.log(elem.name)
    list2.innerHTML += `<li>${elem.name}</li> 
    <br>
    <img width=50px src="${elem.image}" alt="image">`;

  });
});
  

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

