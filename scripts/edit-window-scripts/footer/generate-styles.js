// wyswietla wszystkie wybrane style

function generateStyles(editWindowVariable, generateWindowCssVariable, clickedElementVariable) {

    editWindowVariable.find('.chrome-1204-css-btn').on('click', function (e) {

        let generateStartX = e.clientX, generateStartY = e.clientY;

        $('.chrome-1204-css-window').remove();

        editWindowVariable.append(generateWindowCssVariable);



        $('.chrome-1204-css-window').css({
            'top': generateStartY + 'px', 'left': generateStartX + 'px'
        });

        function ifStyleEmpty() {

            if (clickedElementVariable.attr('style')) {

                return clickedElementVariable.attr('style');
            } else {

                return 'No styles selected.'
            }
        }

        function copyToClipboard(element) {
            let $temp = $('<input>');

            $($temp).addClass('chrome-1204-hidden-input');

            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }



        $('.chrome-1204-css-text').html(ifStyleEmpty());

        setTimeout(() => {
            $('.chrome-1204-css-window').addClass('chrome-1204-css-window-visible');
        }, 100);

        $('.chrome-1204-close-css-window').on('click', () => {

            $('.chrome-1204-css-window').removeClass('chrome-1204-css-window-visible');



            setTimeout(() => {
                $('.chrome-1204-css-window').remove();
            }, 800);

        });

        $('.chrome-1204-copy-css').on('click', () => {
            copyToClipboard($('.chrome-1204-css-text'));
        })
    });


}