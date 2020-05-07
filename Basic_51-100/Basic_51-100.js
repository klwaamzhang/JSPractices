// A80
document.getElementById("btnCheckQ80").addEventListener("click", () => {
  let strQ80 = document.getElementById("strQ80").value;
  if (strQ80) {
    let arrQ80 = strQ80.split(" ");
    let temp = arrQ80[0];
    arrQ80[0] = arrQ80[arrQ80.length - 1];
    arrQ80[arrQ80.length - 1] = temp;
    document.getElementById("txtAnsQ80").innerHTML = arrQ80;
  } else {
    document.getElementById("txtAnsQ80").innerHTML = "blank";
  }
});

// A75
let arr1Q75 = [74, 34, 23];
let arr2Q75 = [32, 56, 26];
document.getElementById("txtAnsQ75").innerHTML = [
  arr1Q75[(arr1Q75.length - 1) / 2],
  arr2Q75[(arr2Q75.length - 1) / 2],
];

// A74
let arrQ74 = [74, 34, 23, 73, 8, 50];
let biggerNum =
  arrQ74[0] > arrQ74[arrQ74.length - 1] ? arrQ74[0] : arrQ74[arrQ74.length - 1];
document.getElementById("txtAnsQ74").innerHTML = arrQ74.fill(biggerNum, 0);

// A73
let arrQ73 = ["apple", "pear", "banana"];
document.getElementById("txtAnsQ73").innerHTML = arrQ73.reverse();

// A71
document.getElementById("btnCheckQ71").addEventListener("click", () => {
  let strQ71 = document.getElementById("strQ71").value;
  let arrQ71 = strQ71.split(" ");
  console.log(arrQ71);
  document.getElementById("txtAnsQ71").innerHTML = strQ71
    ? arrQ71[0].includes(1) || arrQ71[arrQ71.length - 1].includes(1)
      ? "true"
      : "false"
    : "The string should not be null";
});

// A70
let arrA70 = [70, 71, 72];
document.getElementById("txtAnsQ70").innerHTML = arrA70;
setInterval(() => {
  let firstElement = arrA70.shift();
  arrA70.push(firstElement);
  document.getElementById("txtAnsQ70").innerHTML = arrA70;
}, 3000);

// A68
document.getElementById("btnExtractQ68").addEventListener("click", () => {
  let strQ68 = document.getElementById("strQ68").value;
  let nQ68 = parseInt(document.getElementById("nQ68").value);
  document.getElementById("txtAnsQ68").innerHTML = !nQ68
    ? "Please input the right n number"
    : strQ68.length >= nQ68
    ? strQ68.substring(0, nQ68) + strQ68.substring(strQ68.length - nQ68)
    : "String length must be longer than n";
});

// A63
document.getElementById("btnExtractQ63").addEventListener("click", () => {
  let strQ63 = document.getElementById("strQ63").value;
  document.getElementById("txtAnsQ63").innerHTML =
    strQ63.length % 2 !== 0 && strQ63 >= 3
      ? strQ63.substring((strQ63.length - 3) / 2, (strQ63.length + 3) / 2)
      : "Please input right odd string and the length >= 3";
});

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
