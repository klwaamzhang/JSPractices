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
