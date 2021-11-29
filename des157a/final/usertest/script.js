(function() {
    'use strict';
    console.log('reading js');

    const skull= document.getElementById('pic');
    const flower= document.getElementById('pic2');
    const moth= document.getElementById('pic3');

    const close=document.getElementById('closeb');
    const close2=document.getElementById('closeb2');
    const close3=document.getElementById('closeb3');

    skull.addEventListener('click', function (change){
    document.body.style.transition = "all 3s";
    document.getElementById('pic').style.transition = "all 3s";
    document.getElementById('pic').style.margin = "50px 0px 50px 100px";
    document.getElementById('pic2').style.margin = "";
    document.getElementById('pic3').style.margin = "";
    document.getElementById('pic').style.backgroundImage= "url(images/image_skullstudio.png";
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerwhite2.png";
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothwhite2.png";
    document.getElementById("newpost").style.color = "white";
    document.getElementById("newpost").style.display= "block";
    document.getElementById("newpost2").style.display= "none";
    document.getElementById("newpost3").style.display = "none";
    document.getElementById('closeb').style.visibility = "initial";
    document.getElementById('colorscheme1').style.opacity = "1";
    document.getElementById('refskull').style.opacity = "1";
    document.body.style.backgroundColor = "rgb(229, 60, 240)";
    });

    flower.addEventListener('click', function (change){
    document.body.style.transition = "all 3s";
    document.getElementById('pic2').style.transition = "all 3s";
    document.getElementById('pic').style.margin = "";
    document.getElementById('pic2').style.margin = "50px 0px 50px 100px";
    document.getElementById('pic3').style.margin = "";
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerstudio.png";
    document.getElementById('pic').style.backgroundImage= "url(images/image_white2.png";
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothwhite2.png";
    document.getElementById("newpost").style.display= "none";
    document.getElementById("newpost2").style.display = "block";
    document.getElementById("newpost2").style.color = "white";
    document.getElementById("newpost3").style.display= "none";
    document.getElementById('closeb2').style.visibility = "initial";
    document.getElementById('colorscheme2').style.opacity = "1";
    document.getElementById('refflower').style.opacity = "1";
    document.body.style.backgroundColor = "rgb(68, 23, 166)";
    });

    moth.addEventListener('click', function (change){
    document.body.style.transition = "all 3s";
    document.getElementById('pic3').style.transition = "all 3s";
    document.getElementById('pic3').style.margin = "50px 0px 100px 100px";
    document.getElementById('pic').style.margin = "";
    document.getElementById('pic2').style.margin = "";
    document.getElementById('pic3').style.backgroundImage= "url(images/image_mothstudio.png";
    document.getElementById('pic').style.backgroundImage= "url(images/image_white2.png";
    document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerwhite2.png";
    document.getElementById("newpost3").style.color = "white";
    document.getElementById("newpost").style.display= "none";
    document.getElementById("newpost2").style.display= "none";
    document.getElementById("newpost3").style.display = "block";
    document.getElementById('closeb3').style.visibility = "initial";
    document.getElementById('colorscheme3').style.opacity = "1";
    document.getElementById('refmoth').style.opacity = "1";
    document.body.style.backgroundColor = "rgb(39, 13, 94)";
    });

        close.addEventListener('click', function (change) {
        document.body.style.transition = "all 3s";
        document.getElementById('pic').style.margin = "";
        document.getElementById('pic2').style.margin = "";
        document.getElementById('pic3').style.margin = "";
        document.getElementById('pic').style.backgroundImage= "url(images/image_blackandwhite.png";
        document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerblackandwhite.png";
        document.getElementById('pic3').style.backgroundImage= "url(images/image_mothblackandwhite.png";
        document.getElementById("newpost").style.display= "none";
        document.getElementById("newpost2").style.display= "none";
        document.getElementById("newpost3").style.display = "none";
        document.body.style.backgroundColor = "black";
      });
      close2.addEventListener('click', function (change) {
        document.body.style.transition = "all 3s";
        document.getElementById('pic').style.margin = "";
        document.getElementById('pic2').style.margin = "";
        document.getElementById('pic3').style.margin = "";
        document.getElementById('pic').style.backgroundImage= "url(images/image_blackandwhite.png";
        document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerblackandwhite.png";
        document.getElementById('pic3').style.backgroundImage= "url(images/image_mothblackandwhite.png";
        document.getElementById("newpost").style.display= "none";
        document.getElementById("newpost2").style.display= "none";
        document.getElementById("newpost3").style.display = "none";
        document.body.style.backgroundColor = "black";
      });
      close3.addEventListener('click', function (change) {
        document.body.style.transition = "all 3s";
        document.getElementById('pic').style.margin = "";
        document.getElementById('pic2').style.margin = "";
        document.getElementById('pic3').style.margin = "";
        document.getElementById('pic').style.backgroundImage= "url(images/image_blackandwhite.png";
        document.getElementById('pic2').style.backgroundImage= "url(images/image_flowerblackandwhite.png";
        document.getElementById('pic3').style.backgroundImage= "url(images/image_mothblackandwhite.png";
        document.getElementById("newpost").style.display= "none";
        document.getElementById("newpost2").style.display= "none";
        document.getElementById("newpost3").style.display = "none";
        document.body.style.backgroundColor = "black";
      });

      function question(){
        alert("Hello! ---Task #1: activate the image effect --- Task #2: open the image description --- Task #3: close the image description");
      }
      question();
})();




