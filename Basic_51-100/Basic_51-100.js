// A100
document.getElementById("btnCheckQ100").addEventListener("click", () => {
  let arr1Q100 = document.getElementById("str1Q100").value.split(" ");
  let arr2Q100 = document.getElementById("str2Q100").value.split(" ");
  let flag = false;
  for (let i = 0; i < arr1Q100.length; i++) {
    if (arr2Q100.includes(arr1Q100[i])) {
      flag = true;
      break;
    }
  }
  document.getElementById("txtAnsQ100").innerHTML = flag;
});

// A99
document.getElementById("btnCheckQ99").addEventListener("click", () => {
  let arr1Q99 = document.getElementById("str1Q99").value.split("").sort();
  let arr2Q99 = document.getElementById("str2Q99").value.split("").sort();
  document.getElementById("txtAnsQ99").innerHTML =
    arr1Q99.length === arr2Q99.length &&
    arr1Q99.every((cur, i) => cur === arr2Q99[i])
      ? "true"
      : "false";
});

// A98
document.getElementById("btnSwitchQ98").addEventListener("click", () => {
  let strQ98 = document.getElementById("strQ98").value;
  let uCount = 0;
  let lCount = 0;
  for (let i = 0; i < strQ98.length; i++) {
    if (strQ98.charCodeAt(i) >= 65 && strQ98.charCodeAt(i) <= 90) {
      uCount++;
    } else if (strQ98.charCodeAt(i) >= 97 && strQ98.charCodeAt(i) <= 122) {
      lCount++;
    }
  }
  document.getElementById("txtAnsQ98").innerHTML =
    lCount <= uCount ? strQ98.toUpperCase() : strQ98.toLowerCase();
});

// A97
document.getElementById("btnGenerateQ97").addEventListener("click", () => {
  let strQ97 = document.getElementById("strQ97").value;
  let centerI = 0;
  let countP = 0;
  for (
    let i =
      strQ97.length % 2 === 0 ? strQ97.length / 2 : (strQ97.length + 1) / 2;
    i < strQ97.length;
    i++
  ) {
    let count = 0;
    for (let n = 0; n < strQ97.length - i; n++) {
      if (strQ97[i + n] === strQ97[i - n - 1]) {
        count++;
      }
    }
    if (count === strQ97.length - i) {
      centerI = i;
      countP = count;
      break;
    } else {
      centerI = i;
    }
  }
  if (countP !== 0) {
    for (let i = 0; i < centerI - countP; i++) {
      strQ97 += strQ97[centerI - i - countP - 1];
    }
  } else {
    for (let i = strQ97.length - 1; i >= 0; i--) {
      strQ97 += strQ97[i];
    }
  }
  document.getElementById("txtAnsQ97").innerHTML = strQ97;
});

// A96
document.getElementById("btnComputeQ96").addEventListener("click", () => {
  let arrQ96 = document.getElementById("strQ96").value.split(" ");
  let reducerQ96 = (acc, cur, i, arr) =>
    i < arr.length - 1
      ? acc + Math.abs(parseInt(arr[i + 1]) - parseInt(cur))
      : acc;
  document.getElementById("txtAnsQ96").innerHTML = arrQ96.reduce(reducerQ96, 0);
});

// A95
document.getElementById("btnReplaceQ95").addEventListener("click", () => {
  let arrQ95 = document.getElementById("strQ95").value.split(" ");
  let numQ95 = document.getElementById("numQ95").value;
  document.getElementById("txtAnsQ95").innerHTML = arrQ95.fill(numQ95);
});

// A94
// needs to improve?
document.getElementById("btnFindQ94").addEventListener("click", () => {
  let arrQ94 = document.getElementById("strQ94").value.split(" ");
  let fArrQ94 = [];
  let maxF;
  for (let i = 0; i < arrQ94.length; i++) {
    if (fArrQ94.length === 0) {
      fArrQ94[0] = [arrQ94[0], 1];
    } else {
      for (let n = 0; n < fArrQ94.length; n++) {
        if (arrQ94[i] === fArrQ94[n][0]) {
          fArrQ94[n][1] += 1;
        } else {
          fArrQ94.push([arrQ94[i], 1]);
        }
      }
    }
  }
  for (let i = 0; i < fArrQ94.length; i++) {
    if (!maxF) {
      maxF = fArrQ94[i];
    } else {
      if (fArrQ94[i][1] >= maxF[1]) {
        maxF = fArrQ94[i];
      }
    }
  }
  document.getElementById("txtAnsQ94").innerHTML =
    "The number appears most is " + maxF[0];
});

// A93
document.getElementById("btnFindQ93").addEventListener("click", () => {
  let arrQ93 = document.getElementById("strQ93").value.split(" ");
  let init = parseInt(arrQ93[0]);
  const reducerQ93 = (acc, cur) => {
    cur = parseInt(cur);
    if (cur <= acc[0]) {
      acc[0] = cur;
    } else if (cur >= acc[1]) {
      acc[1] = cur;
    }
    return acc;
  };
  document.getElementById("txtAnsQ93").innerHTML = Math.abs(
    arrQ93.reduce(reducerQ93, [init, init])[0] -
      arrQ93.reduce(reducerQ93, [init, init])[1]
  );
});

// A92
document.getElementById("btnFindQ92").addEventListener("click", () => {
  let arrQ92 = document.getElementById("strQ92").value.split(" ");
  const reducerQ92 = (acc, cur, i, arr) =>
    i < arr.length - 1 && Math.abs(parseInt(arr[i + 1]) - parseInt(cur)) >= acc
      ? Math.abs(parseInt(arr[i + 1]) - parseInt(cur))
      : acc;
  document.getElementById("txtAnsQ92").innerHTML = arrQ92.reduce(reducerQ92);
});

// A91
document.getElementById("btnFindQ91").addEventListener("click", () => {
  let arrQ91 = document.getElementById("strQ91").value.split(" ");
  let kQ91 = document.getElementById("kQ91").value;
  const reducerQ91 = (acc, cur, i, arr) => {
    if (i <= arr.length - kQ91) {
      let sum = 0;
      for (let n = 0; n < kQ91; n++) {
        sum += parseInt(arr[i]);
        i += 1;
      }
      if (sum >= acc) {
        return sum;
      } else {
        return acc;
      }
    } else {
      return acc;
    }
  };
  document.getElementById("txtAnsQ91").innerHTML = arrQ91.reduce(reducerQ91);
});

// A90
document.getElementById("btnFindQ90").addEventListener("click", () => {
  let arrQ90 = document.getElementById("strQ90").value.split(" ");
  const reducerQ90 = (acc, cur, i) => {
    if (parseInt(cur) >= parseInt(acc[0])) {
      return [cur, i];
    } else {
      return acc;
    }
  };
  document.getElementById("txtAnsQ90").innerHTML =
    "The greatest element is at " + arrQ90.reduce(reducerQ90, [0, 0])[1] + "th";
});

// A87
document.getElementById("btnCheckQ87").addEventListener("click", () => {
  let arr1Q87 = document.getElementById("str1Q87").value.split(" ");
  let arr2Q87 = document.getElementById("str2Q87").value.split(" ");
  let count = 0;
  let swapFlag = false;
  for (let i = 0; i < arr1Q87.length; i++) {
    if (arr1Q87[i] !== arr2Q87[i]) {
      if (
        arr1Q87[arr1Q87.indexOf(arr2Q87[i])] === arr2Q87[i] &&
        arr2Q87[arr2Q87.indexOf(arr1Q87[i])] === arr1Q87[i]
      ) {
        swapFlag = true;
      } else {
        swapFlag = false;
      }
      count += 1;
    }
  }
  document.getElementById("txtAnsQ87").innerHTML =
    (swapFlag === true && count === 2) || (swapFlag === false && count === 0)
      ? "Similar"
      : "Not Similar";
});

// A85
document.getElementById("btnComputeQ83").addEventListener("click", () => {
  let strQ85 = document.getElementById("strQ85").value;
  let arrQ85 = strQ85.split(" ");
  const reducerQ85 = (acc, cur, i) => {
    if (i % 2 === 0) {
      return [parseInt(acc[0]) + parseInt(cur), parseInt(acc[1])];
    } else {
      return [parseInt(acc[0]), parseInt(acc[1]) + parseInt(cur)];
    }
  };
  document.getElementById("txtAnsQ85").innerHTML = arrQ85.reduce(reducerQ85, [
    0,
    0,
  ]);
  //   let subArr1Q85 = arrQ85.filter((e, i) => i % 2 === 0);
  //   let subArr2Q85 = arrQ85.filter((e, i) => i % 2 !== 0);
  //   const reducer = (acc, cur) => parseInt(acc) + parseInt(cur);
  //   let sum1 = subArr1Q85.reduce(reducer);
  //   let sum2 = subArr2Q85.reduce(reducer);
  //   document.getElementById("txtAnsQ85").innerHTML = [sum1, sum2];
});

// A83
document.getElementById("btnFindQ83").addEventListener("click", () => {
  let strQ83 = document.getElementById("strQ83").value;
  if (strQ83) {
    let arrQ83 = strQ83.split(" ");
    let longest = "";
    for (let i = 0; i < arrQ83.length; i++) {
      if (arrQ83[i].length >= longest.length) {
        longest = arrQ83[i];
      }
    }
    document.getElementById("txtAnsQ83").innerHTML = longest;
  } else {
    document.getElementById("txtAnsQ83").innerHTML = "blank";
  }
});

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
