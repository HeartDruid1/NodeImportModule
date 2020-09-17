const myModule = require('./myModule');

// initialize a directory to write files
myModule.initDir('files');

const fileName = './files/names.txt';
console.log('Enter name (type exit to close app): ');

myModule.addToFile(fileName, '\nNick');