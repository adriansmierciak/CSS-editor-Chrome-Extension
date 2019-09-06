//margin
function addMargin(clickedElementVariable) {
    const marginInput = $('.chrome-1204-margin-input'),
        marginTopBtnPlus = $('.chrome-1204-margin-top-plus'),
        marginTopBtnMinus = $('.chrome-1204-margin-top-minus'),
        marginBottomBtnPlus = $('.chrome-1204-margin-bottom-plus'),
        marginBottomBtnMinus = $('.chrome-1204-margin-bottom-minus'),
        marginLeftBtnPlus = $('.chrome-1204-margin-left-plus'),
        marginLeftBtnMinus = $('.chrome-1204-margin-left-minus'),
        marginRightBtnPlus = $('.chrome-1204-margin-right-plus'),
        marginRightBtnMinus = $('.chrome-1204-margin-right-minus');

    let changeNumber = parseFloat(marginInput.val());

    //margin-top plus i minus
    function marginTop(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('margin-top', parseFloat(clickedElementVariable.css('margin-top')) + plusMinus + 'px');
        });
    }

    //margin-bottom plus i minus
    function marginBottom(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('margin-bottom', parseFloat(clickedElementVariable.css('margin-bottom')) + plusMinus + 'px');
        });
    }

    //margin-left plus i minus
    function marginLeft(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('margin-left', parseFloat(clickedElementVariable.css('margin-left')) + plusMinus + 'px');
        });
    }

    //margin-left plus i minus
    function marginRight(selector, plusMinus) {
        selector.on('click', function () {
            clickedElementVariable.css('margin-right', parseFloat(clickedElementVariable.css('margin-right')) + plusMinus + 'px');
        });
    }

    function allMargin() {
        marginTop(marginTopBtnPlus, changeNumber);
        marginTop(marginTopBtnMinus, -(changeNumber));
        marginBottom(marginBottomBtnPlus, changeNumber);
        marginBottom(marginBottomBtnMinus, -(changeNumber));
        marginLeft(marginLeftBtnPlus, changeNumber);
        marginLeft(marginLeftBtnMinus, -(changeNumber));
        marginRight(marginRightBtnPlus, changeNumber);
        marginRight(marginRightBtnMinus, -(changeNumber));
    }

    allMargin();

    //actual margin
    function writeActualMargin() {
        $('.chrome-1204-margin-top-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-top'));
        $('.chrome-1204-margin-bottom-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-bottom'));
        $('.chrome-1204-margin-left-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-left'));
        $('.chrome-1204-margin-right-value').find('.chrome-1204-margin-value-number').html(clickedElementVariable.css('margin-right'));
    }

    writeActualMargin();

    $('.chrome-1204-margin-button').on('click', function () {
        writeActualMargin();
    });

    marginInput.on('change', function () {
        changeNumber = parseFloat(marginInput.val());

        marginTopBtnPlus.off('click');
        marginTopBtnMinus.off('click');
        marginBottomBtnPlus.off('click');
        marginBottomBtnMinus.off('click');
        marginLeftBtnPlus.off('click');
        marginLeftBtnMinus.off('click');
        marginRightBtnPlus.off('click');
        marginRightBtnMinus.off('click');

        allMargin();

        $('.chrome-1204-margin-button').on('click', function () {
            writeActualMargin();
        });
    });
}