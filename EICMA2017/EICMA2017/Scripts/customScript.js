
$(document).ready(function () {

    //Hidden Advs
    $('#advSmall').click(function () {
        $('#advSmall').removeClass('visible-xs');
        $('#advSmall').removeClass('visible-sm');
        $('#advSmall').css('display', 'none');
    });

    $('#advLarge').click(function () {
        $('#advLarge').removeClass('hidden-xs');
        $('#advLarge').removeClass('hidden-sm');
        $('#advLarge').css('display', 'none');
        $('.paragraf').css('width', '100%');
        $('#back').toggleClass('col-sm-6', 'col-sm-12');
        $('#backAdv').toggleClass('col-sm-6', 'col-sm-12');
        $('#spanInfoAdv').css('margin-top', "25%");
    });

    /*Links*/
    /******/
    $('#noticias').click(function () {
        window.location.href = '/Home/News/';
    });
    $('#historia').click(function () {
        window.location.href = '/Home/InformacionSalon/';
    });
    $('#information').click(function () {
        window.location.href = '/Home/About/';
    });


    $('#noticiasXs').click(function () {
        window.location.href = '/Home/News/';
    });
    $('#historiaXs').click(function () {
        window.location.href = '/Home/InformacionSalon/';
    });
    $('#informationXs').click(function () {
        window.location.href = '/Home/About/';
    });


    var firstScroll = false;
    var secondScroll = false;

    $(window).scroll(function () {
        if ($(document).scrollTop() + $(window).height() == $(document).height()) {
            if (firstScroll == false) {
                loadJson();
                firstScroll = true;
            } else if (firstScroll == true && secondScroll == false) {
                loadJson2();
                secondScroll = true;
            }
        }
    });
});

/*Scripts for load news*/
/**********************/
function loadJson() {
    $.getJSON("../../JSON/news1.json", function (json) {
        $.each(json, function (index) {
            $(".noticeContainer").append("<article class='notice'><img class='noticeImg img-responsive' src="
                + json[index].image + " alt='Imagen de noticia' width='300' height='250'><header><a href='#'><h3>"
                + json[index].title + "</h3></a></header><hr><section class='description'><p class='newBodyShort'>"
                + json[index].body + "<a href='#'><span> Descubrelo</span></a></p></section><footer class='date'><span>Publicado: "
                + json[index].data + "</span><span class='autor'> Autor: <a href='#'>"
                + json[index].author + "</a></span></footer></article><hr>");
        });
    });
}

function loadJson2() {
    $.getJSON("../../JSON/news2.json", function (json) {
        $.each(json, function (index) {
            $(".noticeContainer").append("<article class='notice'><img class='noticeImg img-responsive' src="
                + json[index].image + " alt='Imagen de noticia' width='300' height='250'><header><a href='#'><h3>"
                + json[index].title + "</h3></a></header><hr><section class='description'><p class='newBodyShort'>"
                + json[index].body + "<a href='#'><span> Descubrelo</span></a></p></section><footer class='date'><span>Publicado: "
                + json[index].data + "</span><span class='autor'> Autor: <a href='#'>"
                + json[index].author + "</a></span></footer></article><hr>");
        });
    });
}