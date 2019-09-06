//maxymalizuje okno

function maximizeWindow(editWindowVariable) {

    $('.chrome-1204-maximize-icon').on('click', () => {

        editWindowVariable.removeClass('chrome-1204-minimize-width');

        setTimeout(() => {
            editWindowVariable.removeClass('chrome-1204-minimized');

            setTimeout(() => {
                editWindowVariable.removeClass('chrome-1204-mini-maxi-transition');
            }, 800)
        }, 600)
    })
}