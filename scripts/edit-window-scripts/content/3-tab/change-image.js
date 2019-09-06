//zmiana zdjecia

function changeImg(clickedElementVariable) {

    $('.chrome-1204-img-changer-btn').on('click', function () {

        if (clickedElementVariable.is('img')) {
            (function getUserFileAndChangeImg() {
                let file = document.getElementById('chrome-1204-img-file').files[0],
                    reader = new FileReader();
                reader.onload = function (e) {
                    clickedElementVariable.attr('src', e.target.result);
                };
                reader.readAsDataURL(file);
            }());
        } else {
            alert('Choosen element on page isnt an image');
        }
    });
}