$(document).ready(function() {
    $('.searchCategories').change(function(){
        $(".width_tmp_option").html($('.searchCategories option:selected').text());
        $(this).width($(".width_tmp_select").width());
    });
});

window.onload = () => {
    initialiseSwiper();
    dropdownToCollapseAndViceversa();
};

window.onresize = () => {
    dropdownToCollapseAndViceversa();
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        setHeaderPositionFixed();
    } else if (window.scrollY === 0) {
        removePosiionFixedFromHeader();
    }
}

function initialiseSwiper() {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            680: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            991: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            1200: {
                slidesPerView: 6,
                slidesPerGroup: 6,
            },

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById('sidenav-close-div').classList.remove('d-none');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('sidenav-close-div').classList.add('d-none');
}

function dropdownToCollapseAndViceversa() {
    let dropdownMenuButton = document.getElementById('dropdownMenuButton');
    let dropdownMenu = document.getElementById('dropdownMenu');
    let dropdownMenuItems = document.querySelectorAll('#dropdownMenu a');
    if (window.innerWidth < 992 && window.outerWidth < 992) {
        dropdownMenuButton.removeAttribute('aria-haspopup');
        dropdownMenuButton.setAttribute('data-toggle', 'collapse');
        dropdownMenuButton.setAttribute('data-target', '#dropdownMenu');
        dropdownMenuButton.setAttribute('aria-controls', 'dropdownMenu');
        dropdownMenuButton.setAttribute('aria-expanded', 'false');

        dropdownMenu.classList.remove('dropdown-menu');
        dropdownMenu.classList.add('collapse');

        for (let i = 0; i < dropdownMenuItems.length; i++) {
            dropdownMenuItems[i].className  = 'font-size-1 px-0 py-2 font-pt';
        }

    } else {
        dropdownMenuButton.setAttribute('aria-haspopup', 'true');
        dropdownMenuButton.setAttribute('data-toggle', 'dropdown');
        dropdownMenuButton.removeAttribute('data-target');
        dropdownMenuButton.removeAttribute('aria-controls');
        dropdownMenuButton.setAttribute('aria-expanded', 'false');


        dropdownMenu.classList.remove('collapse');
        dropdownMenu.classList.add('dropdown-menu');

        for (let i = 0; i < dropdownMenuItems.length; i++) {
            dropdownMenuItems[i].className  = 'dropdown-item font-yellow font-size-1 px-0 py-2 font-pt';
        }
    }
}

function setHeaderPositionFixed() {
    let header = document.getElementById('header');
    header.classList.add('stuck');
    let navMid = document.getElementsByClassName('nav-mid');
    navMid[0].style.padding = '.25rem 0';
}

function removePosiionFixedFromHeader() {
    let header = document.getElementById('header');
    header.classList.remove('stuck');
    let navMid = document.getElementsByClassName('nav-mid');
    navMid[0].style.padding = '1rem 0';
}
