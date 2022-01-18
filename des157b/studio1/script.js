(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const intervalID = setInterval(checkTime, 1000);
    const loading = document.querySelector('.loading');
    const lyricA = document.querySelector('#lyric1');
    const lyricB = document.querySelector('#lyric2');
    const lyricC = document.querySelector('#lyric3');
    const lyricD = document.querySelector('#lyric4');
    const lyricE = document.querySelector('#lyric5');
    const lyricF = document.querySelector('#lyric6');
    const lyricG = document.querySelector('#lyric7');
    const lyricH = document.querySelector('#lyric8');
    const lyricI = document.querySelector('#lyric9');
    const lyricJ = document.querySelector('#lyric10');
    const lyricK = document.querySelector('#lyric11');
    const volum = document.querySelector('.volume');

    const lyrics = {
        start : [0, 2, 4, 6, 9, 11, 13, 15, 19, 25, 27],
        stop : [1, 3, 5, 8, 10, 12, 14, 18, 24, 26, 29],
        line : [lyricA, lyricB, lyricC, lyricD, lyricE, lyricF, lyricG, lyricH, lyricI, lyricJ, lyricK]
    }

    myVideo.addEventListener('playing', function(){
        loading.style.display = 'none';
    })

    function checkTime() {
        console.log(parseInt(myVideo.currentTime));
        for (let i = 0; i < lyrics.start.length; i ++){
            if(lyrics.start[i] < myVideo.currentTime && myVideo.currentTime < lyrics.stop[i]){
            lyrics.line[i].className = "showing";
        } else {
            lyrics.line[i].className = "hidden";
        }
        }
    }
    
    volum.addEventListener('click', function(){
        if(volum.className === 'volume-up'){
            volum.className = 'volume-mute'; 
            myVideo.muted = true;
        } else {
            volum.className = 'volume-up';
            myVideo.muted = false;
        }
    })
})()