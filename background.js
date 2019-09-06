'use strict';

let contextMenuItem = {
    "id": 'internetowyEdytorCSS',
    "title": 'Internetowy edytor CSS',
    "contexts": ['all']
};

chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onClicked.addListener(function() {


//wszystkie biblioteki ponizej i style dodaja sie do strony po kliknieciu w ikonke dodatku

//wstrzykuje plik 'insert-style.css' do aktualnie otwartej karty
    chrome.tabs.insertCSS(null, {file: 'styles/other-css/insert-style.css'});

//wstrzykuje na stronie cssy jquery.ui
    chrome.tabs.insertCSS(null, {file: 'styles/other-css/jquery-ui.min.css'});

//wstrzykuje na stronie cssy spectrum.css
    chrome.tabs.insertCSS(null, {file: 'styles/other-css/spectrum.css'});

//wstrzykuje jQuery do aktualnie otwartej karty
    chrome.tabs.executeScript(null, {file: 'scripts/other-scripts/jQuery.js'});

//wstrzykuje na strone jquery.ui
    chrome.tabs.executeScript(null, {file: 'scripts/other-scripts/jQuery-ui.js'});

//wstrzykuje spectrum.js do aktualnie otwartej karty
    chrome.tabs.executeScript(null, {file: 'scripts/other-scripts/spectrum.js'});



//wszystkie pliki z folderu edit-window-scripts
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/header/style-edit-window.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/header/close-window.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/header/minimize-window.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/header/maximize-window.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/footer/show-clicked-element.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/footer/generate-styles.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/footer/reset-styles.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/1-tab/change-color.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/1-tab/change-font-size.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/1-tab/change-text-style.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/1-tab/change-text-align.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/1-tab/change-text-content.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/2-tab/add-padding.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/2-tab/add-margin.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/3-tab/change-background.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/3-tab/change-height-width.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/3-tab/change-image.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/4-tab/select-position.js'});
    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/content/4-tab/select-display.js'});

    chrome.tabs.executeScript(null, {file: 'scripts/edit-window-scripts/all-functions-context-menu.js'});
});