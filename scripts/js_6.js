/************************************
 ** Remove spaces from text
 ************************************/

const removeSpaces = document.querySelector("#textarea_remove_spaces");
const output = document.querySelector("#output");
const clickRemoveSpaces = document.querySelector("#click_remove_spaces");

function btnClick() {
  let str = removeSpaces.value;
  str = str.replace(/\s/g, "");
  output.innerText = str;
  navigator.clipboard.writeText(str);
}
clickRemoveSpaces.addEventListener("click", btnClick);

/************************************
 ** Count number of lines in text
 ************************************/

const countLines = document.querySelector("#textarea_countLines");
const outputLines = document.querySelector("#output_lines");
const clickCountLines = document.querySelector("#click_count_lines");
const btnClick_lines = () => {
  const str = countLines.value;
  //   console.log(str);
  //   console.log(typeof str);
  const result = str.split(/\r\n|\r|\n/).length;
  //   console.log(result);
  outputLines.innerText = result;
};

clickCountLines.addEventListener("click", btnClick_lines);

/************************************
 ** Remove blank lines
 ************************************/

const removeLines = document.querySelector("#textarea_removeLines");
const clickRemoveLines = document.querySelector("#click_remove_lines");
const outputRemovedLines = document.querySelector("#output_removed_lines");
const btnClick_remove_lines = () => {
  const str = removeLines.value;
  const result = str.replace(/\r?\n{2,}/gm, "\n");
  outputRemovedLines.innerText = result;
  //   console.log(result);
  navigator.clipboard.writeText(result);
};

clickRemoveLines.addEventListener("click", btnClick_remove_lines);

/************************************
 ** HTML Escape
 ************************************/
//  参考にさせていただいたリンク:
//  https://stackoverflow.com/questions/5251520/how-do-i-escape-some-html-in-javascript

const htmlEscape = document.querySelector("#textarea_html_escape");
const clickHTMLEscape = document.querySelector("#click_html_escape");
const outputHTMLEscape = document.querySelector("#output_html_escape");

function escape(s) {
  const lookup = {
    "<": "&lt;", // <---- less than
    ">": "&gt;", // <---- greater than
    '"': "&quot;",
    "'": "&apos;", // <---- アポストロフィ
    "&": "&amp;", // <-- ampersand
  };
  return s.replace(/[&"'<>]/g, (c) => lookup[c]);
}

const btnClick_html_escape = () => {
  const str = htmlEscape.value;
  const result = escape(str);
  outputHTMLEscape.innerText = result;
  //   console.log(result);
  navigator.clipboard.writeText(result);
};

clickHTMLEscape.addEventListener("click", btnClick_html_escape);

/************************************
 ** HTML Unescape
 ************************************/
//  参考にさせていただいたリンク:
//  https://stackoverflow.com/questions/5251520/how-do-i-escape-some-html-in-javascript

const htmlUnEscape = document.querySelector("#textarea_html_Unescape");
const clickHTMLUnEscape = document.querySelector("#click_html_Unescape");
const outputHTMLUnEscape = document.querySelector("#output_html_Unescape");

function unescape(s) {
  const lookup = {
    "<": "&lt;", // <---- less than
    ">": "&gt;", // <---- greater than
    '"': "&quot;",
    "'": "&apos;", // <---- アポストロフィ
    "&": "&amp;", // <-- ampersand
  };
  return s.replace(/[&"'<>]/g, (c) => lookup[c]);
}

const btnClick_html_Unescape = () => {
  const str = htmlUnEscape.value;
  const result = unescape(str);
  outputHTMLUnEscape.innerText = result;
  //   console.log(result);
  navigator.clipboard.writeText(result);
};

clickHTMLUnEscape.addEventListener("click", btnClick_html_Unescape);
