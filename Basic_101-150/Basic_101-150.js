

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
