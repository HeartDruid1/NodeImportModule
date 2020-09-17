const fs = require('fs');
const path = require('path');

// declarative syntax
// create a function initDir - one param dir
// check to see if the directory (dir) does not exist
// if not exist, make the directory dir
// sync

const nl = () => {
    console.log('\n______________');
}

/**
 * create a directory if it does not exist
 * @param {string} dir the directory to create
 */
function initDir(dir) {
    if(!fs.existsSync(dir)) {
        console.log('Initializing Directory');
        fs.mkdirSync(dir);
    } else {
        console.log('Specified Directory Already Exists');
    }
}

function readAndPrompt(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;

        nl();
        console.log(`\nRead contents of: ${path.basename(filePath)}\n`);
        console.log(data);
        console.log('Enter Name (type exit to close the app)')
    });
}

function addToFile(filePath, contentsToAdd) {
    fs.appendFile(filePath, contentsToAdd, err => {
        if (err) throw err;
    });

    readAndPrompt(filePath);
}

module.exports = {
    initDir,
    addToFile
}