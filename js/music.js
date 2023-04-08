const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "姑娘在远方",
            artist: "柯柯柯啊",
            url: "http://m701.music.126.net/20230408114139/fcd28c182f840313274c314a635aded5/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/24885111237/d12c/362e/4ad7/74fde05bde3aecd3687c90db3658e10c.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "data:application/octet-stream;base64,WzAwOjAwLjAwMF0g5L2c6K+NIDog5bC557qmClswMDowMS4wMDBdIOS9nOabsiA6IOmSsembtwpbMDA6NDcuNjNd5rW35rWq5peg5aOw5bCG5aSc5bmV5rex5rex5re55rKhClswMDo1NC41OF3mvKvov4flpKnnqbrlsL3lpLTnmoTop5LokL0KWzAxOjAxLjQ1XeWkp+mxvOWcqOaipuWig+eahOe8nemamemHjOa4uOi/hwpbMDE6MDguMThd5Yed5pyb5L2g5rKJ552h55qE6L2u5buTClswMToxNC42Ml3nnIvmtbflpKnkuIDoibIg5ZCs6aOO6LW36Zuo6JC9ClswMToyMS4xNl3miaflrZDmiYvlkLnmlaPoi43ojKvojKvng5/ms6IKWzAxOjI4LjQyXeWkp+mxvOeahOe/heiGgCDlt7Lnu4/lpKrovr3pmJQKWzAxOjM1LjYxXeaIkeadvuW8gOaXtumXtOeahOe7s+e0ogpbMDE6NDEuOTNd5oCV5L2g6aOe6L+c5Y67IOaAleS9oOemu+aIkeiAjOWOuwpbMDE6NDguNjdd5pu05oCV5L2g5rC46L+c5YGc55WZ5Zyo6L+Z6YeMClswMTo1NS42Nl3mr4/kuIDmu7Tms6rmsLQg6YO95ZCR5L2g5rWB5reM5Y67ClswMjowMi44N13lgJLmtYHov5vlpKnnqbrnmoTmtbflupUKWzAyOjIzLjIxXea1t+a1quaXoOWjsOWwhuWknOW5lea3sea3sea3ueayoQpbMDI6MzAuNTVd5ryr6L+H5aSp56m65bC95aS055qE6KeS6JC9ClswMjozNy41Ml3lpKfpsbzlnKjmoqblooPnmoTnvJ3pmpnph4zmuLjov4cKWzAyOjQ0LjIwXeWHneacm+S9oOayieedoeeahOi9ruW7kwpbMDI6NTAuNTBd55yL5rW35aSp5LiA6ImyIOWQrOmjjui1t+mbqOiQvQpbMDI6NTcuMzNd5omn5a2Q5omL5ZC55pWj6IuN6Iyr6Iyr54Of5rOiClswMzowNC4xOF3lpKfpsbznmoTnv4XohoAg5bey57uP5aSq6L696ZiUClswMzoxMS40NV3miJHmnb7lvIDml7bpl7TnmoTnu7PntKIKWzAzOjE3Ljg1Xeeci+S9oOmjnui/nOWOuyDnnIvkvaDnprvmiJHogIzljrsKWzAzOjI0Ljc3XeWOn+adpeS9oOeUn+adpeWwseWxnuS6juWkqemZhQpbMDM6MzEuNTVd5q+P5LiA5ru05rOq5rC0IOmDveWQkeS9oOa1gea3jOWOuwpbMDM6MzkuMzBd5YCS5rWB5Zue5pyA5Yid55qE55u46YGHCg==",
            theme: "#171513"
        },
            {
            name: "我爱他",
            artist: "周星星",
            url: "http://m801.music.126.net/20230408120317/4e7d6d40494394e83302702c521d4b73/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14890481683/9967/0944/a48f/bfd8ca10fb571a53ca8102dd06df59f1.mp3",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc",
            theme: "#171513"
        },
       ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});
