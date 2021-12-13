let position = 0;
let head = document.getElementById("head");
let element = document.getElementById("menu");

$(document).ready(function () {

    $("a.hex").click(function() {
        var top = 15;
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    }); 

    $("#nav a").click(function(e) {
        e.preventDefault();
        $("#nav a").removeClass('text-indigo-600');
        $(this).toggleClass('text-indigo-600');
    });

    $("#tab div").click(function(e) {
        e.preventDefault();
        $("#tab div").removeClass('font-bold text-indigo-600');
        $(this).toggleClass('font-bold text-indigo-600');
    });

    // tab
    $('#tab div').on('click', function(e) {
        let tab = $(this).data('id');
        e.preventDefault();
        if(tab === 'education') {
            $('#education').removeClass('hidden');
            $('#work').removeClass('block');
            $('#education').addClass('block');
            $('#work').addClass('hidden');
        } else {
            $('#work').removeClass('hidden');
            $('#education').removeClass('block');
            $('#work').addClass('block');
            $('#education').addClass('hidden');
        }
    });

});


//window.addEventListener('scroll', function(e) {
    //position = window.scrollY;
    //let scrollDistance = window.scrollY;

    // alert('work !');
    // if (window.innerWidth > 768) {
    //   document.querySelectorAll('.section').forEach((el, i) => {
    //     if (el.offsetTop - document.querySelector('.nav').clientHeight <= position) {
    //       document.querySelectorAll('.nav a').forEach((el) => {
    //         if (el.classList.contains('active')) {
    //           el.classList.remove('active');
    //         }
    //       });
  
    //       document.querySelectorAll('.nav')[i].querySelector('a').classList.add('active');
    //     }
    //   });
    // }
//});

window.addEventListener('scroll', function(e) {

    position = window.scrollY;

    if( position >= 100 ) {
        element.classList.add("py-2");
        element.classList.remove("py-6");
    } else {
        element.classList.add("py-6");
        element.classList.remove("py-2");
    }

    if (window.innerWidth > 768) {
        document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= position) {
            document.querySelectorAll('.nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                el.classList.remove('active');
                }
            });
    
            document.querySelectorAll('.nav a')[i].classList.add('active'); // .querySelector('a')
            }
        });
    }

});

var swiper = new Swiper(".myPortfolio", {
    spaceBetween: 30,
    //cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

var swiper = new Swiper(".myTestimonial", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});