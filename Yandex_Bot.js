// ==UserScript==
// @name         bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Alena
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["Расписание матчей по Dota 2", "Dota 2 Форум", "Герои Dota 2"];
let keyword = keywords[getRandom(0, keywords.length)];

document.getElementsByName("text")[0].value = keyword;
let button = document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0];
let links = document.links;

if (button !== undefined) {
    document.getElementsByName("text")[0].value = keyword;
    document.getElementsByClassName("button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited")[0].click();
} else {
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.includes("dota2.ru")) {
            let link = links[i];
            console.log("Найдена строка " + links[i])
            link.click();
            break;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}