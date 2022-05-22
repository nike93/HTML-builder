const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


fs.open('text.txt', 'w', (err) => {
    if (err) throw err;
})

readline.question('Введите текст для записи:\n', (data) => {
    console.log(data);
    //readline.close();

    if (data === 'exit') {
        readline.close()
    } else {
        
    fs.appendFile('text.txt', data, (err) => {
        if (err) throw err;
    })
    }
})

