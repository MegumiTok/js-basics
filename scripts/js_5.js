// JSON形式のデータをObject形式のデータに変換ツール
const jsonConverter = document.querySelector("#textarea_JSON_converter");
const output = document.querySelector("#output");
const clickConvert = document.querySelector("#click_convert");

function btnClick() {
  const str = jsonConverter.value;
  console.log(str);
  console.log(typeof str);
  const obj = JSON.parse(str);
  // str = str.replace(/\s+/g, '')
  output.innerText = obj;
  //   navigator.clipboard.writeText(obj);

  const json = '{"result":true, "count":42}';
  console.log(json);
  const ob = JSON.parse(json);

  console.log(ob.count);
  // expected output: 42

  console.log(ob.result);
  // expected output: true
}
clickConvert.addEventListener("click", btnClick);
