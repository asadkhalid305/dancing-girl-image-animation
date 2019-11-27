let vh = window.innerHeight / 100;
getOffset = () => Math.floor((window.pageYOffset) / vh);

$(function () {
    imgNo = 4;
    perc = 14;

    imgUrl = `./assets/images/bg_${imgNo}.jpg`
    $('#girlImage').css({
        'background-image': `url('${imgUrl}')`,
        'opacity': '1'
    })

    window.addEventListener('scroll', () => {
        if (getOffset() > perc && imgNo < 145) {
            // downscroll code
            imgNo++;
            perc += 14
            $('#girlImage').css({
                'background-image': `url('./assets/images/bg_${imgNo}.jpg')`,
                'opacity': '1'
            })
            console.log('F:', imgNo);
        } else if (getOffset() < (perc - 14) && imgNo > 4) {
            // upscroll code
            imgNo--;
            perc -= 14
            $('#girlImage').css({
                'background-image': `url('./assets/images/bg_${imgNo}.jpg')`,
                'opacity': '1'
            })
            console.log('B: ', imgNo);
        }

        if (window.pageYOffset >= 566 && window.pageYOffset <= (566 + window.innerHeight)) {
            console.log('hello carousel');
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 7,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
        }
    })
});