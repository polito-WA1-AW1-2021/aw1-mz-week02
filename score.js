"use strict";

const score = [25, 30, 18, 27, 28, 27, 30, 26];
const betterScore = [...score];

// eliminare i due voti più bassi
let minScore = Math.min(...betterScore);
let index = betterScore.indexOf(minScore);
betterScore.splice(index, 1);

minScore = Math.min(...betterScore);
index = betterScore.indexOf(minScore);
betterScore.splice(index, 1);

/*// SORT + RIMOZIONE
betterScore.sort((a, b) => (a-b));
betterScore.shift();
betterScore.shift();*/

// calcolare la media
let avg = 0;
for(const s of betterScore) {
  avg += s;
}
avg /= betterScore.length;

// arrotondare la media
avg = Math.round(avg);

// aggiungerla due volte all'array
betterScore.push(avg);
betterScore.push(avg);

console.log('better score: ' + betterScore);
console.log(`score originale: [${score}]`);


