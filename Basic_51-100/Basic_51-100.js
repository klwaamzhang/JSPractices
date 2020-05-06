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
