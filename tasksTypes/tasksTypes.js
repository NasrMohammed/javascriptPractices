function tasksTypes(deadlines, day) {
    let [today, upcoming, later] = [0,0,0]
    deadlines.forEach((deadline) => {
        if (deadline <= day) {
            today++ 
        } else if (deadline >= day + 1 && deadline <= day + 7 ){
            upcoming++
        } else {
            later++
        }
    });
    return [today, upcoming, later]
}
console.log(tasksTypes([1,2,3,4,5],2))