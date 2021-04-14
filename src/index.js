let textAreaValue = function () { //Obtainig the texarea element with this function
  let textArea = document.getElementById("bpdata").value;
  let result = window.bpd.hypertensionClassification(textArea);
  console.log(result);
  document.getElementById("resultTextarea").value = result; //Changing the value and showing the result in resultTextArea
};
document.getElementById("classButton").addEventListener("click", textAreaValue);


let textAreaValue1 = function () { //Obtaining eGFR value
  let textArea1 = document.getElementById("egfrdata").value;
  let result = window.bpd.kidneyClassification(textArea1);
  document.getElementById("resultKdc").value = result;
};
document.getElementById("classKidneyButton").addEventListener("click", textAreaValue1);
