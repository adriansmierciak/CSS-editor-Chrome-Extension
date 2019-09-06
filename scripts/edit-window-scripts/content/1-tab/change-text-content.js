//zmiana tekstu

function changeTextContent(clickedElementVariable) {

    const chrome1204TextChange = $('.chrome-1204-text-change');

    chrome1204TextChange.val(clickedElementVariable.html());

    chrome1204TextChange.on('keyup', function () {
        clickedElementVariable.html(chrome1204TextChange.val());
    });
}