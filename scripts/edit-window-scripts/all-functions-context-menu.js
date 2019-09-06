'use strict';

$(function () {

    let contextMenuElement = $(document.getSelection().baseNode.parentNode);
    let language = 'pl', theme = 'dark', size = 'normal';

    chrome.storage.sync.get(['lang'], function (result) {

        if (result.lang === 'pl' || result.lang === undefined) {
            language = 'pl';
        } else {
            language = 'eng';
        }

        chrome.storage.sync.get(['theme'], function (result) {
            if (result.theme === 'dark' || result.theme === undefined) {
                theme = 'dark';
            } else if (result.theme === 'light') {
                theme = 'light';
            } else if (result.theme === 'kopi') {
                theme = 'kopi';
            }

            chrome.storage.sync.get(['size'], function(result) {
                if (result.size === 'normal' || result.size === undefined) {
                    size = 'normal';
                } else {
                    size = 'big';
                }

                const $editWindowHTMLEng = '<tag1204 class="chrome-1204-edit-window"> <tag1204 class="chrome-1204-content"> <tag1204 class="chrome-1204-header chrome-1204-draggable-handle"> <tag1204 class="chrome-1204-title">Edit window</tag1204> <tag1204 class="chrome-1204-minimize-icon">▬</tag1204> <tag1204 class="chrome-1204-maximize-icon">❐</tag1204> <tag1204 class="chrome-1204-close-icon">✘</tag1204> </tag1204> <tag1204 class="chrome-1204-text"> <tag1204 class="chrome-1204-accordion"> <h3>1. Text styles</h3> <tag1204> <tag1204 class="chrome-1204-color-size-wrapper"> <tag1204 class="chrome-1204-color-picker-wrapper"> <tag1204 class="chrome-1204-color-picker-text chrome-1204-common-text">Color</tag1204> <input type=\'text\' class="chrome-1204-color-picker"/> </tag1204> <tag1204 class="chrome-1204-font-size-changer-wrapper"> <tag1204 class="chrome-1204-font-size-text chrome-1204-common-text">Size</tag1204> <tag1204 class="chrome-1204-size-buttons-wrapper"> <tag1204 class="chrome-1204-font-size-button chrome-1204-smaller-font-size">- </tag1204> <tag1204 class="chrome-1204-font-size-button chrome-1204-actual-font-size"></tag1204> <tag1204 class="chrome-1204-font-size-button chrome-1204-bigger-font-size">+</tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-style-align-wrapper"> <tag1204 class="chrome-1204-font-style-changer"> <tag1204 class="chrome-1204-font-style-change-text chrome-1204-common-text">Style </tag1204> <tag1204 class="chrome-1204-font-style-buttons-wrapper"> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-font-weight-bold">B </tag1204> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-font-style-italic"> I </tag1204> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-text-underline">U </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-text-align-wrapper"> <tag1204 class="chrome-1204-text-align-text chrome-1204-common-text">Align</tag1204> <tag1204 class="chrome-1204-align-buttons-wrapper"> <tag1204 class="chrome-1204-align-btn chrome-1204-align-left">L</tag1204> <tag1204 class="chrome-1204-align-btn chrome-1204-align-center">C</tag1204> <tag1204 class="chrome-1204-align-btn chrome-1204-align-right">R</tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-text-changer-wrapper"> <tag1204 class="chrome-1204-text-change-text chrome-1204-common-text">Text</tag1204> <textarea class="chrome-1204-text-change"></textarea> </tag1204> </tag1204> <h3>2. Padding and Margin</h3> <tag1204> <tag1204 class="chrome-1204-padding-edit-wrapper"> <tag1204 class="chrome-1204-padding-edit-text chrome-1204-common-text">Padding</tag1204> <input type="text" value="10" class="chrome-1204-padding-input"> <tag1204 class="chrome-1204-padding-add"> <tag1204 class="chrome-1204-padding-top-big-wrapper"> <tag1204 class="chrome-1204-padding-top-text chrome-1204-common-text-mini">Top</tag1204> <tag1204 class="chrome-1204-padding-top-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-top-plus">+</tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-top-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-top-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-bottom-big-wrapper"> <tag1204 class="chrome-1204-padding-bottom-text chrome-1204-common-text-mini">Bottom </tag1204> <tag1204 class="chrome-1204-padding-bottom-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-bottom-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-bottom-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-bottom-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-left-big-wrapper"> <tag1204 class="chrome-1204-padding-left-text chrome-1204-common-text-mini">Left </tag1204> <tag1204 class="chrome-1204-padding-left-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-left-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-left-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-left-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-right-big-wrapper"> <tag1204 class="chrome-1204-padding-right-text chrome-1204-common-text-mini">Right </tag1204> <tag1204 class="chrome-1204-padding-right-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-right-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-right-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-right-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-edit-wrapper"> <tag1204 class="chrome-1204-margin-edit-text chrome-1204-common-text">Margin</tag1204> <input type="text" value="10" class="chrome-1204-margin-input"> <tag1204 class="chrome-1204-margin-add"> <tag1204 class="chrome-1204-margin-top-big-wrapper"> <tag1204 class="chrome-1204-margin-top-text chrome-1204-common-text-mini">Top</tag1204> <tag1204 class="chrome-1204-margin-top-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-top-plus">+</tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-top-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-top-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-bottom-big-wrapper"> <tag1204 class="chrome-1204-margin-bottom-text chrome-1204-common-text-mini">Bottom </tag1204> <tag1204 class="chrome-1204-margin-bottom-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-bottom-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-bottom-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-bottom-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-left-big-wrapper"> <tag1204 class="chrome-1204-margin-left-text chrome-1204-common-text-mini">Left </tag1204> <tag1204 class="chrome-1204-margin-left-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-left-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-left-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-left-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-right-big-wrapper"> <tag1204 class="chrome-1204-margin-right-text chrome-1204-common-text-mini">Right </tag1204> <tag1204 class="chrome-1204-margin-right-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-right-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-right-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-right-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <h3>3. Background, Image and Size</h3> <tag1204> <tag1204 class="chrome-1204-background-changer-wrapper"> <tag1204 class="chrome-1204-color-picker-bg-text chrome-1204-common-text">Background</tag1204> <input type=\'text\' class="chrome-1204-color-picker-bg"/> </tag1204> <tag1204 class="chrome-1204-size-edit-wrapper"> <tag1204 class="chrome-1204-size-edit-text chrome-1204-common-text">Size</tag1204> <tag1204 class="chrome-1204-height-width-wrapper"> <tag1204 class="chrome-1204-size-mini-wrapper chrome-1204-height-wrapper"> <tag1204 class="chrome-1204-height-text chrome-1204-common-text-mini">Height</tag1204> <input type="text" class="chrome-1204-height-width-input chrome-1204-height-input"> </tag1204> <tag1204 class="chrome-1204-size-mini-wrapper chrome-1204-width-wrapper"> <tag1204 class="chrome-1204-width-text chrome-1204-common-text-mini">Width</tag1204> <input type="text" class="chrome-1204-height-width-input chrome-1204-width-input"> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-img-changer"> <tag1204 class="chrome-1204-img-changer-text chrome-1204-common-text">Image</tag1204> <tag1204 class="chrome-1204-img-input-wrapper"> <input type="file" id="chrome-1204-img-file" name="chrome-1204-img-file" class="chrome-1204-img-changer-input" accept="image/png, image/jpeg"> <label class="chrome-1204-img-changer-label" for="chrome-1204-img-file">Choose a file...</label> <tag1204 class="chrome-1204-img-changer-btn">Change image</tag1204> </tag1204> </tag1204> </tag1204> <h3>4. Position and Display</h3> <tag1204> <tag1204 class="chrome-1204-position-display-wrapper"> <tag1204 class="chrome-1204-position-wrapper"> <tag1204 class="chrome-1204-position-text chrome-1204-common-text">Position</tag1204> <tag1204 class="chrome-1204-position-select"> <select> <option value="static">Static</option> <option value="relative">Relative</option> <option value="absolute">Absolute</option> <option value="fixed">Fixed</option> <option value="sticky">Sticky</option> </select> </tag1204> </tag1204> <tag1204 class="chrome-1204-display-wrapper"> <tag1204 class="chrome-1204-display-text chrome-1204-common-text">Display</tag1204> <tag1204 class="chrome-1204-display-select"> <select> <option value="inline">Inline</option> <option value="block">Block</option> <option value="flex">Flex</option> <option value="inline-block">Inline-block</option> <option value="inline-flex">Inline-flex</option> <option value="none">None</option> </select> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-footer-wrapper"> <tag1204 class="chrome-1204-footer"> <tag1204 class="chrome-1204-css-btn chrome-1204-footer-btn">Generate CSS</tag1204> <tag1204 class="chrome-1204-clear-btn chrome-1204-footer-btn">Reset styles</tag1204> <tag1204 class="chrome-1204-go-to-btn chrome-1204-footer-btn">Show element</tag1204> <tag1204 class="chrome-1204-close-btn chrome-1204-footer-btn chrome-1204-close-icon">Close</tag1204> </tag1204> <tag1204 class="chrome-1204-author chrome-1204-draggable-handle">Web CSS Editor</tag1204> </tag1204> </tag1204> </tag1204>',


                    $editWindowHTMLPl = '<tag1204 class="chrome-1204-edit-window"> <tag1204 class="chrome-1204-content"> <tag1204 class="chrome-1204-header chrome-1204-draggable-handle"> <tag1204 class="chrome-1204-title">Okno edycji</tag1204> <tag1204 class="chrome-1204-minimize-icon">▬</tag1204> <tag1204 class="chrome-1204-maximize-icon">❐</tag1204> <tag1204 class="chrome-1204-close-icon">✘</tag1204> </tag1204> <tag1204 class="chrome-1204-text"> <tag1204 class="chrome-1204-accordion"> <h3>1. Style tekstu</h3> <tag1204> <tag1204 class="chrome-1204-color-size-wrapper"> <tag1204 class="chrome-1204-color-picker-wrapper"> <tag1204 class="chrome-1204-color-picker-text chrome-1204-common-text">Kolor</tag1204> <input type=\'text\' class="chrome-1204-color-picker"/> </tag1204> <tag1204 class="chrome-1204-font-size-changer-wrapper"> <tag1204 class="chrome-1204-font-size-text chrome-1204-common-text">Rozmiar</tag1204> <tag1204 class="chrome-1204-size-buttons-wrapper"> <tag1204 class="chrome-1204-font-size-button chrome-1204-smaller-font-size">- </tag1204> <tag1204 class="chrome-1204-font-size-button chrome-1204-actual-font-size"></tag1204> <tag1204 class="chrome-1204-font-size-button chrome-1204-bigger-font-size">+</tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-style-align-wrapper"> <tag1204 class="chrome-1204-font-style-changer"> <tag1204 class="chrome-1204-font-style-change-text chrome-1204-common-text">Styl</tag1204> <tag1204 class="chrome-1204-font-style-buttons-wrapper"> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-font-weight-bold">B </tag1204> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-font-style-italic"> I </tag1204> <tag1204 class="chrome-1204-font-style-change-button chrome-1204-text-underline">U </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-text-align-wrapper"> <tag1204 class="chrome-1204-text-align-text chrome-1204-common-text">Wyrównanie</tag1204> <tag1204 class="chrome-1204-align-buttons-wrapper"> <tag1204 class="chrome-1204-align-btn chrome-1204-align-left">L</tag1204> <tag1204 class="chrome-1204-align-btn chrome-1204-align-center">C</tag1204> <tag1204 class="chrome-1204-align-btn chrome-1204-align-right">R</tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-text-changer-wrapper"> <tag1204 class="chrome-1204-text-change-text chrome-1204-common-text">Tekst</tag1204> <textarea class="chrome-1204-text-change"></textarea> </tag1204> </tag1204> <h3>2. Odstęp i Margines</h3> <tag1204> <tag1204 class="chrome-1204-padding-edit-wrapper"> <tag1204 class="chrome-1204-padding-edit-text chrome-1204-common-text">Odstęp</tag1204> <input type="text" value="10" class="chrome-1204-padding-input"> <tag1204 class="chrome-1204-padding-add"> <tag1204 class="chrome-1204-padding-top-big-wrapper"> <tag1204 class="chrome-1204-padding-top-text chrome-1204-common-text-mini">Góra</tag1204> <tag1204 class="chrome-1204-padding-top-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-top-plus">+</tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-top-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-top-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-bottom-big-wrapper"> <tag1204 class="chrome-1204-padding-bottom-text chrome-1204-common-text-mini">Dół </tag1204> <tag1204 class="chrome-1204-padding-bottom-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-bottom-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-bottom-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-bottom-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-left-big-wrapper"> <tag1204 class="chrome-1204-padding-left-text chrome-1204-common-text-mini">Lewo </tag1204> <tag1204 class="chrome-1204-padding-left-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-left-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-left-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-left-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-right-big-wrapper"> <tag1204 class="chrome-1204-padding-right-text chrome-1204-common-text-mini">Prawo </tag1204> <tag1204 class="chrome-1204-padding-right-buttons chrome-1204-padding-buttons-common"> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-right-plus">+ </tag1204> <tag1204 class="chrome-1204-padding-button chrome-1204-padding-right-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-padding-value chrome-1204-padding-right-value"> <tag1204 class="chrome-1204-padding-value-number"></tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-edit-wrapper"> <tag1204 class="chrome-1204-margin-edit-text chrome-1204-common-text">Margines</tag1204> <input type="text" value="10" class="chrome-1204-margin-input"> <tag1204 class="chrome-1204-margin-add"> <tag1204 class="chrome-1204-margin-top-big-wrapper"> <tag1204 class="chrome-1204-margin-top-text chrome-1204-common-text-mini">Góra</tag1204> <tag1204 class="chrome-1204-margin-top-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-top-plus">+</tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-top-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-top-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-bottom-big-wrapper"> <tag1204 class="chrome-1204-margin-bottom-text chrome-1204-common-text-mini">Dół </tag1204> <tag1204 class="chrome-1204-margin-bottom-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-bottom-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-bottom-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-bottom-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-left-big-wrapper"> <tag1204 class="chrome-1204-margin-left-text chrome-1204-common-text-mini">Lewo </tag1204> <tag1204 class="chrome-1204-margin-left-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-left-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-left-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-left-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-right-big-wrapper"> <tag1204 class="chrome-1204-margin-right-text chrome-1204-common-text-mini">Prawo </tag1204> <tag1204 class="chrome-1204-margin-right-buttons chrome-1204-margin-buttons-common"> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-right-plus">+ </tag1204> <tag1204 class="chrome-1204-margin-button chrome-1204-margin-right-minus">- </tag1204> </tag1204> <tag1204 class="chrome-1204-margin-value chrome-1204-margin-right-value"> <tag1204 class="chrome-1204-margin-value-number"></tag1204> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <h3>3. Tło, Obraz i Rozmiar</h3> <tag1204> <tag1204 class="chrome-1204-background-changer-wrapper"> <tag1204 class="chrome-1204-color-picker-bg-text chrome-1204-common-text">Tło</tag1204> <input type=\'text\' class="chrome-1204-color-picker-bg"/> </tag1204> <tag1204 class="chrome-1204-size-edit-wrapper"> <tag1204 class="chrome-1204-size-edit-text chrome-1204-common-text">Rozmiar</tag1204> <tag1204 class="chrome-1204-height-width-wrapper"> <tag1204 class="chrome-1204-size-mini-wrapper chrome-1204-height-wrapper"> <tag1204 class="chrome-1204-height-text chrome-1204-common-text-mini">Wysokość</tag1204> <input type="text" class="chrome-1204-height-width-input chrome-1204-height-input"> </tag1204> <tag1204 class="chrome-1204-size-mini-wrapper chrome-1204-width-wrapper"> <tag1204 class="chrome-1204-width-text chrome-1204-common-text-mini">Szerokość</tag1204> <input type="text" class="chrome-1204-height-width-input chrome-1204-width-input"> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-img-changer"> <tag1204 class="chrome-1204-img-changer-text chrome-1204-common-text">Obraz</tag1204> <tag1204 class="chrome-1204-img-input-wrapper"> <input type="file" id="chrome-1204-img-file" name="chrome-1204-img-file" class="chrome-1204-img-changer-input" accept="image/png, image/jpeg"> <label class="chrome-1204-img-changer-label" for="chrome-1204-img-file">Wybierz plik...</label> <tag1204 class="chrome-1204-img-changer-btn">Zmień obraz</tag1204> </tag1204> </tag1204> </tag1204> <h3>4. Pozycja i wyświetlanie</h3> <tag1204> <tag1204 class="chrome-1204-position-display-wrapper"> <tag1204 class="chrome-1204-position-wrapper"> <tag1204 class="chrome-1204-position-text chrome-1204-common-text">Pozycja</tag1204> <tag1204 class="chrome-1204-position-select"> <select> <option value="static">Static</option> <option value="relative">Relative</option> <option value="absolute">Absolute</option> <option value="fixed">Fixed</option> <option value="sticky">Sticky</option> </select> </tag1204> </tag1204> <tag1204 class="chrome-1204-display-wrapper"> <tag1204 class="chrome-1204-display-text chrome-1204-common-text">Wyświetlanie</tag1204> <tag1204 class="chrome-1204-display-select"> <select> <option value="inline">Inline</option> <option value="block">Block</option> <option value="flex">Flex</option> <option value="inline-block">Inline-block</option> <option value="inline-flex">Inline-flex</option> <option value="none">None</option> </select> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> </tag1204> <tag1204 class="chrome-1204-footer-wrapper"> <tag1204 class="chrome-1204-footer"> <tag1204 class="chrome-1204-css-btn chrome-1204-footer-btn">Generuj CSS</tag1204> <tag1204 class="chrome-1204-clear-btn chrome-1204-footer-btn">Resetuj style</tag1204> <tag1204 class="chrome-1204-go-to-btn chrome-1204-footer-btn">Pokaż element</tag1204> <tag1204 class="chrome-1204-close-btn chrome-1204-footer-btn chrome-1204-close-icon">Zamknij</tag1204> </tag1204> <tag1204 class="chrome-1204-author chrome-1204-draggable-handle">Internetowy edytor CSS</tag1204> </tag1204> </tag1204> </tag1204>',

                    $generateCssWindowEng = '<tag1204 class="chrome-1204-css-window"> <tag1204 class="chrome-1204-css-box"> <tag1204 class="chrome-1204-css-text"></tag1204> <tag1204 class="chrome-1204-css-buttons-wrapper"> <tag1204 class="chrome-1204-copy-css">Copy CSS</tag1204> <tag1204 class="chrome-1204-close-css-window">Close</tag1204> </tag1204> </tag1204> </tag1204>',

                    $generateCssWindowPl = '<tag1204 class="chrome-1204-css-window"> <tag1204 class="chrome-1204-css-box"> <tag1204 class="chrome-1204-css-text"></tag1204> <tag1204 class="chrome-1204-css-buttons-wrapper"> <tag1204 class="chrome-1204-copy-css">Kopiuj CSS</tag1204> <tag1204 class="chrome-1204-close-css-window">Zamknij</tag1204> </tag1204> </tag1204> </tag1204>';


                //zwraca polska wersje okna ze stylami albo angielska
                function generateWindowEngOrPl() {
                    if (language === 'eng') {
                        return $generateCssWindowEng;
                    } else {
                        return $generateCssWindowPl;
                    }
                }


                function allToOpenEditor() {

                    //przypisuje caly html okna edycji do strony
                    if (language === 'eng') {
                        $('body').append($editWindowHTMLEng);
                    } else {
                        $('body').append($editWindowHTMLPl);
                    }

                    let $clickedElement = contextMenuElement, $editWindow = $('.chrome-1204-edit-window');

                    if (theme === 'light') {
                        $editWindow.addClass('chrome-1204-light-theme');
                    } else if (theme === 'kopi') {
                        $editWindow.addClass('chrome-1204-kopi-theme');
                    }

                    if (size === 'big') {
                        $editWindow.addClass('chrome-1204-big-font-size');
                    }

                    //===================================================
                    //  Edit window scripts
                    //===================================================

                    //style-edit-window.js
                    editWindowScript($editWindow);


                    //===================================================
                    //  Header scripts
                    //===================================================

                    //close-window.js
                    closeEditWindow($editWindow);

                    //minimize-window.js
                    minimizeWindow($editWindow);

                    //maximize-window.js
                    maximizeWindow($editWindow);


                    //===================================================
                    //  Footer scripts
                    //===================================================

                    //show-clicked-element.js
                    showClickedElement($clickedElement);

                    //generate-styles-js
                    generateStyles($editWindow, generateWindowEngOrPl, $clickedElement);

                    //reset-style.js
                    resetStyles($editWindow, $clickedElement);


                    //===================================================
                    //  Content scripts
                    //===================================================

                    //================ 1 ==================

                    //change-color.js
                    changeColor($clickedElement);

                    //change-font-size.js
                    changeFontSize($clickedElement);

                    //change-text-style.js
                    changeStyleWeightDecoration($clickedElement);

                    //change-text-align.js
                    changeTextAlign($clickedElement);

                    //change-text-content.js
                    changeTextContent($clickedElement);


                    //================ 2 ==================

                    //add-padding.js
                    addPadding($clickedElement);

                    //add-margin.js
                    addMargin($clickedElement);


                    //================ 3 ==================

                    //change-background.js
                    changeBackground($clickedElement);

                    //change-height-width.js
                    changeHeightAndWidth($clickedElement);

                    //change-image.js
                    changeImg($clickedElement);


                    //================ 4 ==================

                    //select-position.js
                    selectPosition($editWindow, $clickedElement);

                    //select-display.js
                    selectDisplay($editWindow, $clickedElement);

                }


                //otwiera okno edycji lub wyswietla komunikat ze juz jedno jest otwarte

                if (!$('.chrome-1204-edit-window').length) {

                    allToOpenEditor();

                } else {

                    if (language === 'eng') {
                        alert('=========================================\n' +
                            '\xa0\xa0\xa0\xa0\xa0\xa0\xa0First close actual edit window\n' +
                            '=========================================');
                    } else {
                        alert('=========================================\n' +
                            '\xa0\xa0\xa0\xa0\xa0\xa0\xa0Najpierw zamknij aktualne okno edycji\n' +
                            '=========================================');
                    }
                }
            });
        });
    });
});