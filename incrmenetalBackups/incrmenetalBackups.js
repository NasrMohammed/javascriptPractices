function incrmenetalBackups(lastBackupTime, changes) {
    const fieIds = [];
    for(let change of changes) {
        const fileBackuptime = change[0]
        const filedId = change[1]

        if(fileBackuptime > lastBackupTime) {
            if(!fieIds.includes(filedId)) {
                fieIds.push(filedId)
            }
        }
    }
    return fieIds.sort((fileId1, fileId2) => fileId1 - fileId2);
}

console.log(incrmenetalBackups(461620205, [[461620203, 1],  [461620204, 6], 
[461620204, 2],
[461620205, 6],
[461620206, 5],
[461620207, 3],
[461620207, 5],
]))