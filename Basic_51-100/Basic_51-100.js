// A59
document.getElementById("btnExtractQ59").addEventListener("click", () => {
  let strQ59 = document.getElementById("strQ59").value;
  document.getElementById("txtAnsQ59").innerHTML = strQ59.substring(
    0,
    Math.floor(strQ59.length / 2)
  );
});

// A58
document.getElementById("btnCopyQ58").addEventListener("click", () => {
  let strQ58 = document.getElementById("strQ58").value;
  let txtAnsQ58 = "";
  if (strQ58.length >= 3) {
    for (let i = 0; i < 4; i++) {
      txtAnsQ58 += strQ58.substring(strQ58.length - 3);
    }
    document.getElementById("txtAnsQ58").innerHTML = txtAnsQ58;
  } else {
    document.getElementById("txtAnsQ58").innerHTML =
      "The string length must be 3 or above";
  }
});

// A56
document.getElementById("btnCheckQ56").addEventListener("click", () => {
  let strQ56 = document.getElementById("strQ56").value;
  let numQ56 = parseInt(strQ56);
  document.getElementById("txtAnsQ56").innerHTML = numQ56
    ? strQ56[0] + "," + strQ56[1]
    : "This string is not a number";
});

// A54
document.getElementById("btnCheckQ54").addEventListener("click", () => {
  let strQ54 = document.getElementById("strQ54").value;
  let count = 0;
  for (let i = 0; i < strQ54.length; i++) {
    if (
      strQ54[i] === "a" ||
      strQ54[i] === "e" ||
      strQ54[i] === "i" ||
      strQ54[i] === "o" ||
      strQ54[i] === "u" ||
      strQ54[i] === "A" ||
      strQ54[i] === "E" ||
      strQ54[i] === "I" ||
      strQ54[i] === "O" ||
      strQ54[i] === "U"
    ) {
      count += 1;
    }
  }
  document.getElementById("txtAnsQ54").innerHTML = count;
});

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
