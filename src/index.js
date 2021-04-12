
/*Funcion generica para esconder elementos por su ID
let hide = function (elementId) {
  let elem = document.getElementById(elementId);
  elem.style.display = "none";
};
//Funcion generica para mostrar elementos por su ID
let display = function (elementId) {
  let elem = document.getElementById(elementId);
  elem.style.display = "block";
};
//Funcion para remover y agregar elemento
let el = document.getElementById("start");
el.addEventListener("click", function () {
  hide("screen1");
});
el.addEventListener("click", function () {
  display("screen2");
});
/*let valueOffset = document.getElementById("offset");
el.addEventListener("click"), (){
  document.getElementById ("offset2").value = result;s
};*/
//Funcion para obtener elemento de textarea encode
let textAreaValue = function () {
  let textArea = document.getElementById("bpdata").value;
  //   let offsetNumber = document.getElementById("offset2").value;
  let result = window.bpd.classification(textArea);
};
//   document.getElementById("decodetextarea").value = result;
// };
// //Funcion para copiar el texto Encode a Decode
document.getElementById("encodebutton").addEventListener("click", textAreaValue);

// //Funcion para obtener elemento de textarea decode
// let textAreaValue1 = function () {
//   let textArea1 = document.getElementById("decodetextarea").value;
//   let offsetNumber = document.getElementById("offset2").value;
//   let result = window.cipher.decode(offsetNumber, textArea1);
//   document.getElementById("encodetextarea").value = result;
// };
// //Funcion para copiar el texto Decode a Encode
// document.getElementById("decodebutton").addEventListener("click", textAreaValue1);
