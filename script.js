const inputs = document.querySelectorAll(".inputeBlock");
const inputsAreas = document.querySelectorAll(".inputeBlock input");

const textAreaBlock = document.querySelector(".TextAreaBlock");
const textArea = document.querySelector(".TextAreaBlock textarea");

const errorAreas = document.querySelectorAll(".necessarily");
const submitButton = document.querySelector(".submitBlock input");

submitButton.onclick = function() {
  for (let errorArea =0; errorArea < errorAreas.length;errorArea++) {
      if (errorAreas[errorArea].value == 0){
          inputs[errorArea].classList.add("error");
          alert(1);
      }
      else{
          inputs[errorArea].classList.remove("error");
      }
  }
}

for (let inputsAreaNumber = 0;inputsAreaNumber < inputsAreas.length; inputsAreaNumber++)
{
  inputsAreas[inputsAreaNumber].onfocus = function() {
    inputs[inputsAreaNumber].classList.add("inputes");
    inputs[inputsAreaNumber].classList.remove("inpute");
  }
  inputsAreas[inputsAreaNumber].onblur = function() {
    if (inputsAreas[inputsAreaNumber].value == 0){
      inputs[inputsAreaNumber].classList.remove("inputes");
      inputs[inputsAreaNumber].classList.add("inpute");
    }
    else{
      inputs[inputsAreaNumber].classList.add("inputes");
      inputs[inputsAreaNumber].classList.remove("inpute");
    }
  }
}

textArea.onfocus = function() {
  textAreaBlock.classList.add("inputeAreas");
  textAreaBlock.classList.remove("inputeArea");
}
textArea.onblur = function() {
  if (textArea.value == 0){
    textAreaBlock.classList.remove("inputeAreas");
    textAreaBlock.classList.add("inputeArea");
  }
  else{
    textAreaBlock.classList.add("inputeAreas");
    textAreaBlock.classList.remove("inputeArea");
  }
  }
