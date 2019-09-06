"use strict";

$(function () {

    //JEZYKI
    $('.pl').on('click', () => {
        chrome.storage.sync.set({lang: 'pl'});
    });

    $('.eng').on('click', () => {
        chrome.storage.sync.set({lang: 'eng'});
    });

    //MOTYWY
    $('.dark').on('click', () => {
        chrome.storage.sync.set({theme: 'dark'});
    });

    $('.light').on('click', () => {
        chrome.storage.sync.set({theme: 'light'});
    });

    $('.kopi').on('click', () => {
        chrome.storage.sync.set({theme: 'kopi'});
    });

    //ROZMIAR CZCIONKI
    $('.normal').on('click', () => {
        chrome.storage.sync.set({size: 'normal'});
    });

    $('.big').on('click', () => {
        chrome.storage.sync.set({size: 'big'});
    });

    //POWIADOMIENIA
    $('.option-change-lang').on('click', function () {
        alert('======================\n' +
            '\xa0\xa0\xa0\xa0\xa0\xa0\xa0JĘZYK ZMIENIONY\n' +
            '======================');
    });

    $('.option-change').on('click', function () {
        alert('======================\n' +
            '\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOTYW ZMIENIONY\n' +
            '======================');
    });

    $('.fs-btn').on('click', function () {
        alert('==============================\n' +
            '\xa0\xa0\xa0\xa0\xa0\xa0\xa0ROZMIAR LITER ZMIENIONY\n' +
            '==============================');
    });
});