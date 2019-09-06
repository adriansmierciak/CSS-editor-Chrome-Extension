//zmiana font-styli, font-weight, text-decoration

function changeStyleWeightDecoration(clickedElementVariable) {

    $('.chrome-1204-font-style-change-button').on('click', function () {
        $(this).toggleClass('chrome-1204-font-style-change-button-active');
    });

    //font weight bold
    $('.chrome-1204-font-weight-bold').on('click', function () {
        if ($(this).hasClass('chrome-1204-font-style-change-button-active')) {
            clickedElementVariable.css('font-weight', 'bold');
        } else {
            clickedElementVariable.css('font-weight', 'normal');
        }
    });

    //font style italic
    $('.chrome-1204-font-style-italic').on('click', function () {
        if ($(this).hasClass('chrome-1204-font-style-change-button-active')) {
            clickedElementVariable.css('font-style', 'italic');
        } else {
            clickedElementVariable.css('font-style', 'normal');
        }
    });

    //text decoration underline
    $('.chrome-1204-text-underline').on('click', function () {
        if ($(this).hasClass('chrome-1204-font-style-change-button-active')) {
            clickedElementVariable.css('text-decoration', 'underline');
        } else {
            clickedElementVariable.css('text-decoration', 'unset');
        }
    });
}