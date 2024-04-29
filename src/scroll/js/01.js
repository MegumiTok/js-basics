function countScroll(){
    const target = document.getElementById('target');
    document.getElementById('output').innerHTML = target.scrollLeft;
}

function moveScroll(){
    const target = document.getElementById('target2');
    target.scrollLeft += 50;
}

window.onload = function() {
    const target = document.getElementById('target3');
    const output = document.getElementById('output3');

    // 初期のスクロール量を表示
    output.innerHTML = target.scrollLeft;

    // スクロールイベントリスナーを追加
    target3.addEventListener('scroll', function() {
        output.innerHTML = target.scrollLeft;
    });
};

function moveScroll3(){
    const target = document.getElementById('target3');
    target.scrollLeft += 50;
}
