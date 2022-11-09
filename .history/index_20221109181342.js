// returns statement with one variable
function introduction(name) {
    const phrase = `Hi, my name is ${name}.`;
    return phrase;
}

// returns statement with two variables
function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}

// returns statement with two variables, substituting a default if second argument is not provided
function introductionWithLanguageOptional(name, language) {
    // to do
    const namePhrase = `Hi, my name is ${name}`;
    const expressedLanguage = language ? language : "JavaScript";
    const phrase = `${namePhrase} and I am learning to program in ${expressedLanguage}.`
    return phrase;
}

console.log(introductionWithLanguageOptional("Ann"));
console.log(introductionWithLanguageOptional("Ann","Python"));