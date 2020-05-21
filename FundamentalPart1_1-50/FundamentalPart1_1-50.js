// Q1
let objPropMatchQ1 = (obj, src) =>
  Object.keys(src).every((e) => obj.hasOwnProperty(e) && src[e] === obj[e]);
document.getElementById("btnQ1").addEventListener("click", () => {
  console.log(
    objPropMatchQ1(
      { age: 25, hair: "long", beard: true },
      { hair: "long", beard: true }
    )
  );
  console.log(
    objPropMatchQ1(
      { hair: "long", beard: true },
      { age: 25, hair: "long", beard: true }
    )
  );
  console.log(
    objPropMatchQ1(
      { hair: "long", beard: true },
      { age: 25, hair: "long", beard: false }
    )
  );
});
