//minimalizuje okno

function minimizeWindow(editWindowVariable) {

    $('.chrome-1204-minimize-icon').on('click', () => {

        editWindowVariable.css('left', editWindowVariable.offset().left);
        editWindowVariable.addClass('chrome-1204-mini-maxi-transition');

        setTimeout(() => {
            editWindowVariable.addClass('chrome-1204-minimized');
        }, 100);

        setTimeout(() => {
            editWindowVariable.addClass('chrome-1204-minimize-width');
        }, 600);
    })
}