import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";
player.on('timeupdate', throttle(function ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds)
}, 1000));
setCurrentTime();
function setCurrentTime() {
    if (!localStorage.getItem(CURRENT_TIME)) {
        return
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME))
}