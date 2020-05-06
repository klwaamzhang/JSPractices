// A53
document.getElementById("btnCheckQ53").addEventListener("click", () => {
  document.getElementById("txtAnsQ53").innerHTML = "false";
  let strQ53 = document.getElementById("strQ53").value;
  for (let i = 0; i < strQ53.length; i++) {
    if (
      (strQ53[i] === "a" && strQ53[i + 4] === "b") ||
      (strQ53[i] === "b" && strQ53[i + 4] === "a")
    ) {
      document.getElementById("txtAnsQ53").innerHTML = "true";
      break;
    }
  }
  //   let posAQ53 = strQ53.indexOf("a");
  //   let posBQ53 = strQ53.indexOf("b");
  //   let aQ53Arr = [];
  //   let bQ53Arr = [];
  //   let txtAnsQ53 = "";
  //   while (posAQ53 !== -1) {
  //     aQ53Arr.push(posAQ53);
  //     posAQ53 = strQ53.indexOf("a", posAQ53 + 1);
  //   }
  //   while (posBQ53 !== -1) {
  //     bQ53Arr.push(posBQ53);
  //     posBQ53 = strQ53.indexOf("b", posBQ53 + 1);
  //   }
  //   if (aQ53Arr.length !== 0 && bQ53Arr.length !== 0) {
  //     for (let i = 0; i < aQ53Arr.length; i++) {
  //       for (let j = 0; j < bQ53Arr.length; j++) {
  //         if (aQ53Arr[i] - bQ53Arr[j] == 4 || aQ53Arr[i] - bQ53Arr[j] == -4) {
  //           txtAnsQ53 = "true";
  //           break;
  //         } else {
  //           txtAnsQ53 = "false";
  //         }
  //       }
  //       if (txtAnsQ53 === "true") {
  //         break;
  //       }
  //     }
  //   } else {
  //     txtAnsQ53 = "false";
  //   }
  //   document.getElementById("txtAnsQ53").innerHTML = txtAnsQ53;
});

// A52
document.getElementById("btnReorderQ52").addEventListener("click", () => {
  let strQ52 = document.getElementById("strQ52").value;
  let arrCharCodeQ52 = [];
  for (let i = 0; i < strQ52.length; i++) {
    arrCharCodeQ52.push(strQ52.charCodeAt(i));
  }
  // bubble sort
  for (let i = 0; i < arrCharCodeQ52.length; i++) {
    for (let j = 0; j < arrCharCodeQ52.length - i - 1; j++) {
      if (arrCharCodeQ52[j] > arrCharCodeQ52[j + 1]) {
        let temp = arrCharCodeQ52[j + 1];
        arrCharCodeQ52[j + 1] = arrCharCodeQ52[j];
        arrCharCodeQ52[j] = temp;
      }
    }
  }
  for (let i = 0; i < arrCharCodeQ52.length; i++) {
    document.getElementById("txtAnsQ52").innerHTML += String.fromCharCode(
      arrCharCodeQ52[i]
    );
  }
});
