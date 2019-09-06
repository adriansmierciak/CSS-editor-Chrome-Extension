//===================================================
//  Edit window scripts
//===================================================

function editWindowScript(editWindowVariable) {

    //accordion
    $('.chrome-1204-accordion').accordion({
        active: false, collapsible: true, heightStyle: "content"
    });

    //ukrycie okna edycji przed animacja
    editWindowVariable.addClass('chrome-1204-edit-window-hidden');

    //animacja pojawiania sie okna edycji
    editWindowVariable.show("drop", {direction: "up"}, 500);

    // okno edycji jest draggable
    editWindowVariable.draggable({
        handle: editWindowVariable.find('.chrome-1204-draggable-handle'), containment: 'window'
    });
}

