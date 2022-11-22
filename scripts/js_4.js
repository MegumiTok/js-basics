// 空白削除ツール
const removeSpaces = document.querySelector("#textarea_remove_spaces");
const output = document.querySelector("#output");
const clickRemoveSpaces = document.querySelector("#click_remove_spaces");

function btnClick() {
  let str = removeSpaces.value;
  str = str.replace(/\s/g, "");
  // str = str.replace(/\s+/g, '')
  output.innerText = str;
  navigator.clipboard.writeText(str);
}
clickRemoveSpaces.addEventListener("click", btnClick);

// 行計算ツール
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

const str = `pick 64a8ba7 記事追加
pick a03244b 記事追加
pick 676844b 記事追加
pick 7043412 記事追加
pick c63cd4e 記事追加
pick 010102f 記事追加
pick 4017e02 編集
pick c4c4b63 編集
pick 4149105 画像編集
pick b999764 画像編集
pick d75ce05 編集
pick 926ea96 編集
pick 82eaacb 編集
pick d409a86 編集
pick a15cb62 記事追加
pick 32a269b 編集
pick e865d1c 編集
pick 40b412a 記事追加
pick bec07e7 編集
pick 14dde44 記事編集
pick 807df67 記事編集
pick 4579c1d 編集
pick 3e6df32 編集`;

// const result = str.split(/\r\n|\r|\n/).length;

// console.log(result);
// console.log(typeof result);
