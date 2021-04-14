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

let textAreaValue = function () { //Obtainig the texarea element with this function
  let textArea = document.getElementById("bpdata").value;
  let result = window.bpd.hypertensionClassification(textArea);
  console.log(result);
  document.getElementById("resultTextarea").value = result; //Changing the value and showing the result in resultTextArea
};
document.getElementById("classButton").addEventListener("click", textAreaValue);

//Function to obtain the eGFR value
let textAreaValue1 = function () {
  let textArea1 = document.getElementById("egfrdata").value;
  let result = window.bpd.kidneyClassification(textArea1);
  document.getElementById("resultKdc").value = result;
};
// //Funcion para copiar el texto Decode a Encode
document.getElementById("classKidneyButton").addEventListener("click", textAreaValue1);
