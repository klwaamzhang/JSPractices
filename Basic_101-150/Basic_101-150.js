// A150
document.getElementById("btnSwapQ150").addEventListener("click", () => {
  let strArr = document.getElementById("strQ150").value.split("");
  if (strArr.length % 2 === 0) {
    for (let i = 0; i < strArr.length; i += 2) {
      let temp = strArr[i];
      strArr[i] = strArr[i + 1];
      strArr[i + 1] = temp;
    }
  } else {
    strArr = false;
  }
  document.getElementById("txtAnsQ150").innerHTML = strArr;
});

// A149
document.getElementById("btnChangeQ149").addEventListener("click", () => {
  let strArr = document.getElementById("strQ149").value;
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    let temp;
    if (strArr.charCodeAt(i) > 64 && strArr.charCodeAt(i) < 91) {
      temp = strArr[i].toLowerCase();
    } else if (strArr.charCodeAt(i) > 96 && strArr.charCodeAt(i) < 123) {
      temp = strArr[i].toUpperCase();
    } else {
      temp = strArr[i];
    }
    newStr += temp;
  }
  document.getElementById("txtAnsQ149").innerHTML = newStr;
});

// A145
document.getElementById("btnFindQ145").addEventListener("click", () => {
  let int = parseInt(document.getElementById("strQ145").value);
  let n = 0;
  let sum = 0;
  while (sum <= int) {
    n++;
    sum += n;
  }
  document.getElementById("txtAnsQ145").innerHTML = n - 1;
});

// A144
document.getElementById("btnExtractQ144").addEventListener("click", () => {
  let address = document.getElementById("strQ144").value.split("/");
  address = address.filter((e) => e !== "");
  address[0] = address[0].slice(0, address[0].length - 1);
  address[1] = address[1].slice(0, address[1].lastIndexOf("."));
  document.getElementById("txtAnsQ144").innerHTML = address;
});

// A143
document.getElementById("btnSortQ143").addEventListener("click", () => {
  let strArr = document.getElementById("strQ143").value.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length - i - 1; j++) {
      if (strArr[j].length > strArr[j + 1].length) {
        let temp = strArr[j];
        strArr[j] = strArr[j + 1];
        strArr[j + 1] = temp;
      }
    }
  }
  document.getElementById("txtAnsQ143").innerHTML = strArr;
});

// A142
document.getElementById("btnSimplifyQ142").addEventListener("click", () => {
  let strArr = document.getElementById("strQ142").value.split("/");
  let res = strArr.filter((e) => e !== "." && e !== "");
  let ans = "";
  for (let i = 0; i < res.length; i++) {
    if (res[i] === ".." && i !== 0) {
      res.splice(i - 1, 2);
      i -= 2;
    }
  }
  if (res.indexOf("..") === -1) {
    ans = "/" + res.join("/");
  } else {
    ans = res.join("/");
  }

  document.getElementById("txtAnsQ142").innerHTML = ans;
});

// A135
document.getElementById("btnComputeQ135").addEventListener("click", () => {
  let strArr = document.getElementById("strQ135").value.split("");
  let ansArr = [];
  let strOlength = strArr.length;
  for (let i = 0; i < strOlength; i++) {
    let fir = strArr.shift();
    if (!ansArr.some((e) => e === fir)) {
      ansArr.push(fir);
    } else {
      ansArr.splice(ansArr.indexOf(fir), 1);
    }
  }
  document.getElementById("txtAnsQ135").innerHTML = ansArr.join("");
});

// A134
document.getElementById("btnComputeQ134").addEventListener("click", () => {
  let char = document.getElementById("strQ134").value;
  document.getElementById("txtAnsQ134").innerHTML =
    char.charCodeAt(0) < 122
      ? (char = String.fromCharCode(char.charCodeAt(0) + 1))
      : (char = String.fromCharCode(97));
});

// A132
document.getElementById("btnComputeQ132").addEventListener("click", () => {
  let num = parseInt(document.getElementById("strQ132").value);
  let arrAns = [];
  let isPrime = (n) => {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  if (num % 2 === 0) {
    arrAns.push(2);
  }
  for (let n = 3; n <= num; n += 2) {
    if (num % n === 0 && isPrime(n)) {
      arrAns.push(n);
    }
  }
  document.getElementById("txtAnsQ132").innerHTML = arrAns;
});

// A131
document.getElementById("btnComputeQ131").addEventListener("click", () => {
  let arrQ131 = document.getElementById("strQ131").value.split(" ");
  let ansArr = [arrQ131[0]];
  for (let i = 1; i < arrQ131.length; i++) {
    ansArr.push(parseInt(ansArr[i - 1]) + parseInt(arrQ131[i]));
  }
  document.getElementById("txtAnsQ131").innerHTML = ansArr;
});

// A129
document.getElementById("btnFindQ129").addEventListener("click", () => {
  let numQ128 = parseInt(document.getElementById("strQ129").value);
  let findP = (n) => {
    let flag = false;
    if (n % 2 !== 0 && n !== 1) n += 2;
    else if (n === 1) n = 2;
    else n += 1;
    while (flag === false) {
      flag = true;
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          flag = false;
          break;
        }
      }
      if (flag === false) n += 2;
    }
    return n;
  };
  document.getElementById("txtAnsQ129").innerHTML = findP(numQ128);
});

// A128
document.getElementById("btnRoundUpQ128").addEventListener("click", () => {
  let numQ128 = parseInt(document.getElementById("strQ128").value);
  document.getElementById("txtAnsQ128").innerHTML =
    Math.ceil(numQ128 / 10) * 10;
});

// A127
document.getElementById("btnReverseQ127").addEventListener("click", () => {
  let numQ127 = parseInt(document.getElementById("strQ127").value);
  let bitQ127 = [];
  while (!(numQ127 === 0)) {
    bitQ127.push(Math.floor(numQ127 % 2));
    numQ127 = Math.floor(numQ127 / 2);
  }
  let bitAns = bitQ127.reverse().join("");
  let ans = 0;
  for (let i = 0; i < bitAns.length; i++) {
    ans += bitAns[i] * Math.pow(2, i);
  }
  document.getElementById("txtAnsQ127").innerHTML = ans;
});

// A125
document.getElementById("btnFindQ125").addEventListener("click", () => {
  let arrQ125 = document.getElementById("strQ125").value.split(" ");
  let longestStr = arrQ125[0];
  for (i = 1; i < arrQ125.length; i++) {
    if (arrQ125[i].length >= longestStr.length) {
      longestStr = arrQ125[i];
    }
  }
  document.getElementById("txtAnsQ125").innerHTML = longestStr;
});

// A124
let isNor = (x, y) => {
  return !(x || y);
};
document.getElementById("txtAnsQ124").innerHTML =
  isNor(true, false) + "<br/>" + isNor(false, false);

// A122
document.getElementById("btnCheckQ122").addEventListener("click", () => {
  let arrQ122 = document.getElementById("strQ122").value.split(" ");
  let isInorDe = (arr) => {
    if (parseInt(arr[0]) - parseInt(arr[1]) > 0) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (parseInt(arr[i]) <= parseInt(arr[i + 1])) {
          return false;
        }
      }
      return true;
    } else if (parseInt(arr[0]) - parseInt(arr[1]) < 0) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (parseInt(arr[i]) >= parseInt(arr[i + 1])) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  document.getElementById("txtAnsQ122").innerHTML = isInorDe(arrQ122);
});

// A120
document.getElementById("btnCheckQ120").addEventListener("click", () => {
  let x = parseInt(document.getElementById("str1Q120").value[0]);
  let y = parseInt(document.getElementById("str1Q120").value[2]);
  let r = parseInt(document.getElementById("str2Q120").value);
  let a = parseInt(document.getElementById("str3Q120").value[0]);
  let b = parseInt(document.getElementById("str3Q120").value[2]);
  document.getElementById("txtAnsQ120").innerHTML =
    Math.pow(x - a, 2) + Math.pow(y - b, 2) < Math.pow(r, 2) ? true : false;
});

// A116
document.getElementById("btnGenerateQ116").addEventListener("click", () => {
  let strQ116 = document.getElementById("strQ116").value;
  let sumOfN = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      if (i !== str.indexOf("#")) {
        sum += parseInt(str[i]);
      }
    }
    return sum;
  };
  let ansQ116 = [];
  for (let i = 0; i < 10; i++) {
    if ((sumOfN(strQ116) + i) % 3 === 0) {
      ansQ116.push(strQ116.replace("#", i));
    }
  }
  document.getElementById("txtAnsQ116").innerHTML = ansQ116;
});

// A115
let isDiagnalM = (m) => {
  if (m.length === m[0].length) {
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m.length; j++) {
        if ((i !== j && m[i][j] !== 0) || (i === j && m[i][j] === 0))
          return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
document.getElementById("txtAnsQ115").innerHTML =
  isDiagnalM([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ]) +
  "<br/>" +
  isDiagnalM([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ]);

// A114
document.getElementById("btnCheckQ114").addEventListener("click", () => {
  let strQ114 = document.getElementById("strQ114").value;
  document.getElementById("txtAnsQ114").innerHTML =
    strQ114.charCodeAt(0) > 64 &&
    strQ114.charCodeAt(0) < 91 &&
    strQ114.endsWith(".")
      ? "true"
      : "false";
});

// A113
document.getElementById("btnCalculateQ113").addEventListener("click", () => {
  let numQ113 = parseInt(document.getElementById("strQ113").value);
  let sum = 0;
  let n = numQ113;
  while (n > 0) {
    sum += Math.floor(n);
    n /= 2;
  }
  document.getElementById("txtAnsQ113").innerHTML = sum;
});

// A112
document.getElementById("btnFindQ112").addEventListener("click", () => {
  let numQ112 = parseInt(document.getElementById("strQ112").value);
  document.getElementById("txtAnsQ112").innerHTML = Math.floor(numQ112 / 5);
});

// A111
document.getElementById("btnFindQ111").addEventListener("click", () => {
  let num1Q111 = parseInt(document.getElementById("str1Q111").value);
  let num2Q111 = parseInt(document.getElementById("str2Q111").value);
  let num3Q111 = parseInt(document.getElementById("str3Q111").value);
  document.getElementById("txtAnsQ111").innerHTML =
    num1Q111 === num2Q111
      ? num3Q111
      : num1Q111 === num3Q111
      ? num2Q111
      : num1Q111;
});

// A110
document.getElementById("btnComputeQ110").addEventListener("click", () => {
  let arrQ110 = document.getElementById("str1Q110").value.split(" ");
  let numQ110 = document.getElementById("str2Q110").value;
  let count = 0;
  for (let i = 0; i < arrQ110.indexOf(numQ110); i++) {
    if (arrQ110[i] % 2 === 0) {
      count++;
    }
  }
  document.getElementById("txtAnsQ110").innerHTML = count;
});

// A109
document.getElementById("btnComputeQ109").addEventListener("click", () => {
  let numQ109 = parseInt(document.getElementById("strQ109").value);
  let primeNumArrQ109 = [1, 2];
  let isPrime = (n) => {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  for (let n = 3; n <= numQ109; n += 2) {
    if (isPrime(n)) {
      primeNumArrQ109.push(n);
    }
  }

  document.getElementById("txtAnsQ109").innerHTML = primeNumArrQ109;
});

// A108
document.getElementById("btnComputeQ108").addEventListener("click", () => {
  let vec1A108 = document.getElementById("str1Q108").value.split(" ");
  let vec2A108 = document.getElementById("str2Q108").value.split(" ");
  document.getElementById("txtAnsQ108").innerHTML =
    parseInt(vec1A108[0]) * parseInt(vec2A108[0]) +
    parseInt(vec1A108[1]) * parseInt(vec2A108[1]) +
    parseInt(vec1A108[2]) * parseInt(vec2A108[2]);
});

// A107
document.getElementById("btnComputeQ107").addEventListener("click", () => {
  let arrQ107 = document.getElementById("strQ107").value.split(" ");
  let count = 0;
  for (let i = 0; i < arrQ107.length - 1; i++) {
    for (let j = i + 1; j < arrQ107.length; j++) {
      if (
        parseInt(arrQ107[i]) % parseInt(arrQ107[j]) === 0 ||
        parseInt(arrQ107[j]) % parseInt(arrQ107[i]) === 0
      ) {
        count++;
      }
    }
  }
  document.getElementById("txtAnsQ107").innerHTML = count;
});

// A106
document.getElementById("btnCheckQ106").addEventListener("click", () => {
  let num1Q106 = parseInt(document.getElementById("str1Q106").value);
  let num2Q106 = parseInt(document.getElementById("str2Q106").value);
  document.getElementById("txtAnsQ106").innerHTML = Number.isInteger(
    num2Q106 / num1Q106
  )
    ? num2Q106 / num1Q106
    : Number.isInteger(num1Q106 / num2Q106)
    ? num1Q106 / num2Q106
    : "false";
});

// A105
document.getElementById("btnFindQ105").addEventListener("click", () => {
  let numQ105 = document.getElementById("strQ105").value;
  var count = 0;
  let timesFuncQ105 = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
      console.log(sum);
    }
    count++;
    if (sum < 10) {
      return;
    } else {
      timesFuncQ105(sum.toString());
    }
  };
  timesFuncQ105(numQ105);
  document.getElementById("txtAnsQ105").innerHTML = count;
});

// A104
document.getElementById("btnFindQ104").addEventListener("click", () => {
  let arrQ104 = document.getElementById("strQ104").value.split(" ");
  let iQ104 = parseInt(document.getElementById("iQ104").value);
  let resultQ104 = [
    arrQ104[0],
    arrQ104[1],
    Math.abs(parseInt(arrQ104[1]) - parseInt(arrQ104[0])),
  ];
  for (let i = 0; i < arrQ104.length - 1; i++) {
    for (let j = i + 1; j < arrQ104.length; j++) {
      let diff = Math.abs(parseInt(arrQ104[j]) - parseInt(arrQ104[i]));
      if (diff <= iQ104 && diff >= resultQ104[2]) {
        resultQ104 = [arrQ104[i], arrQ104[j], diff];
      }
    }
  }
  document.getElementById("txtAnsQ104").innerHTML = resultQ104;
});

// A103
document.getElementById("btnCalculateQ103").addEventListener("click", () => {
  let strQ103 = document.getElementById("strQ103").value;
  let indexD = parseInt(document.getElementById("iQ103").value);
  let maxNum = parseInt(strQ103.slice(0, indexD) + strQ103.slice(indexD + 1));
  document.getElementById("txtAnsQ103").innerHTML = maxNum;
});

// A102
document.getElementById("btnFindQ102").addEventListener("click", () => {
  let arrQ102 = document.getElementById("strQ102").value.split(" ");
  let count = 0;
  for (let i = 0; i < arrQ102.length - 1; i++) {
    for (let n = i + 1; n < arrQ102.length; n++) {
      if (arrQ102[i] > arrQ102[n]) {
        count++;
      }
    }
  }
  document.getElementById("txtAnsQ102").innerHTML = count;
});

// A101
document.getElementById("btnCheckQ101").addEventListener("click", () => {
  let strQ101 = document.getElementById("strQ101").value;
  let flag = true;
  if (strQ101.search(/[^a-zA-Z]/g) === -1) {
    for (let i = 0; i < strQ101.length - 1; i++) {
      if (
        (strQ101.charCodeAt(i) > 64 &&
          strQ101.charCodeAt(i) < 91 &&
          strQ101.charCodeAt(i + 1) > 64 &&
          strQ101.charCodeAt(i + 1) < 91) ||
        (strQ101.charCodeAt(i) > 96 &&
          strQ101.charCodeAt(i) < 123 &&
          strQ101.charCodeAt(i + 1) > 96 &&
          strQ101.charCodeAt(i + 1) < 123)
      ) {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  document.getElementById("txtAnsQ101").innerHTML = flag;
});
