//paddingi

function addPadding(clickedElementVariable) {

    const paddingInput = $('.chrome-1204-padding-input'),
        paddingTopBtnPlus = $('.chrome-1204-padding-top-plus'),
        paddingTopBtnMinus = $('.chrome-1204-padding-top-minus'),
        paddingBottomBtnPlus = $('.chrome-1204-padding-bottom-plus'),
        paddingBottomBtnMinus = $('.chrome-1204-padding-bottom-minus'),
        paddingLeftBtnPlus = $('.chrome-1204-padding-left-plus'),
        paddingLeftBtnMinus = $('.chrome-1204-padding-left-minus'),
        paddingRightBtnPlus = $('.chrome-1204-padding-right-plus'),
        paddingRightBtnMinus = $('.chrome-1204-padding-right-minus');

    let changeNumber = parseFloat(paddingInput.val());

    //padidng-top plus i minus
    function paddingTop(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('padding-top', parseFloat(clickedElementVariable.css('padding-top')) + plusMinus + 'px');
        });
    }

    //padding-bottom plus i minus
    function paddingBottom(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('padding-bottom', parseFloat(clickedElementVariable.css('padding-bottom')) + plusMinus + 'px');
        });
    }

    //padding-left plus i minus
    function paddingLeft(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('padding-left', parseFloat(clickedElementVariable.css('padding-left')) + plusMinus + 'px');
        });
    }

    //padding-left plus i minus
    function paddingRight(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('padding-right', parseFloat(clickedElementVariable.css('padding-right')) + plusMinus + 'px');
        });
    }

    function allPadding() {
        paddingTop(paddingTopBtnPlus, changeNumber);
        paddingTop(paddingTopBtnMinus, -(changeNumber));
        paddingBottom(paddingBottomBtnPlus, changeNumber);
        paddingBottom(paddingBottomBtnMinus, -(changeNumber));
        paddingLeft(paddingLeftBtnPlus, changeNumber);
        paddingLeft(paddingLeftBtnMinus, -(changeNumber));
        paddingRight(paddingRightBtnPlus, changeNumber);
        paddingRight(paddingRightBtnMinus, -(changeNumber));
    }

    allPadding();

    //actual padding
    function writeActualPadding() {
        $('.chrome-1204-padding-top-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-top'));
        $('.chrome-1204-padding-bottom-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-bottom'));
        $('.chrome-1204-padding-left-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-left'));
        $('.chrome-1204-padding-right-value').find('.chrome-1204-padding-value-number').html(clickedElementVariable.css('padding-right'));
    }

    writeActualPadding();

    $('.chrome-1204-padding-button').on('click', function () {
        writeActualPadding();
    });

    paddingInput.on('change', function () {
        changeNumber = parseFloat(paddingInput.val());

        paddingTopBtnPlus.off('click');
        paddingTopBtnMinus.off('click');
        paddingBottomBtnPlus.off('click');
        paddingBottomBtnMinus.off('click');
        paddingLeftBtnPlus.off('click');
        paddingLeftBtnMinus.off('click');
        paddingRightBtnPlus.off('click');
        paddingRightBtnMinus.off('click');

        allPadding();

        $('.chrome-1204-padding-button').on('click', function () {
            writeActualPadding();
        });
    });
}