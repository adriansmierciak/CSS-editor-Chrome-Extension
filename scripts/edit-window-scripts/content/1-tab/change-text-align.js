//set text align

function changeTextAlign(clickedElementVariable) {

    $('.chrome-1204-align-btn').on('click', function () {
        $('.chrome-1204-align-btn').removeClass('chrome-1204-align-btn-active');
        $(this).addClass('chrome-1204-align-btn-active');
    });

    $('.chrome-1204-align-left').on('click', function () {
        clickedElementVariable.css('text-align', 'left');
    });

    $('.chrome-1204-align-center').on('click', function () {
        clickedElementVariable.css('text-align', 'center');
    });

    $('.chrome-1204-align-right').on('click', function () {
        clickedElementVariable.css('text-align', 'right');
    });
}