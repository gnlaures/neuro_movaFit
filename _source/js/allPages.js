// init base functions
$(window).on('load', function () {
    classOnBody($('main').attr('id'));
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function () {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAttr("data-aos");
}

// l
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__contentHero'),
        mask: $('.l-nav__maskMenu'),
        maskAll: $('.l-nav__maskMenu.maskAll'),
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = propsNav.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            propsNav.nav.removeClass('is-desktop');
            propsNav.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            propsNav.nav.removeClass('is-responsive');
            propsNav.nav.addClass('is-desktop');
        }
        return resultCheck;
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }
    function closeResponsiveMenu() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentHero.removeClass(propsNav.active);
    }
    function hideMaskMenu() {
        propsNav.mask.removeClass(propsNav.active);
    }
    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open / close
    propsNav.hamburguer.on('click', function() {
        if ($(this).hasClass(propsNav.active)) {
            // close menu
            enableOverflow();
            $(this).removeClass(propsNav.active);
            propsNav.maskAll.removeClass(propsNav.active);
            propsNav.contentHero.removeClass(propsNav.active);
        } else {
            // open menu
            disableOverflow();
            $(this).addClass(propsNav.active);
            propsNav.maskAll.addClass(propsNav.active);
            propsNav.contentHero.addClass(propsNav.active);
        }
    });
    // - close
    propsNav.maskAll.on('click', function(){
        closeResponsiveMenu();
        hideMaskMenu();
        closeAllSubMenus();
        enableOverflow();
    });


    // RESPONSIVE MODE
    $(window).on('resize', function() {
        if (checkResponsiveMode() === "is-desktop") {
            if (propsNav.contentHero.hasClass(propsNav.active)) {
                closeAllSubMenus();
                closeResponsiveMenu();
                hideMaskMenu();
            }
        }
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
            hideMaskMenu();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });

    // MENU SCROLL
    $('.l-nav__menu a').on('click', function(e) {
        e.preventDefault();
        var finalDestiny = $(this).attr('href');
        switch (finalDestiny) {
            case '#atributos':
                goToSection__scroll(finalDestiny, 520, 450, 700, 10);
                break;
            case '#beneficios':
                goToSection__scroll(finalDestiny, -300, -300, 700, 10);
                break;
            case '#contato':
                goToSection__scroll(finalDestiny, 50, 50, 700, 10);
                break;
        }
    });
}

// s
if ($('.s-fixedBuy').length) {
    $(window).on('scroll', function () {stickyPosition('.s-fixedBuy', 10, get__navHeight() + 10);});
    $(window).on('load', function () {stickyPosition('.s-fixedBuy', 10, get__navHeight() + 10);});

    $('.s-fixedBuy .c-btnWithIcon').on('click', function() {
       var userName = $('.s-fixedBuy input#formBuyInit_nome').val();
       var userEmail = $('.s-fixedBuy input#formBuyInit_email').val();
       if (userName !== '') {
           $('#formSale_nome').val(userName);
       }
        if (userEmail !== '') {
            $('#formSale_email').val(userEmail);
        }
    });
}

// m
if ($('.m-modalBuy').length) {
    function openModal(modalEl) {
        $(modalEl).addClass('is-active');
        $('body').addClass('u-overflowBlocked');
        $('.m-modalBuyMask').addClass('is-active');
        $('.m-modalBuyClose').addClass('is-active');
    }
    function closeModal() {
        window.location.hash = '#_';
        $('.m-modalBuy').removeClass('is-active');
        $('.m-modalBuyMask').removeClass('is-active');
        $('.m-modalBuyClose').removeClass('is-active');
        $('body').removeClass('u-overflowBlocked');
    }

    $('.js-openModalBuy').on('click', function(e) {
        e.preventDefault();
        var attr = $(this).attr('href');
        window.location.hash = attr;
        openModal(attr);
    });

    $(window).on('load', function() {
        var attr = window.location.hash;
        if ((attr !== '') && (attr !== 'undefined') && (attr !== '#_')) {
            openModal(attr);
        }
    });

    $('.m-modalBuyMask, .m-modalBuyClose').on('click', function() {
        closeModal();
    });
}