const fs = require('fs');


function cloneFile() {
    fs.copyFile('dev7\\web\\tamuct-nmohammed-qa\\web\\css\\index.tcf', 'C:\\Users\\nmohammed\\Desktop\\Leepfrog.Test.Automation\\cypress\\fixtures\\index.tcf', (err) => {
        if (err) throw err;
        console.log('File was copied to destination');
    });
}
cloneFile();