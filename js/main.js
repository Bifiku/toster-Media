'use strict';

import { fetchData } from './modules/fetchData.js';
import startTimer from './modules/timer.js';
import Button from './classes/button.js';

document.addEventListener('DOMContentLoaded', () => {
    // Путь к локальному файлу с данными
    const jsonFilePath = '../api/data.json';

    // Получаем промис
    const data = fetchData(jsonFilePath);

    // Функция получения данных
    async function dataResponce() {
        try {
            const dataJson = await data; // Дожидаемся ответ промиса

            // Создаем кнопки включанная данные
            let buttonOptionColors = new Button();
            buttonOptionColors.getElement(
                '#selectedOptionColors',
                dataJson.dataColors
            );

            let selectedOptionSizes = new Button();
            selectedOptionSizes.getElement(
                '#selectedOptionSizes',
                dataJson.sizes
            );

            const endDate = new Date(dataJson.date);
            startTimer('timer', endDate);

            document.querySelector(
                '#oldSale'
            ).innerHTML = `R ${dataJson.sales.oldSale}`;
            document.querySelector(
                '#newSale'
            ).innerHTML = `R ${dataJson.sales.newSale}`;
        } catch (error) {
            console.error('Произошла ошибка:', error); // Обрабатываем ошибку
        }
    }

    dataResponce(); // Вызываем функцию
});
