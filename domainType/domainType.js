function domainType(domains) {
    const domainType = []

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split('.');
        const lastDomain = domain[domain.length -1];

        if (lastDomain === 'org') {
            domainType.push('organization')
        } else if (lastDomain === 'com') {
            domainType.push('commercial')
        } else if (lastDomain === 'net') {
            domainType.push('network')
        } else  if (lastDomain === 'info') {
            domainType.push('information')
        }
    }
    return domainType;
}

console.log(domainType(["nasr.org", "sam.net", "code.info", "wiki.com"]));