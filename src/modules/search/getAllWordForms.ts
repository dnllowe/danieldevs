const nlp = require('compromise')

export const getAllWordForms = (word: string) => {
    
    word = word.toLowerCase()
    
    const doc = nlp(word)
    const wordForms: string[] = [] 
    const conjugations = doc.verbs().conjugate()[0]
    wordForms.push(doc.nouns().toSingular().out())
    wordForms.push(doc.nouns().toPlural().out())

    if (conjugations) {
        wordForms.push(conjugations.Actor)
        wordForms.push(conjugations.FutureTense)
        wordForms.push(conjugations.Gerund)
        wordForms.push(conjugations.Infinitive)
        wordForms.push(conjugations.Participle)
        wordForms.push(conjugations.PastTense)
        wordForms.push(conjugations.PresentTense)
    }

    const wordFormsWithEndings = wordForms.concat(getWordWithEndings(word))
    const onlyWords = wordFormsWithEndings.filter(w => w !== '' && w !== undefined)
    const distinctWords: string[] = []
    
    onlyWords.forEach(w => {
        if (!distinctWords.includes(w)) {
            distinctWords.push(w)
        }
    })
    
    return distinctWords
}

const getWordWithEndings = (word: string) => {
    
    const root = getRootWord(word)
    const rootWithDoubleLastLetter = root + root.charAt(root.length)

    const wordEndings = [ 
        root + 'ing', 
        rootWithDoubleLastLetter + 'ing',
        root + 'ings',
        rootWithDoubleLastLetter + 'ing',
        root + 'er',
        rootWithDoubleLastLetter + 'ing', 
        root + 'ers',
        rootWithDoubleLastLetter + 'ing',
        root + 'ed',
        rootWithDoubleLastLetter + 'ed'
     ]

    wordEndings.push(root + 's')
    wordEndings.push(root + 'es')

    return wordEndings
}

const removeING = (word: string) => {
    if (word.endsWith('ing')) {
        return word.slice(0, -3)
    }

    return word
}

const removeTrailingR = (word: string) => {
    if (word.endsWith('r')) {
        return word.slice(0, -1)
    }

    return word
}

const removeTrailingE = (word: string) => {
    if (word.endsWith('e')) {
        return word.slice(0, -1)
    }

    return word
}

const removeTrailingER = (word: string) => {
    return removeTrailingE(removeTrailingR(word))
}

const getRootWord = (word: string) => {
    return removeTrailingER(removeING(word))
}

