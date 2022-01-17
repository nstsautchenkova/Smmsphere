// header scroll fix
$("document").ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass("fix");
            $('.wrapper').addClass("header-fix");

        } else {
            $('.header').removeClass("fix");
            $('.wrapper').removeClass("header-fix");
        }
    });
});

// Menu
$(document).on("ready", function () {
    $(".menu .trigger-menu").click(function () {
        $(this).toggleClass('op');
        $(".menu").toggleClass("menu-open");
        $('.menu .hamburger-menu__bar').toggleClass('animate');
        $('.wrapper').toggleClass('menu-open');
        $('body').toggleClass('menu-open');
    });
});

// Admin Menu
$(document).on("ready", function () {
    $(".admin-menu--open .trigger-menu").click(function () {
        $(this).toggleClass('op');
        $(".admin-menu--open").toggleClass("menu-open");
        $('.admin-menu--open .hamburger-menu__bar').toggleClass('animate');
        $('.wrapper').toggleClass('aMenu-open');
        $('body').toggleClass('aMenu-open');
        $('.admin-aside').toggleClass('open');

        let menuClose = $('<div class="menu-close"></div>');
        menuClose.appendTo($('.wrapper'));

        $(".menu-close").click(function () {
            $(".admin-menu--open").removeClass("menu-open");
            $('.admin-menu--open .hamburger-menu__bar').removeClass('animate');
            $('.wrapper').removeClass('aMenu-open');
            $('body').removeClass('aMenu-open');
            $('.admin-aside').removeClass('open');
            $('.menu-close').remove();
        });
    });


});

// anchor
$('.anchor').on('click', function () {
    var href = $(this).attr('href');
    $('.anchor').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 80
    }, {
        duration: 370,
        easing: "linear"
    });
    return false;
});

// select 
$(function () {
    var select = $('[name="selectTafiffs"]');
    select.change(function () {
        var value = select.val();
    });

    var platformSelect = $('[name="platformSelect"]');
    platformSelect.change(function () {
        var value = select.val();
    });

    var serviceType = $('[name="serviceType"]');
    serviceType.change(function () {
        var value = select.val();
    });

    $('.selectpicker').selectpicker({
        dropupAuto: false,
        size: '7'
    });
});

// counter
$(document).ready(function () {
    var counterMinus = $('.counter .minus');
    var counterPlus = $('.counter .plus');

    counterMinus.click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    counterPlus.click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// rate
$('.rate-area label').on('click', function () {
    var tit = $(this).attr('title');
    $('.rate-area .tit').text('-' + ' ' + tit);
});


// admin-dropdawn
$('.menu-dropdown__btn').on('click', function () {
    if ($(this).siblings('.menu-dropdown__body').is(":hidden")) {
        $(this).siblings('.menu-dropdown__body').show("slow");
        $(this).addClass('open');
    } else {
        $(this).siblings('.menu-dropdown__body').slideUp();
        $(this).removeClass('open');
    }
});

// account-replenished
$(document).on("ready", function () {
    $(".account-replenished--show").click(function () {
        $(".account-replenished").addClass('active');
    });
    $(".account-replenished").click(function () {
        $(".account-replenished").removeClass('active');
    });
});
// server-error
$(document).on("ready", function () {
    $(".server-error--show").click(function () {
        $(".server-error").addClass('active');
    });
    $(".server-error").click(function () {
        $(".server-error").removeClass('active');
    });
});

// #balance_sum
$(document).on("ready", function () {
    $(".balance-sum__value").click(function () {
        $(".balance-sum__value").removeClass('add');
        $(this).parents(".balance-sum").addClass('add');
        $(".add .balance-sum__value").removeClass('active');
        $(this).addClass('active');

        var balanceVal = $(this).val();
        $('.add .balance-sum__input').val(balanceVal + ' ₽');
    });
});


// upload file
const uploadInput = document.querySelector(".upload__input");
uploadInput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const { name: fileName, size } = file;
    const fileSize = (size / 1024).toFixed(2);
    const fileNameAndSize = `${fileName}, ${fileSize} K`;
    document.querySelector(".upload__info").textContent = fileNameAndSize;
});


// chat upload file
const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");
chooseFile.addEventListener("change", function () {
    getImgData();
});

function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
        });
    }
}

// chat
let input = document.querySelector("#message-user");

$("#chat-send").click(function () {
    let date = new Date();
    let time = date.getHours() + '.' + date.getMinutes();
    let message = input.value;

    
    let img = $("#img-preview img").attr('src');
    let messageImg = '';

    $('#img-preview img').each(function () {
        if (this.src.length > 0) {
            messageImg = '<img src="' + img + '" />';
        } else{
            messageImg = '';
        }
    });

    let chatItem = $('<div class="chat__item"><div class="message-user"><div class="message"><div class="text"><p>' + message + messageImg + '</p></div><div class="date"><span class="date">' + date.toLocaleDateString() + '</span><span class="time">' + time + '</span><span class="status"><img src="../img/ico/message-nok.svg" alt=""/><img src="../img/ico/message-ok.svg" alt=""/></span></div></div><div class="img"><img src="../img/ico/user-avatar.svg" alt=""/></div></div></div><div class="chat__item"><div class="message-operator"><div class="img"><img src="../img/ico/support-white.svg" alt=""/></div><div class="message"><div class="text"><p class="operator-writes"><span class="dots"></span></p></div><div class="date"><span class="date">' + date.toLocaleDateString() + '</span><span class="time">' + time + '</span></div></div></div></div>');

    chatItem.appendTo($('#chat__body'));

    input.value = '';
    var block = document.getElementById("chat__body");
    block.scrollTop = block.scrollHeight;

    $("#img-preview img").remove();
});


