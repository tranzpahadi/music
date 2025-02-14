var video = document.getElementById('background-video');

        // Play video
        video.play();

        // Loop video
        video.addEventListener('ended', function() {
            video.currentTime = 0;
            video.play();
        });