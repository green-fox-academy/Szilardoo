'use strict';

var media = document.querySelector('audio');

var playButton = document.querySelector('.play-pause');

playButton.addEventListener('click', ()=>{
  if(media.paused)
  {
    media.play();
  }
  else
  {
    media.pause();
  }

}, false);