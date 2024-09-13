document.getElementById('switch1').addEventListener('click', function() {
    const output = document.getElementById('output1');
    if (output.classList.contains('off')) {
        output.classList.remove('off');
        output.classList.add('on');
        output.textContent = '出力1 (ON)';
    } else {
        output.classList.remove('on');
        output.classList.add('off');
        output.textContent = '出力1 (OFF)';
    }
});
