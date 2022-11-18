// 空白削除ツール
const removeSpaces = document.querySelector("#textarea_remove_spaces");
const output = document.querySelector("#output");
const clickRemoveSpaces = document.querySelector("#click_remove_spaces");



function btnClick() {
    let str = removeSpaces.value;
    str = str.replace(/\s/g, '')
    // str = str.replace(/\s+/g, '')
    output.innerText = str;
    navigator.clipboard.writeText(str);
}
clickRemoveSpaces.addEventListener("click", btnClick)

const copyText = () => {
    const inputText = document.getElementById("inputText")

    // Select the text field
    inputText.select();
    inputText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(inputText.value);

    // Alert the copied text
    // alert("Copied the text: " + inputText.value);
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + inputText.value;

}


