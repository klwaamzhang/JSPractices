// A50
document.getElementById("btnConvertQ50").addEventListener("click", () => {
  let strQ50 = document.getElementById("strQ50").value;
  let strQ50Arr = strQ50.split(" ");
  for (let i = 0; i <= strQ50Arr.length - 1; i++) {
    document.getElementById("txtAnsQ50").innerHTML +=
      strQ50Arr[i].substring(0, 1).toUpperCase() + strQ50Arr[i].substring(1) + " ";
  }
});

// A49
document.getElementById("btnReplaceQ49").addEventListener("click", () => {
  let strQ49 = document.getElementById("strQ49").value;
  for (i = 0; i <= strQ49.length - 1; i++) {
    document.getElementById("txtAnsQ49").innerHTML += String.fromCharCode(
      parseInt(strQ49.charCodeAt(i)) + 1
    );
  }
});

// A48
document.getElementById("btnReverseQ48").addEventListener("click", () => {
  let strQ48 = document.getElementById("strQ48").value;
  for (let i = 0; i <= strQ48.length - 1; i++) {
    document.getElementById("txtAnsQ48").innerHTML += strQ48.substring(
      strQ48.length - i - 1,
      strQ48.length - i
    );
  }
});

// A42
document.getElementById("btnCheckQ42").addEventListener("click", () => {
  let num1Q42 = document.getElementById("num1Q42").value;
  let num2Q42 = document.getElementById("num2Q42").value;
  let num3Q42 = document.getElementById("num3Q42").value;
  document.getElementById("txtAnsQ42").innerHTML =
    num1Q42 < num2Q42 && num2Q42 < num3Q42
      ? "Strict mode"
      : num1Q42 < num3Q42 && num2Q42 < num1Q42
      ? "Soft mode"
      : "Neither of them";
});

// A37
document.getElementById("btnCheckQ37").addEventListener("click", () => {
  let strQ37 = document.getElementById("strQ37").value;
  document.getElementById("txtAnsQ37").innerHTML =
    strQ37.length < 3
      ? strQ37.toUpperCase()
      : strQ37.substring(0, 3).toLowerCase();
});

// A35
document.getElementById("btnCheckQ35").addEventListener("click", () => {
  let strQ35 = document.getElementById("strQ35").value;
  let charQ35 = document.getElementById("charQ35").value;
  document.getElementById("txtAnsQ35").innerHTML = strQ35
    .substring(1, 4)
    .includes(charQ35)
    ? "true"
    : "false";
});

// A30
document.getElementById("btnCheckQ30").addEventListener("click", () => {
  let strQ30 = document.getElementById("strQ30").value;
  if (strQ30.startsWith("Script", 4)) {
    document.getElementById("txtAnsQ30").innerHTML =
      strQ30.substring(0, 4) + strQ30.substring(10);
  } else {
    document.getElementById("txtAnsQ30").innerHTML = strQ30;
  }
});

// A27
document.getElementById("btnCheckQ27").addEventListener("click", () => {
  let strQ27 = document.getElementById("strQ27").value;
  if (strQ27.startsWith("Java")) {
    document.getElementById("txtAnsQ27").innerHTML = "true";
  } else {
    document.getElementById("txtAnsQ27").innerHTML = "false";
  }
});

// A23
document.getElementById("btnNewStrQ23").addEventListener("click", () => {
  let strQ23 = document.getElementById("strQ23").value;
  if (strQ23) {
    document.getElementById("txtAnsQ23").innerHTML =
      strQ23.substring(strQ23.length - 1) +
      strQ23.substring(1, strQ23.length - 1) +
      strQ23.substring(0, 1);
  } else {
    document.getElementById("txtAnsQ23").innerHTML =
      "Please at least input 1 letter.";
  }
});

// A22
document.getElementById("btnNewStrQ22").addEventListener("click", () => {
  let strQ22 = document.getElementById("strQ22").value;
  let posQ22 = document.getElementById("posQ22").value;
  document.getElementById("txtAnsQ22").innerHTML =
    strQ22.substring(0, posQ22) + strQ22.substring(parseInt(posQ22) + 1);
});

// A21
document.getElementById("btnNewStrQ21").addEventListener("click", () => {
  let strQ21 = document.getElementById("strQ21").value;
  if (!strQ21.startsWith("Py")) {
    document.getElementById("txtAnsQ21").innerHTML = "Py" + strQ21;
  } else {
    document.getElementById("txtAnsQ21").innerHTML = strQ21;
  }
});

// A12
document.getElementById("txtAnsQ12").innerHTML = window.location.href;

// A11
let c1Q11 = 60;
let f2Q11 = 45;
let f1Q11 = (c1Q11 / 5) * 9 + 32;
let c2Q11 = ((f2Q11 - 32) / 9) * 5;
document.getElementById("txtAnsQ11").innerHTML =
  "60°C is " + f1Q11 + "°F<br/>" + "45°F is " + c2Q11 + "°C";

// A10
let firstNumQ10, secondNumQ10;
let resultQ10 = "";
document.getElementById("btnMultiQ10").addEventListener("click", () => {
  firstNumQ10 = document.getElementById("firstNumQ10").value;
  secondNumQ10 = document.getElementById("secondNumQ10").value;
  console.log(typeof firstNumQ10);
  if (firstNumQ10 && secondNumQ10) {
    resultQ10 = firstNumQ10 * secondNumQ10;
  } else {
    resultQ10 = "Please enter right numbers!";
  }
  document.getElementById("resultQ10").innerHTML = resultQ10;
});
document.getElementById("btnDivideQ10").addEventListener("click", () => {
  firstNumQ10 = document.getElementById("firstNumQ10").value;
  secondNumQ10 = document.getElementById("secondNumQ10").value;
  if (firstNumQ10 && secondNumQ10) {
    resultQ10 = firstNumQ10 / secondNumQ10;
  } else {
    resultQ10 = "Please enter right numbers!";
  }
  document.getElementById("resultQ10").innerHTML = resultQ10;
});

// A9
let dateQ9 = new Date();
let dateChrisQ9;
let currentMonth = dateQ9.getMonth();
let currentDate = dateQ9.getDate();
let currentYear = dateQ9.getFullYear();
let nextYear = currentYear + 1;
if (currentMonth == 11 && currentDate > 25) {
  dateChrisQ9 = new Date("December 25, " + nextYear);
} else {
  dateChrisQ9 = new Date("December 25, " + currentYear);
}
let daysLeftQ9 = Math.floor((dateChrisQ9 - dateQ9) / 86400000);
document.getElementById("daysLeftQ9").innerHTML = daysLeftQ9;

// A8
document.getElementById("btnGuessQ8").addEventListener("click", () => {
  let txtNumQ8 = document.getElementById("txtNumQ8").value;
  let txtMsgQ8 = document.getElementById("txtMsgQ8").innerHTML;
  if (txtNumQ8) {
    let numQ8 = parseInt(txtNumQ8);
    let randNum = Math.floor(Math.random() * 10);
    if (numQ8 == randNum) {
      txtMsgQ8 = "Good Work";
    } else {
      txtMsgQ8 = "Not matched";
    }
  } else {
    txtMsgQ8 = "Please input a number between 1 - 10";
  }
  document.getElementById("txtMsgQ8").innerHTML = txtMsgQ8;
});

// A7
let txtAnsQ7 = "";
for (let yearQ7 = 2014; yearQ7 <= 2050; yearQ7++) {
  let dateQ7 = new Date("January 1, " + yearQ7);
  let weekdayQ7 = dateQ7.getDay();
  if (weekdayQ7 == 0) {
    txtAnsQ7 += yearQ7 + " ";
  }
}
document.getElementById("txtAnsQ7").innerHTML = txtAnsQ7;

// A6
document.getElementById("btnYearQ6").addEventListener("click", () => {
  let txtYearQ6 = document.getElementById("txtYearQ6").value;
  let txtAnsQ6 = "";
  if (txtYearQ6) {
    let yearQ6 = parseInt(txtYearQ6);
    if ((yearQ6 % 4 == 0 && yearQ6 % 100 != 0) || yearQ6 % 400 == 0) {
      txtAnsQ6 = txtYearQ6 + " is a leap year.";
    } else {
      txtAnsQ6 = txtYearQ6 + " is a not leap year.";
    }
  } else {
    txtAnsQ6 = "Please input a year";
  }
  document.getElementById("txtAnsQ6").innerHTML = txtAnsQ6;
});

// A5
let rotateString = "w3resource";
document.getElementById("rotateStrQ5").innerHTML = rotateString;
window.onload = () => {
  setInterval(() => {
    let rotateWord = rotateString.substring(9);
    rotateString = rotateWord + rotateString.substring(0, 9);
    document.getElementById("rotateStrQ5").innerHTML = rotateString;
  }, 1000);
};

// A4
let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
document.getElementById("areaQ4").innerHTML = Math.sqrt(
  s * (s - a) * (s - b) * (s - c)
);

// A3
let todayQ3 = new Date();
let dayQ3 = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
  todayQ3
);
let monthQ3 = new Intl.DateTimeFormat("en-US", { month: "2-digit" }).format(
  todayQ3
);
let yearQ3 = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
  todayQ3
);
document.getElementById("date1Q3").innerHTML =
  monthQ3 + "-" + dayQ3 + "-" + yearQ3;
document.getElementById("date2Q3").innerHTML =
  monthQ3 + "/" + dayQ3 + "/" + yearQ3;
document.getElementById("date3Q3").innerHTML =
  dayQ3 + "-" + monthQ3 + "-" + yearQ3;
document.getElementById("date4Q3").innerHTML =
  dayQ3 + "/" + monthQ3 + "/" + yearQ3;

// A2
document.getElementById("printBtnQ2").addEventListener("click", () => {
  window.print();
});

// A1
let todayQ1 = new Date();
let dayQ1 = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  todayQ1
);
let hourQ1 = new Intl.DateTimeFormat("en-US", {
  hour12: true,
  hour: "numeric",
}).format(todayQ1);
let minuteQ1 = todayQ1.getMinutes();
let secondQ1 = todayQ1.getSeconds();
document.getElementById("dayQ1").innerHTML = dayQ1;
document.getElementById("timeQ1").innerHTML =
  hourQ1 + " : " + minuteQ1 + " : " + secondQ1;
