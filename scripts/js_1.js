// 空白削除ツール
const removeSpaces = document.querySelector("#textarea_remove_spaces");
const output = document.querySelector("#output");
const clickRemoveSpaces = document.querySelector("#click_remove_spaces");

function btnClick() {
    let str = removeSpaces.value;
    str = str.replace(/\s/g, '')
    // str = str.replace(/\s+/g, '')
    output.innerText = str;
}
clickRemoveSpaces.addEventListener("click", btnClick)

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

//文字の色を変える
const btnColor = document.getElementById("btn-color")

function randomColor(number){
    return Math.floor(Math.random() * (number + 1))
 }

//  to add an event handler that we can remove with an AbortSignal
const controller = new AbortController();

btnColor.addEventListener("click", ()=>{
    const rndCol = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`
    // document.body.style.backgroundColor = rndCol
    btnColor.style.color =  rndCol
 },{signal: controller.signal})

 const btnRemove = document.getElementById("btn-abort")

 btnRemove.addEventListener("click",()=>{
    controller.abort(); // removes any/all event handlers associated with this controller
 })

 // マジックパレット
 function random(number) {
    return Math.floor(Math.random()*number);
  }

  function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
  }

  const container = document.querySelector('#container');
  container.addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());