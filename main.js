"use strict"
/**
 * 1.Необходимо написать проверку, что пользователь вводим именно букву и не более одной.
 */

 // Главная функция запускающаяя игровой цикл
function Game(){
    let gameItem = {
        life: 11,
        word: chooseWordForGame(),
        emptyWord: "",
        repeatingLetter: [],
        letter: ""
    };      

    gameItem.emptyWord = createEmptyArray(gameItem.word);
    while (true) {
        
        // Проверяем была ли буква введена ранее
        while (true) {
            gameItem.letter = prompt("Введите букву: ");

            if (!checkRepeaitingLetter(gameItem.letter, gameItem.repeatingLetter)) {

                alert("Вы такую букву уже вводили");
                
            }else{
                gameItem.repeatingLetter.push(gameItem.letter);
                break;
            }
        }
        
        let winnerFlag = 0;
        if (checkLetter(gameItem.letter, gameItem.word)) {
            gameItem.emptyWord = showLetter(gameItem.letter, gameItem.word, gameItem.emptyWord);
            alert("Молодец, правильно!!!  " + gameItem.emptyWord);
            winnerFlag++;
            if(winnerFlag === gameItem.word.length){
                alert("Вы победили!!!")
                return;
            }
        }else{
            gameItem.life -= 1;
            alert(`Не угадали! У вас осталось ${
                gameItem.life} жизней.`)
            if (gameItem.life === 0) {
                alert("вы проиграли!!!");
                return;
            }
        }
        console.log(gameItem.life, gameItem.word, gameItem.emptyWord, gameItem.repeatingLetter, gameItem.letter);
    }
}

// Функция, которая выбирает слово для игры
function chooseWordForGame() {   

    let wordsForGame = ["водогрязеторфопарафинолечение","фиброэзофагогастродуоденоскопия"];

    let randomIndexMassWords = Math.floor(Math.random() 
    * wordsForGame.length);

    return wordsForGame[randomIndexMassWords];
}
 
// Функция, которая проводит проверку введеной буквы
function checkLetter(letter, word) {
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i] ) {
            return true;
        }
    }
    return false;
}
// Функция, которая проверяет былали введена буква ранее, если не введена, то добавляется ее в массив повтора
function checkRepeaitingLetter(letter, array) {
    for (let i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            return false;
        }   
    }
    return true;
}

// Функция, которая создает массив содержащий пропуски вместо букв слова для игры
function createEmptyArray(word){
    let arr = []
    for (let i = 0; i < word.length; i++) {
        arr.push("_");
    }
    return arr;
}

function showLetter(letter, word, emptyWord) {
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            emptyWord[i] = letter;
        }
    }
    return emptyWord;
}

Game();