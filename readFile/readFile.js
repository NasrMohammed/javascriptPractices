const fs = require('fs')


function readFile() {
    fs.readFile('log.txt', function (err, data) {
        if (err) {
            throw err;
        }
        const content = data
        const wizcontent = String.fromCharCode(...content)
        const username = wizcontent.split('\n').map(function (line) {
            return line.split('|');
        }).filter(function (record) {
            return record[3] === 'note';
        }).map(function (record) {
            return record[5].split(':')[0];
        })[2]
        console.log(username)

    })
}

readFile()