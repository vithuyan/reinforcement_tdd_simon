module.exports = {
  echo: (str) => { return str },
  shout: (str) => { return str.toUpperCase() },
  repeat: (str,num) => { return (str + " ").repeat(num).trimRight()},
  startOfWord: (str, num ) => { return str.substring(0,num)},
  firstWord: (words) => { return words.split(" ")[0] }};
