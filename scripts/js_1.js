// 空白削除ツール
const removeSpaces = document.querySelector("#textarea_remove_spaces");
const output = document.querySelector("#output");
const clickRemoveSpaces = document.querySelector("#click_remove_spaces");

function butotnClick() {
    let str = removeSpaces.value;
    str = str.replace(/\s/g, '')
    // str = str.replace(/\s+/g, '')
    output.innerText = str;
}
clickRemoveSpaces.addEventListener("click", butotnClick)

// 文字数カウント
const textareaCount = document.getElementById("textarea_count")
let inputText = document.createElement('div');
let parent = textareaCount.parentElement;
parent.insertBefore(inputText, textareaCount);
textareaCount.addEventListener('keyup', function() {
    let inputTextNum = textareaCount.value.length;
    inputText.innerHTML = '<p>「' + (inputTextNum) + '」文字入力されています。</p>';
  });

// ボタンを押したら入力画面が現れる
const btnAppear = document.getElementById('btn-appear');
const textareaAppear = document.getElementById('textarea-appear');
const checkHide = document.getElementById("check_hide")

btnAppear.addEventListener('click', function() {
    textareaAppear.style.display = 'block';
    checkHide.style.display="block"
});


function butotnClick() {

    textareaAppear.style.display = 'none';
    checkHide.style.display = "none"
}

checkHide.addEventListener("click", butotnClick)