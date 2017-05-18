// map of characters and corresponding encrypted values
var encryptedMap = {
  a: 'm', b: 'h', c: 't', d: 'f', e: 'g', f: 'k', g: 'b', h: 'p', i: 'j', j: 'w', k: 'e',
  l: 'r', m: 'q', n: 's', o: 'l', p: 'n', q: 'i', r: 'u', s: 'o', t: 'x', u: 'z', v: 'y',
  w: 'v', x: 'd', y: 'c', z: 'a', A: 'M', B: 'H', C: 'T', D: 'F', E: 'G', F: 'K', G: 'B',
  H: 'P', I: 'J', J: 'W', K: 'E', L: 'R', M: 'Q', N: 'S', O: 'L', P: 'N', Q: 'I', R: 'U',
  S: 'O', T: 'X', U: 'Z', V: 'Y', W: 'V', X: 'D', Y: 'C', Z: 'A'
};

// this function processes the password.
function encryptPassword (password) {
  // the password is split in order to become its encrypted version.
  var passwordArray = password.split("");
  var encryptedPasswordArray = [];
 // .forEach is used to assess each character of the password.
  passwordArray.forEach(function(item){
    var encryptedCharacter;
// the if statement handles exceptions for special characters.
    if (encryptedMap[item]) {
      encryptedCharacter = encryptedMap[item];
    } else {
      encryptedCharacter = item;
    }

  encryptedPasswordArray.push(encryptedCharacter)
  })
// this returns a version of the password without spaces
  return encryptedPasswordArray.join("");
}

var encryptedPassword = encryptPassword("Pizza2Day!");
console.log(encryptedPassword);
