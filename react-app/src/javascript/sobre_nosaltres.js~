// Video

vid = document.getElementById('video');
isPlaying = false;

// Play / Pause

btnPlay = document.getElementById('playPause');

function playPause() {
    isPlaying = !isPlaying;
    btnPlay.textContent = isPlaying ? 'pause' : 'play_arrow';
    const command = isPlaying ? 'playVideo' : 'pauseVideo';
    vid.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
}

// Video length

vidLength = document.getElementById('vidLength');
vidTime = document.getElementById('vidTime');

function setTime() {
    vid.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'getDuration', args: [] }), '*');
    vid.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'getCurrentTime', args: [] }), '*');
}

// Listen for messages from the iframe

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    setInterval(() => {
        currentTime = player.getCurrentTime();
        duration = player.getDuration();
        vidLength.value = currentTime;
        vidLength.max = duration;
        vidTime.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    }, 0);

    vidLength.addEventListener('input', () => {
        newTime = parseFloat(vidLength.value);
        player.seekTo(newTime, true);
    });
}

function onPlayerStateChange(event) {
    // Handle state changes if needed
}

// Load the IFrame Player API code asynchronously
tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Format time in seconds to mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Volume

volume = document.getElementById('inpVolume');
btnVolume = document.getElementById('btnVolume');

function showVolume() {
    volume.classList.toggle('hidden');
}

volume.addEventListener('input', () => {
    vid.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [volume.value] }), '*');

    if (volume.value >= 50) {
        btnVolume.textContent = 'volume_up';
    } else if (volume.value > 0 && volume.value < 50) {
        btnVolume.textContent = 'volume_down';
    } else if (volume.value == 0) {
        btnVolume.textContent = 'volume_off';
    }
});