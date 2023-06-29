import Player from '@vimeo/player';
import _ from 'lodash'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', 
_.throttle(function() {
  player.getCurrentTime()
      .then(seconds => {
          localStorage.setItem('play', seconds);
      });
}, 1000),
);