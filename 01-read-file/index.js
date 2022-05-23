
const fs = require('fs');
const path = require('path');
const link = path.join(__dirname, 'text.txt')
const stream = fs.createReadStream(link, 'utf-8');

let result = '';
stream.on('data', data => result += data);
stream.on('end', () => console.log(result));
stream.on('error', error => console.log('Error', error.message))

