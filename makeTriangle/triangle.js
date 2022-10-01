function makeLine(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        line += "*";   
    }
    return line + "\n";
}

function buildTriangle(length) {
    var line = "";
    for (let i = 1; i <= length; i++) {
        line += makeLine(i);
        
    }
    return line + "\n";
}
module.exports = buildTriangle;
console.log(buildTriangle(9));
