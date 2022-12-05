function flattenArray(arr) {
    const oneArray = [];
    
    flatten(arr);

    function flatten(arr) {
        arr.forEach((element) => {
            if(Array.isArray(element)) {
                console.log(element + ' is an array')
                flatten(element)
            } else {
               console.log(element + ' is not an array')
                oneArray.push(element);
            }
        });
    }
    return oneArray;
}
console.log(flattenArray([[["a"]], [["b"]]]))