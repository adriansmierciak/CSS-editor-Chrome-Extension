//select z pozycja

function selectPosition(editWindowVariable, clickedElement) {

    const select = editWindowVariable.find('.chrome-1204-position-select').find('select');

    select[0].value = clickedElement.css('position');

    select.on('change', () => {
        clickedElement.css('position', select[0].value)
    });
}