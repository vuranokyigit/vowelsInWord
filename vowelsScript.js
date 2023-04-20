function getWho(s) {
  const vowels = ["a","e","i","o","u"];
  const words = s.split(" ");
 
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    //console.log(word)
    
    let hasVowel = false;
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j])) {
        hasVowel = true;
        break;
      }
    }
    
    if (hasVowel) {
      console.log("Alex");
    } else {
      console.log("Chris");
    }
  }
}

getWho("cim"); // Output: Alex
getWho("dfghjk"); // Output: Chris
getWho("yutryghb"); // Output: Alex
