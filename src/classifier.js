window.bpd = {
  parseStringtoJson(string) {
    let jsonStr = string.replace(/(\w+:)|(\w+ :)/g, function (s) { //String to object
      return '"' + s.substring(0, s.length - 1) + '":';
    });

    let b = jsonStr.replace(/'/g, '"'); //Replacing songle quotes to double
    return JSON.parse(b);
  },
  sortArray(array) {
    return array.sort(function (a, b) { //Sorting array by object date property
      let c = new Date(a.atDate);
      let d = new Date(b.atDate);
      return c - d;
    });
  },
  hypertensionClassification(string) {
    let jsonArray = this.parseStringtoJson(string);
    let sortedArray = this.sortArray(jsonArray);
    let lastItem = sortedArray[sortedArray.length - 1];
    console.log(lastItem);
    let classification = " ";
    if (lastItem.SysBP >= 180 && lastItem.DiaBP >= 120) {
      classification = "Stage 3";
    }
    if (lastItem.SysBP >= 160 && lastItem.SysBP < 180 || lastItem.DiaBP >= 100 && lastItem.DiaBP < 110) {
      classification = "Stage 2";
    }
    if (lastItem.SysBP >= 140 && lastItem.SysBP < 160 || lastItem.DiaBP >= 90 && lastItem.DiaBP < 100) {
      classification = "Stage 1";
    } else {
      classification = "No Hypertension";
    }
    return "Latest reading:\nSys: " + lastItem.SysBP + "\nDia: " + lastItem.DiaBP + "\nDate: " + lastItem.atDate + "\nClassification: " + classification;
  },
  kidneyClassification(string) {
    let jsonArray = this.parseStringtoJson(string);
    let sortedArray = this.sortArray(jsonArray);
    let lastItem = sortedArray[sortedArray.length - 1];
    let oldesItem = sortedArray[sortedArray.length - 2];
    let percentage = (lastItem.eGFR - oldesItem.eGFR) / oldesItem.eGFR * 100.0;
    console.log(lastItem);
    console.log(oldesItem);
    console.log(percentage);
    let classification = " ";

    if (lastItem.eGFR >= 90) {
      classification = "Normal";
    }
    if (lastItem.eGFR >= 60 && lastItem.eGFR <= 89) {
      classification = "Mildly Decreased";
    }
    if (lastItem.eGFR >= 45 && lastItem.eGFR <= 59) {
      classification = "Mild to Moderate";
    }
    if (lastItem.eGFR >= 30 && lastItem.eGFR <= 44) {
      classification = "Moderate to Severe";
    }
    if (lastItem.eGFR >= 15 && lastItem.eGFR <= 29) {
      classification = "Severely Decreased";
    }
    if (percentage <= -20) {
      return "Latest reading:\neGFR: " + lastItem.eGFR + "\nDate: " + lastItem.atDate + "\nClassification: " + classification + "\nOldest reading:\neGFR: " + oldesItem.eGFR + "\nDate: " + oldesItem.atDate + "\nClassification: " + classification + percentage;

    } else {
      classification = "KidneyFailure";
    }

    return "Latest reading:\neGFR: " + lastItem.eGFR + "\nDate: " + lastItem.atDate + "\nClassification: " + classification;
  }
};
