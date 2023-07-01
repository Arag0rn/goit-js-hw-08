import Player from '@vimeo/player';
import _ from 'lodash'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onThrotle = _.throttle(onTimeUpdate, 1000);
player.on('timeupdate', onThrotle);


function onTimeUpdate({seconds}){
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);




