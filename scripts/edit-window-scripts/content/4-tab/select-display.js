//select z display

function selectDisplay(editWindowVariable, clickedElement) {

    const select = editWindowVariable.find('.chrome-1204-display-select').find('select');

    select[0].value = clickedElement.css('display');
    select.on('change', () => {
        clickedElement.css('display', select[0].value)
    });

}