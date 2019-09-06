// resetuje style i okno edycji

function resetStyles(editWindowVariable, clickedElementVariable) {

    editWindowVariable.find('.chrome-1204-clear-btn').on('click', function () {

        clickedElementVariable.removeAttr('style');
        $('.chrome-1204-accordion').accordion("option", "active", false);

        setTimeout(function () {
            $('.chrome-1204-edit-window').hide("drop", {direction: "down"}, 500, function () {

                // przywraca pierwotny kolor
                $('.chrome-1204-color-picker').spectrum("set", clickedElementVariable.css('color'));

                // przywraca pierwotny fontsize
                $('.chrome-1204-actual-font-size').html(clickedElementVariable.css('font-size'));

                // odklikuje zaznaczone font style buttony
                $('.chrome-1204-font-style-change-button').removeClass('chrome-1204-font-style-change-button-active');

                // odklikuje zaznaczone align buttony
                $('.chrome-1204-align-btn').removeClass('chrome-1204-align-btn-active');

                // przywraca pierwotny padding
                $('.chrome-1204-padding-top-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-top'));
                $('.chrome-1204-padding-bottom-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-bottom'));
                $('.chrome-1204-padding-left-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-left'));
                $('.chrome-1204-padding-right-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-right'));

                // przywraca pierwotny margin
                $('.chrome-1204-margin-top-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-top'));
                $('.chrome-1204-margin-bottom-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-bottom'));
                $('.chrome-1204-margin-left-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-left'));
                $('.chrome-1204-margin-right-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-right'));

                // przywraca pierwotny kolor
                $('.chrome-1204-color-picker-bg').spectrum("set", clickedElementVariable.css('background-color'));

                //przywraca pierwotna wysokosc
                $('.chrome-1204-height-input').val(parseFloat(clickedElementVariable.css('height')));

                //przywraca pierwotna szerokosc
                $('.chrome-1204-width-input').val(parseFloat(clickedElementVariable.css('width')));

                //przywraca pierwotna pozycje
                editWindowVariable.find('.chrome-1204-position-select').find('select')[0].value = clickedElementVariable.css('position');

                //przywraca pierwotny display
                editWindowVariable.find('.chrome-1204-display-select').find('select')[0].value = clickedElementVariable.css('display');

                //animacja pojawiania sie okna edycji
                editWindowVariable.show("drop", {direction: "up"}, 500);
            });
        }, 1000);
    });
}