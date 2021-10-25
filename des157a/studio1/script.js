(function() {
    'use strict';
    console.log('reading js')

    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madLib');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;
        const noun4 = document.querySelector('#noun4').value;

        const myText = `This Year, I’m Going to dress up as a ${noun1}. My coustume is going to be so ${adj1}! It will be made with ${noun2} and ${noun3}, so its sure to win the ${noun4} contest! `;

        madlib.innerHTML = myText;
    })
})();

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


