//
function introduction(name) {
    const phrase = `Hi, my name is ${name}.`;
    return phrase;
}

//
function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}

//
function introductionWithLanguageOptional(name, language) {
    // to do
    const namePhrase = `Hi, my name is ${name}`;
    const expressedLanguage = language ? language : "JavaScript";
    const phrase = `${namePhrase} and I am learning to program in ${expressedLanguage}.`
    return phrase;
}