//scroll to/ show clicked element

function showClickedElement(clickedElementVariable) {

    $('.chrome-1204-go-to-btn').on('click', () => {

        $('html, body').animate({
            scrollTop: clickedElementVariable.offset().top - 300
        }, 700);

        setTimeout(() => {
            clickedElementVariable.addClass('chrome-1204-show-clicked-element');

            let counter1 = 0, counter2 = 700;

            for (let i = 0; i < 2; i++) {

                setTimeout(() => {
                    clickedElementVariable.addClass('chrome-1204-show-clicked-element-2');
                }, counter1);

                setTimeout(() => {
                    clickedElementVariable.removeClass('chrome-1204-show-clicked-element-2');
                }, counter2);

                counter1 += 1400;
                counter2 += 1400;
            }
        }, 800);

        setTimeout(() => {
            clickedElementVariable.removeClass('chrome-1204-show-clicked-element');
        }, 4000)

    });
}