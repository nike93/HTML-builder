const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const newFile = fs.createWriteStream('text.txt')

readline.on('SIGINT', () => {
    console.log("Файл записан! Всего хорошего!");
    readline.close();
})


readline.question('Здравствуйте! Введите текст для записи:\n', (data) => {
    
    if (data === 'exit') {
        console.log('Нет данных для записи! Всего хорошего!')
        readline.close()
    } else {        
        newFile.write(data + '\n');
        readline.on('line', (newData) => {
            if (newData === 'exit') {
                console.log("Данные записаны! Всего хорошего!");
                readline.close()
            } else {
                newFile.write(newData + '\n');
            }
        })
    }
})



