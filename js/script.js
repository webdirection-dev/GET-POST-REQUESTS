window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const form = document.querySelector('form');

    // GET-запросы
    function requestsGET () {

        // // // I. Самый старый способ взаимодействия AJAX с сервером
        // // // Используем Конструктор нового объекта, ассинхронно работующего с сервером
        // const request = new XMLHttpRequest();
        //
        // //Вызываем методы нового объекта request = {}
        // // OPEN. Get - название передаваемого метода запроса
        // // и url адрес сервера
        // request.open('GET', 'http://localhost:3000/people');
        //
        // //Настройка заголовков
        // // Content-type - тип заголовка
        // // application/json; charset=utf-8 - значение ответа и его utf кодировка
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //
        // //Отправить запрос на сервер
        // // Аргументы для метода send() заполняются только при POST-запросах
        // request.send();
        //
        // // Взаимодействие с ответом от сервера
        //
        // // readystatechange - событие отследит состояния запроса, которые хрятятся в request.readyState
        // // состоянии запроса https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
        // // request.status коды статуса https://developer.mozilla.org/ru/docs/Web/HTTP/Status
        // // request.response - ответ в формате JSON
        // request.addEventListener('readystatechange', function () {
        //     if (request.readyState === 4 && request.status === 200) {
        //         //распарсим в объект полученный json
        //         let data = JSON.parse(request.response);
        //         console.log(data);
        //     } else console.error('Что-то пошло не так...');
        // });
        //
        // // вместо readystatechange можно использовать событие LOADED и не мониторить состояния запроса
        // request.addEventListener('load', function () {
        //     if (request.status === 200) {
        //         //распарсим в объект полученный json
        //         let data = JSON.parse(request.response);
        //         console.log(data);
        //
        //         // создать карточки пользователей
        //         createCard(data);
        //
        //     } else console.error('Что-то пошло не так...');
        // });

        // II. FETCH and AXIOS - современные способы работы с сервером

        // fetch api - нативная возможность // ПРОМИСЫ
        // getResourceFETCH('http://localhost:3000/people')
        //     .then(newPromise => createCard(newPromise))
        //     .catch(err => console.error(err));

        // axios - сторонняя библиотека
        // getResourceAXIOS('http://localhost:3000/people')
        //     .then(newPromise => createCard(newPromise.data))
        //     .catch(err => console.error(err));

        this.remove();
    }
    document.querySelector('button').addEventListener('click', requestsGET, {'once': true});

    // POST-запросы в формате JSON
    function requestsPOSTtoJSON (event) {
        event.preventDefault();

        // // FORM-DATA Получить данные из формы. Современный способ
        // // formData.append() - внутренний метод объекта FormData
        // let formData = new FormData(form);
        // formData.append('id', Math.random());
        //
        // // Готовим данные для отправки на сервер
        // let objOut = {};
        //
        // formData.forEach((value, key) => {
        //     objOut[key] = value;
        // });

        // // Вручную создам и обавляем новый объект в файл .json
        // let body = {
        //     id: Math.random(),
        //     name: 'Someone',
        //     surname: 'Else',
        //     age: 26,
        // };
        // // Конвертируем объект body в формат json
        // let jsonPOST = JSON.stringify(body);

        // // I. Самый старый способ взаимодействия AJAX с сервером
        // Используем Конструктор нового объекта, ассинхронно работующего с сервером
        // const request = new XMLHttpRequest();
        //
        // //Вызываем методы нового объекта request = {}
        // // OPEN. Get - название передаваемого метода запроса
        // // и url адрес сервера
        // request.open('POST', 'http://localhost:3000/people');
        //
        // //Настройка заголовков
        // // Content-type - тип заголовка
        // // application/json; charset=utf-8 - значение ответа и его utf кодировка
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //
        // //Отправить запрос на сервер
        // // Аргументы для метода send() заполняются только при POST-запросах
        // let jsonPOST = JSON.stringify(objOut);
        // request.send(jsonPOST);
        //
        // // вместо readystatechange можно использовать событие LOADED и не мониторить состояния запроса
        // request.addEventListener('load', function () {
        //     if (request.status === 200) {
        //         //распарсим в объект полученный json
        //         let data = JSON.parse(request.response);
        //         console.log(data);
        //
        //     } else console.error('Что-то пошло не так...');
        // });

        // II. FETCH and AXIOS - современные способы работы с сервером

        // fetch api - нативная возможность // ПРОМИСЫ
        // getResourceFETCHtoJSON('http://localhost:3000/people', objOut)
        //     .then(newPromise => createCard(newPromise))
        //     .catch(err => console.error(err));

        // axios - сторонняя библиотека
        // axios.post('http://localhost:3000/people', objOut);
    }
    form.addEventListener('submit', (event) => requestsPOSTtoJSON(event), {'once': true});

    // POST-запросы в обычном формате
    function requestsPOSTtoTXT (event) {
        event.preventDefault();

        // FORM-DATA Получить данные из формы. Современный способ
        // formData.append() - внутренний метод объекта FormData
        let formData = new FormData(form);

        // I. Самый старый способ взаимодействия AJAX с сервером
        // Используем Конструктор нового объекта, ассинхронно работующего с сервером
        const request = new XMLHttpRequest();

        //Вызываем методы нового объекта request = {}
        // OPEN. Get - название передаваемого метода запроса
        // и url адрес сервера
        request.open('POST', './server/server.php');

        //Настройка заголовков
        // Content-type - тип заголовка
        // application/json; charset=utf-8 - значение ответа и его utf кодировка
        // request.setRequestHeader('Content-type', 'multipart/form-data');

        //Отправить запрос на сервер
        // Аргументы для метода send() заполняются только при POST-запросах
        request.send(formData);

        // вместо readystatechange можно использовать событие LOADED и не мониторить состояния запроса
        request.addEventListener('load', function () {
            if (request.status === 200) {
                console.log(request.response);

            } else console.error('Что-то пошло не так...');
        });

        // II. FETCH and AXIOS - современные способы работы с сервером

        // fetch api - нативная возможность // ПРОМИСЫ
        // getResourceFETCH('./server/server.php', formData)
        //     .then(newPromise => console.log(newPromise))
        //     .catch(err => console.error(err));

        // axios - сторонняя библиотека
        // axios({
        //     method: 'post',
        //     url: './server/server.php',
        //     data: formData,
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        //     .then(data => console.log(data.data));
    }
    form.addEventListener('submit', (event) => requestsPOSTtoTXT(event), {'once': true});


    // Технические

    // Динамическое создание карточек
    function createCard (response) {
        response.forEach(item => {
            let card = document.createElement('div'),
                icon;

            if (item.sex === 'male') icon = 'icon/mars.png'
            else icon = 'icon/female.png';

            card.classList.add('card');

            card.innerHTML = `
                        <img src="${item.photo}" alt="...">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex"><img src=${icon} alt="..."></div>
                        <div class="age">${item.age}</div>
                    `;

            document.querySelector('.app').appendChild(card);
        });
    }

    // FETCH. JSON. GET запросы на сервер. Запросы, проверка ответов и т.д
    async function getResourceFETCHtoJSON (url, data) {
        const responseFetch = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        if (!responseFetch.ok) throw new Error(`Could not fetch ${url}, status: ${responseFetch.status}`);

        // responseFetch.json() - .json() собственный метод у fetch, ВОЗВРАЩАЕТ НОВЫЙ ПРОМИС!!!
        return await responseFetch.json();
    }

    // FETCH. Обычные POST запросы на сервер. Запросы, проверка ответов и т.д
    async function getResourceFETCH (url, data) {
        let responseFetch = await fetch(`${url}`, {
            method: 'POST',
            body: data
        });

        if (!responseFetch.ok) throw new Error(`Could not fetch ${url}, status: ${responseFetch.status}`);

        // responseFetch.json() - .text() собственный метод у fetch, ВОЗВРАЩАЕТ НОВЫЙ ПРОМИС!!!
        return await responseFetch.text();
    }

    // AXIOS& GET запросы на сервер при помощи библиотеки
    async function getResourceAXIOS (url) {
        const responseAXIOS = await axios(`${url}`);

        if (responseAXIOS.status !== 200) throw new Error(`Could not fetch ${url}, status: ${responseAXIOS.status}`);

        return responseAXIOS;
    }
});