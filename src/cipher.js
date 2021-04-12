window.bpd = {
  classification(string) {

    let jsonStr = string.replace(/(\w+:)|(\w+ :)/g, function (s) {
      return '"' + s.substring(0, s.length - 1) + '":';
    });

    let b = jsonStr.replace(/'/g, '"');
    string = JSON.parse(b);//converts to a regular object
    console.log(string[0].atDate);

  }
};








// window.cipher = {
//   encode(offset, string) {
//     let i;
//     //Declarando variable para concatenar caracteres
//     let encodedString = ""; //Cadena vacia
//     //Recorrer cadena
//     for (i = 0; i < string.length; i++) { //Ciclo para cada caracter
//       //Obteniendo codigo ascii de cada caracter
//       let asciiCode = string.charCodeAt(i);
//       //Separando caracteres
//       if ((asciiCode >= 65) && (asciiCode <= 90)) {
//         //Formula para obtener el residuo del codigo ascci
//         let encoded = ((asciiCode - 65 + parseInt(offset)) % 26) + 65;
//         //Convirtiendo codigo ascii a string
//         let character = String.fromCharCode(encoded);
//         //Concatenando caracter
//         encodedString = encodedString.concat(character);
//       } else if ((asciiCode >= 97) && (asciiCode <= 122)) {
//         let encoded = ((asciiCode - 97 + parseInt(offset)) % 26) + 97;
//         //Convirtiendo codigo ascii a string
//         let character = String.fromCharCode(encoded);
//         //Concatenando caracter
//         encodedString = encodedString.concat(character);
//       } else {
//         encodedString = encodedString.concat(string[i]);
//       }
//     }
//     return encodedString;
//   },
//   decode(offset, string) {
//     offset = parseInt(offset);
//     let i;
//     let decodedString = "";
//     for (i = 0; i < string.length; i++) {
//       let asciiCode = string.charCodeAt(i);
//       if (asciiCode >= 65 && asciiCode <= 90) {
//         let decoded = ((asciiCode + 65 - parseInt(offset)) % 26) + 65;
//         //Convirtiendo codigo ascii a string
//         let character = String.fromCharCode(decoded);
//         //Concatenando caracter
//         decodedString = decodedString.concat(character);
//       } else if ((asciiCode >= 97) && (asciiCode <= 122)) {
//         let decoded = ((asciiCode + offset + 97) % 26) + 97;
//         let character = String.fromCharCode(decoded);
//         decodedString = decodedString.concat(character);
//       } else {
//         decodedString = decodedString.concat(string[i]);
//       }
//     }
//     return decodedString;
//   }
// };
