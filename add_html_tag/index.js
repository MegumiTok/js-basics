const pTag = document.querySelector("#textarea_pTag");
const output = document.querySelector("#output");
const click_pTag = document.querySelector("#click_pTag");
const btnCopy = document.querySelector("#btn_copy");

// const copy_from = document.querySelector("#btn_copy");

function btnClick() {
  let str = pTag.value;
  str = str.replace(/^/gm, "<p>").replace(/$/gm, "</p>");
  output.innerText = str;
}

function clickCopy() {
  output.select(); //This method selects all the text in a <textarea> element.
  if (document.execCommand("copy")) {
    btnCopy.classList.add("copied");
    //   paste.focus();
    const temp = setInterval(function () {
      btnCopy.classList.remove("copied");
      clearInterval(temp);
    }, 600);
  } else {
    console.info("document.execCommand went wrong…");
  }
  return false;
}
click_pTag.addEventListener("click", btnClick);
btnCopy.addEventListener("click", clickCopy);
