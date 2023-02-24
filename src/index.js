const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const letters = expr.match(/.{10}/g);
  let result = "";

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter === "-----") {
      result += " ";
    } else {
      const morseCode = letter
        .replace(/00/g, "")
        .replace(/10/g, ".")
        .replace(/11/g, "-");
      result += MORSE_TABLE[morseCode];
    }
  }

  return result;
}

module.exports = {
  decode,
};
