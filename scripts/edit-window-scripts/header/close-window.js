//wylacza okno edycji

function closeEditWindow(editWindowVariable) {

    editWindowVariable.find('.chrome-1204-close-icon').on('click', function () {
        let thisCross = $(this);

        thisCross.closest('.chrome-1204-edit-window').hide("drop", {direction: "down"}, 500, function () {
            thisCross.closest('.chrome-1204-edit-window').remove();
        });
    });
}