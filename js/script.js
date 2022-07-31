'use strict';

const input = document.querySelector('input');

input.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send();
})