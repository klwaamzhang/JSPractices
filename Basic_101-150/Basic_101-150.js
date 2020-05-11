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
