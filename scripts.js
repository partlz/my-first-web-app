let photo1 = {
    photo: 'images/DSC_0086.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
};

let photo2 = {
    photo: 'images/DSC_0131.jpg',
    title: 'My title for photo number 2',
    description: 'What happened here, why is this a very nice image'
};

let photo3 = {
    photo: 'images/DSC_0140.jpg',
    title: 'My title for the third photo',
    description: 'What happened here, why is this a very nice image'
};

let photo4 = {
    photo: 'images/DSC_0235.jpg',
    title: 'My title for the 4th photo in the array',
    description: 'What happened here, why is this a very nice image'
};

let photo5 = {
    photo: 'images/DSC_0378.jpg',
    title: 'My title for the last photo',
    description: 'What happened here, why is this a very nice image'
};

let currentPhoto = 0;
let imagesData = [photo1, photo2, photo3, photo4, photo5]

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto);

$('.right').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
});

$('.left').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
});

imagesData.forEach((item, index) => {
    $('ul').append(`<li><img class="thumbnail" data-index="${index}" src=${item.photo}></li>`);
    $('.thumbnail').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex;
        loadPhoto(currentPhoto);
    })
});
