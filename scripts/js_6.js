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

const lookup = {
  "<": "&lt;", // <---- less than
  ">": "&gt;", // <---- greater than
  '"': "&quot;",
  // "'": "&apos;",
  "'": "&#039;", // <---- アポストロフィ
  "&": "&amp;", // <-- ampersand
};

function escape(s) {
  return s.replace(/[&"'<>]/g, (c) => lookup[c]);
}

function removeWhitespaceFromTop(string) {
  return string.replace(/^\s+/g, "");
}

const btnClick_html_escape = () => {
  // const str = htmlEscape.value;
  console.log(htmlEscape.value);
  const str = removeWhitespaceFromTop(htmlEscape.value); // 入力された文字の冒頭に空白があったら取り除く
  console.log(str);
  const result = escape(str);
  outputHTMLEscape.innerText = result;
  // console.log(result);
  navigator.clipboard.writeText(result);
};

clickHTMLEscape.addEventListener("click", btnClick_html_escape);

/************************************
 ** HTML Unescape
 ************************************/

const htmlUnEscape = document.querySelector("#textarea_html_Unescape");
const clickHTMLUnEscape = document.querySelector("#click_html_Unescape");
const outputHTMLUnEscape = document.querySelector("#output_html_Unescape");

function unescape(s) {
  const lookup_reverse = Object.fromEntries(
    Object.entries(lookup).map(([k, v]) => [v, k])
  );

  return s.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (c) => lookup_reverse[c]);
}

const btnClick_html_Unescape = () => {
  const str = htmlUnEscape.value;
  const result = unescape(str);
  console.log(result);
  outputHTMLUnEscape.innerText = result;

  navigator.clipboard.writeText(result);
};

clickHTMLUnEscape.addEventListener("click", btnClick_html_Unescape);
