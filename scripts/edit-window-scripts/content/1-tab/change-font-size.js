//zmiana font-size

function changeFontSize(clickedElementVariable) {

    function actualFontSizeChanger() {
        $('.chrome-1204-actual-font-size').html(clickedElementVariable.css('font-size'));
    }

    function fontSizeChanger(selector, char) {
        selector.on('click', function () {
            let actualFontSize = parseFloat(clickedElementVariable.css('font-size'));

            if (char === 0) {
                clickedElementVariable.css('font-size', actualFontSize - 1);
            } else {
                clickedElementVariable.css('font-size', actualFontSize + 1);
            }
            actualFontSizeChanger();
        })
    }

    //aktualny font-size
    actualFontSizeChanger();
    //zmniejsz font-size
    fontSizeChanger($('.chrome-1204-smaller-font-size'), 0);
    //zwieksz font-size
    fontSizeChanger($('.chrome-1204-bigger-font-size'), 1);
}