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
    const cont = document.getElementById('continue');
    const cont2 = document.getElementById('continue2');
    const cont3 = document.getElementById('continue3');
    const choicea = document.getElementById('choicea');
    const choiceb = document.getElementById('choiceb');
    const choicec = document.getElementById('choicec');
    const start1 = document.getElementById('start1');
    const start3 = document.getElementById('start3');
    const submit1 = document.getElementById('submit1');
    const submit2 = document.getElementById('submit2');
    const close = document.getElementById('close');
    const continuehome = document.getElementById('continuehome');
    const cont4 = document.getElementById('conthome');

    // leads to page with options
    continuehome.addEventListener('click', function (change){
        document.getElementById("home").style.display = "block";
        document.getElementById("startpage").style.position = "initial";
    });
    
    overwhlemed.addEventListener('click', function (change){
        document.getElementById("choicea").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    stressed.addEventListener('click', function (change){
        document.getElementById("choiceb").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    restless.addEventListener('click', function (change){
        document.getElementById("choicec").style.display = "block";
        document.getElementById("home").style.position = "initial";
    });

    start1.addEventListener('click', function(change){
        document.getElementById("journal").style.display = "block";
        document.getElementById("choicea").style.position = "initial";
        // document.getElementById("home").style.position = "initial";

    });

    start2.addEventListener('click', function(change){
        document.getElementById("breathing").style.display = "block";
        document.getElementById("choiceb").style.position = "initial";
    });

    start3.addEventListener('click', function(change){
        document.getElementById("visuals").style.display = "block";
        granimInstance.changeState('visual-state');
        document.getElementById("choicec").style.position = "initial";
    });
    
    submit1.addEventListener('click', function(event){
        document.getElementById("journal").style.position = "initial";
        // document.getElementById("home").style.position = "absolute";

        event.preventDefault();
        const madlib = document.querySelector('#madLib');
        const noun1 = document.querySelector('#input').value;
        const noun2 = document.querySelector('#input2').value;

        const myText = `Your Input. ${noun1}. ${noun2}.`;
       
        madlib.innerHTML = myText;

        document.getElementById("overlay").style.display = "block";
        granimInstance.changeState('visual-state');
        
    });

    submit2.addEventListener('click', function(change){
        document.getElementById("breathing").style.position = "initial";
        document.getElementById("home").style.position = "absolute";
    });

    cont4.addEventListener('click', function(change){
        document.getElementById("visuals").style.position = "initial";
        document.getElementById("home").style.position = "absolute";
        granimInstance.changeState('default-state');
    });

    close.addEventListener('click', function(change){
        document.getElementById("journal").style.position = "initial";
        document.getElementById("overlay").style.position = "initial";
        document.getElementById("home").style.position = "absolute";
        granimInstance.changeState('default-state');

    });

    function question(){
        alert("Hello! ---Task #1: continue to the home page of the interface --- Task #2: select the journal option --- Task #3: complete the entry --- Task #4:return to the home page, and choose another option");
      }
      question();
 
})();

   