(function() {
    'use strict';
    console.log('reading js');

    const skull= document.getElementById('pic');
    const flower= document.getElementById('pic2');
    const moth= document.getElementById('pic3');

    skull.addEventListener('click', function (change){
    document.getElementById('pic').style.backgroundImage= "url(images/image_skullstudio.png";
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerwhite2.png";
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothwhite2.png";
    document.getElementById("newpost").style.color = "white";
    document.getElementById("newpost2").style.color = "rgb(229, 60, 240)";
    document.getElementById("newpost3").style.color = "rgb(229, 60, 240)";
    });



    flower.addEventListener('click', function (change){
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerstudio.png";
    document.getElementById('pic').style.backgroundImage= "url(images/image_white2.png";
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothwhite2.png";
    document.getElementById("newpost").style.color = "rgb(68, 23, 166)";
    document.getElementById("newpost2").style.color = "white";
    document.getElementById("newpost3").style.color = "rgb(68, 23, 166)";
    });

    moth.addEventListener('click', function (change){
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothstudio.png";
    document.getElementById('pic').style.backgroundImage= "url(images/image_white2.png";
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerwhite2.png";
    document.getElementById("newpost").style.color = "rgb(39, 13, 94)";
    document.getElementById("newpost2").style.color = "rgb(39, 13, 94)";
    document.getElementById("newpost3").style.color = "white";
    });

    var pageTop;
    var bodyTag = document.querySelector('body');

    window.addEventListener('click', function(){
    pageTop = window.pageYOffset;
    switch(true){
        case pageTop < 600: bodyTag.className="pink";
        break;
        case pageTop < 1200: bodyTag.className="blue";
        break;
        default: bodyTag.className="purple";
        }
    });
})();




