/* This program accepts a text as input and converts only the alphabetic characters
within the text to their corresponding positions in the alphabet. 
It then returns the resulting positions as a string.*/

// Solution 1
function alphabetPosition(text) {
  const positions = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
    t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  const arr = [];
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (character in positions) {
      arr.push(positions[character]);
    }
  }

  return arr.join(' ');
}

// Solution 2
function alphabetPosition(text) {
  const arr = [];

  for (let i = 0; i < text.length; i++) {
    const characterPosition = text.toUpperCase().charCodeAt(i) - 64;
    if (characterPosition >= 1 && characterPosition <= 26) {
      arr.push(characterPosition);
    }
  }

  return arr.join(' ');
}


console.log(alphabetPosition("I told Paul, 'Go home, it's late!'"));