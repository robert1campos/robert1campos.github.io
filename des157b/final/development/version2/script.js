(function() {

    'use strict';

    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'radial',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#669BC5', '#FFFEF3'],
                    ['#FFFEF3', '#669BC5'],
                ]
            },
            "visual-state": {
                gradients : [
                    ['#aa4b6b', '#3b8d99'],
                    ['#1565C0', '#b92b27'],
                    ['#240b36', '#c31432']
                ]
            }
    }
    });

    const startpage = document.getElementById('startpage');
    const home = document.getElementById('home');
    const overwhlemed = document.getElementById('overwhlemed');
    const stressed = document.getElementById('stressed');
    const restless = document.getElementById('restless');
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const choice3 = document.getElementById('choice3');
    const cont = document.getElementById('continue');
    const cont2 = document.getElementById('continue2');
    const cont3 = document.getElementById('continue3');
    const choicea = document.getElementById('choicea');
    const choiceb = document.getElementById('choiceb');
    const choicec = document.getElementById('choicec');
    const start1 = document.getElementById('start1');
    const start3 = document.getElementById('start3');
    const submit1 = document.getElementById('submit1');
    const continuehome = document.getElementById('continuehome');
    const continuechoose = document.getElementById('continuechoose');
    // const choose = document.getElementById('choose');

    continuehome.addEventListener('click', function (change){
        document.getElementById("home").style.display = "block";
        document.getElementById("startpage").style.position = "initial";
    });

    overwhlemed.addEventListener('click', function (change){
        document.getElementById("choice1").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    stressed.addEventListener('click', function (change){
        document.getElementById("choice2").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    restless.addEventListener('click', function (change){
        document.getElementById("choice3").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    cont.addEventListener('click', function(change){
        document.getElementById("choicea").style.display = "block";
        document.getElementById("choice1").style.position = "initial";
        // document.getElementById("choose").style.position = "initial";
    });

    cont2.addEventListener('click', function(change){
        document.getElementById("choiceb").style.display = "block";
        document.getElementById("choice2").style.position = "initial";
    });

    cont3.addEventListener('click', function(change){
        document.getElementById("choicec").style.display = "block";
        document.getElementById("choice3").style.position = "initial";
    });

    start1.addEventListener('click', function(change){
        document.getElementById("journal").style.display = "block";
        document.getElementById("choicea").style.position = "initial";
    });

    start3.addEventListener('click', function(change){
        document.getElementById("visuals").style.display = "block";
        granimInstance.changeState('visual-state');
        document.getElementById("choicec").style.position = "initial";
    });

    // continuechoose.addEventListener('click', function (change){
    //     document.getElementById("choose").style.display = "block";
    //     document.getElementById("choice1").style.position = "initial";
    // });

    submit1.addEventListener('click', function(change){
        document.getElementById("journal").style.position = "initial";
        document.getElementById("home").style.position = "absolute";
    });

 
})();

   