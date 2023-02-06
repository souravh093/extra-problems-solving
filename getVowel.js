function vowelsAndConsonants(s) {
    let vowel = 'aeiouAEIOU';
    let consonant = 'bcdfghjklmnpqrstvwxyz';
    let vowelOutput = '';
    let consonantOutput = '';
    for(let i = 0; i < s.length; i++) {
        const element = s[i];
        if(vowel.includes(element)){
            vowelOutput += element + "\n";
        }else if(consonant.includes(element)) {
            consonantOutput += element + "\n";
        }
    }
    return vowelOutput + consonantOutput;
 }

 const getVowel = vowelsAndConsonants('javascriptloops');
 console.log(getVowel);
