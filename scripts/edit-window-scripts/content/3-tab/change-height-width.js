//ustawienie height i width

function changeHeightAndWidth(clickedElementVariable) {
    const heightInput = $('.chrome-1204-height-input'), widthInput = $('.chrome-1204-width-input');

    (function changeHeightWidth() {
        heightInput.val(parseFloat(clickedElementVariable.css('height')));
        widthInput.val(parseFloat(clickedElementVariable.css('width')));

        heightInput.on('keyup', function () {
            clickedElementVariable.css('height', $(this).val());
        });

        widthInput.on('keyup', function () {
            clickedElementVariable.css('width', $(this).val());
        });
    }());

//zmiana height i width za kazdym razem po otworzeniu 3 taba accordionu
    (function changeHeightWidth3Tab() {
        $('.chrome-1204-edit-window').find('#ui-id-5').on('click', function () {
            heightInput.val(parseFloat(clickedElementVariable.css('height')));
            widthInput.val(parseFloat(clickedElementVariable.css('width')));
        });
    }());
}