const shuffle = document.querySelector("#textarea_shuffle");
const output = document.querySelector("#output");
const click_shuffle = document.querySelector("#click_shuffle");
const btnCopy = document.querySelector("#btn_copy");

function removeWhitespaceFromBothSides(string) {
  return string.replace(/\s+$/g, "").replace(/\./g, "").replace(/^\s+/g, "");
}

function btnClick() {
  let str = removeWhitespaceFromBothSides(shuffle.value);
  str = str
    .split(" ")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("/");
  //   str = str.split(" ");

  str = "(" + str + ").";
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

// エンターキーでも並び替えを行える
// Shift+Enterで改行できる
function submitOnEnter(event) {
  if (event.which === 13 && !event.shiftKey) {
    if (!event.repeat) {
      btnClick();
    }

    event.preventDefault(); // Prevents the addition of a new line in the text field
  }
}

shuffle.addEventListener("keydown", submitOnEnter);

click_shuffle.addEventListener("click", btnClick);
btnCopy.addEventListener("click", clickCopy);
