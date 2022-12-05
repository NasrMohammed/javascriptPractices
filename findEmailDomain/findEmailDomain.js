function findEmailDomain(address) {
    const lastAtIndex = address.lastIndexOf('@');

    return address.slice(lastAtIndex + 1, address.length)
}
console.log(findEmailDomain('nsd6q764643@nasr.com'))
console.log(findEmailDomain('4384sfskdfsdfsdfs54644sdsdfs@qatarworldcup2022.com'))