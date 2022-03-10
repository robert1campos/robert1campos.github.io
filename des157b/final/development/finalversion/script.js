(function() {

    'use strict';

    Parse.initialize("rKHRnJEQ4IpFJ9k4jCkZfxA40VIZZ01QxaoQGyGI","SeyJmfbUJry5nXrSGbJfwWScqAkFMIPJkb5dfxxP"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';

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
            "orange-state": {
                gradients: [
                    ['#DAD299', '#B0DAB9'],
                    ['#B0DAB9', '#DAD299'],
                ]
            },
            "visual-state": {
                gradients : [
                    ['#669BC5', '#FFFEF3'],
                    ['#19547b', '#ffd89b'],
                    ['#ffd89b', '#19547b'],
                    ['#FFFEF3', '#669BC5']
                ]
            }
    }
    });

    const startpage = document.getElementById('startpage');
    const home = document.getElementById('home');
    const overwhlemed = document.getElementById('overwhlemed');
    const breathe = document.getElementById('breathe');
    const restless = document.getElementById('restless');
    const cont = document.getElementById('continue');
    const cont2 = document.getElementById('continue2');
    const cont3 = document.getElementById('continue3');
    const choicea = document.getElementById('choicea');
    const choiceb = document.getElementById('choiceb');
    const choicec = document.getElementById('choicec');
    const back1 = document.getElementById('back1');
    const back2 = document.getElementById('back2');
    const back3 = document.getElementById('back3');
    const start1 = document.getElementById('start1');
    const start3 = document.getElementById('start3');
    const submit1 = document.getElementById('submit1');
    const submit2 = document.getElementById('submit2');
    const close = document.getElementById('close');
    const continuehome = document.getElementById('continuehome');
    const cont4 = document.getElementById('conthome');
    const friendlist = document.querySelector(".container");
    const inputs = document.querySelectorAll("#journal input:not([type=submit]");

    continuehome.addEventListener('click', function (change){
        document.getElementById("home").style.display = "block";
        document.getElementById("startpage").style.display = "none";
    });
    
    overwhlemed.addEventListener('click', function (change){
        document.getElementById("choicea").style.display = "block";
        document.getElementById("home").style.display = "none";

    });

    breathe.addEventListener('click', function (change){
        document.getElementById("choiceb").style.display = "block";
        document.getElementById("home").style.display = "none";

    });

    restless.addEventListener('click', function (change){
        document.getElementById("choicec").style.display = "block";
        document.getElementById("home").style.display = "none";
    });

    start1.addEventListener('click', function(change){
        document.getElementById("journal").style.display = "block";
        document.getElementById("choicea").style.display = "none";
    });

    start2.addEventListener('click', function(change){
        document.getElementById("breathing").style.display = "block";
        document.getElementById("choiceb").style.display = "none";
        granimInstance.changeState('orange-state');
    });

    start3.addEventListener('click', function(change){
        document.getElementById("visuals").style.display = "block";
        granimInstance.changeState('visual-state');
        document.getElementById("choicec").style.display = "none";
    });

    back1.addEventListener('click', function(change){
        document.getElementById("home").style.display = "block";
        document.getElementById("choicea").style.display = "none";
    });

    back2.addEventListener('click', function(change){
        document.getElementById("home").style.display = "block";
        document.getElementById("choiceb").style.display = "none";
    });

    back3.addEventListener('click', function(change){
        document.getElementById("home").style.display = "block";
        document.getElementById("choicec").style.display = "none";
    });

    async function displayFriends() {
        const Entries = Parse.Object.extend('Entries');
        const query = new Parse.Query(Entries);

        try {
            const results = await query.find();
                for (const object of results) {
                const id = object.id;
                const name = object.get('name');
                const firstanswer = object.get('firstanswer');
                const secondanswer = object.get('secondanswer');
    
                const theListItem = document.createElement("div");
                theListItem.setAttribute("id", `r-${id}`);
                theListItem.innerHTML = `
                <div>
                <h2 class="name">${name}</h2>
                <p class="firstanswer">${firstanswer}</p>
                <p class="secondanswer">${secondanswer}</p> 
                </div>`;
    
                friendlist.append(theListItem);
            };
          } catch (error) {
            console.error('Error while fetching Entries', error);
          }
              
    };

    displayFriends();

    async function addFriend() {
        const myNewObject = new Parse.Object('Entries');
        myNewObject.set('name', inputs[0].value);
        myNewObject.set('firstanswer', inputs[1].value);
        myNewObject.set('secondanswer', inputs[2].value);
        try {
          const result = await myNewObject.save();
          console.log('Entries created', result);
        } catch (error) {
          console.error('Error while creating Entries: ', error);
        }
      };

    submit1.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("journal").style.display = "none";
        document.getElementById("visuals").style.display = "block";
        granimInstance.changeState('visual-state');
        addFriend();
    });

    submit2.addEventListener('click', function(change){
        document.getElementById("breathing").style.display = "none";
        document.getElementById("home").style.display = "block";
        granimInstance.changeState('default-state');
    });

    cont4.addEventListener('click', function(change){
        document.getElementById("visuals").style.display = "none";
        document.getElementById("home").style.display = "block";
        granimInstance.changeState('default-state');
    });

    AOS.init();
 
})();

   