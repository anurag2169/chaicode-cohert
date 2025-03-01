const elementInput = document.getElementById("input-text");

const addButtonElement = document.getElementById("add-color");

const btnDiv = document.getElementById("buttonContainer");

// addButtonElement.addEventListener("click", () => {
//   let inputvalue = elementInput.value;
//   const colorButton = document.createElement("button");
//   colorButton.innerText = inputvalue;
//   btnDiv.appendChild(colorButton);
//   elementInput.value = "";

//   colorButton.addEventListener("click", (e) => {
//     document.body.style.backgroundColor = e.target.innerText;
//   });
// });

addButtonElement.addEventListener("click", () => {
  let inputvalue = elementInput.value;
  const btn = colorButtonFn(inputvalue);
  const mainbtn = btn();
  btnDiv.appendChild(mainbtn);
  elementInput.value = "";
  mainbtn.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.innerText;
  });
});

function colorButtonFn(color) {
  return () => {
    const colorButton = document.createElement("button");
    colorButton.innerText = color;
    colorButton.classList.add("btn");
    return colorButton;
  };
}
