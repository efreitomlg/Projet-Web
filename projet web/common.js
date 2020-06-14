    function scrollTitleManagement(){

        var logo = document.getElementById('logo');
        if(window.scrollY > 0){
            logo.style.opacity = 0.5;
        }
        else{
            logo.style.opacity = 1;
        }
    }

    function displayManagement(){
        playlistDisplay();
        
        playBtn = document.getElementById(0);
        stopBtn = document.getElementById("globalStop");
        stopBtn.click();
        setTimeout(playBtn.click(), 1000);
    }

    function playlistDisplay(){

        var playlistTable = document.getElementById("playlist");
        var audioFiles = document.getElementById("audio_files").children;

        for(var i = 0; i < audioFiles.length; i++){
            var row = document.createElement("tr");

            var songnb = document.createElement("td");
            var name = document.createElement("td");
            var playtd = document.createElement("td");
            
            songnb.textContent = i+1;
            name.textContent = audioFiles[i].id;

            var play = document.createElement("button"); 
            play.id = i;
            play.type = "button";
            play.addEventListener("click", playMusic);
            play.classList.add("toolBtn");
            play.classList.add("playBtn");
            playtd.appendChild(play);

            row.append(songnb);
            row.append(name);
            row.append(playtd);
            playlistTable.append(row);
        }
    }

    function playMusic(e){
        
        audioFileToPlay = parseInt(e.target.id);
        audioFiles = document.getElementById("audio_files").children;

        songname = document.getElementById("song_name");
        artist_name = document.getElementById("artist_name");

        stopMusic();

        audioFiles[audioFileToPlay].play();
        songInfos = audioFiles[audioFileToPlay].id.split("-");

        songname.textContent = "Titre : " + songInfos[1];
        artist_name.textContent = "Artiste : " + songInfos[0];
        
    }

    function stopMusic(){

        audioFiles = document.getElementById("audio_files").children;
        songname = document.getElementById("song_name");
        artist_name = document.getElementById("artist_name");

        for(var i = 0; i < audioFiles.length; i++){
            audioFiles[i].pause();
            audioFiles[i].currentTime = 0;
        }
        songname.textContent = "Titre : -";
        artist_name.textContent = "Artiste : -";
    }

    function manageMusic(){

        audioFiles = document.getElementById("audio_files").children;
        btn = document.getElementById("globalPlay");

        var audioPlaying = false;
        var tracknb = -1;

        for(var i = 0; i < btn.classList.length; i++){
            
            for(var i = 0; i < audioFiles.length; i++){ 
                if(audioFiles[i].currentTime > 0){ 
                    tracknb = i; 
                    if(!audioFiles[i].paused){ audioPlaying = true; }
                }
            }
        }

        if(tracknb > -1){
            if(audioPlaying){
                btn.classList.remove("pauseBtn");
                btn.classList.add("playBtn"); 
                audioFiles[tracknb].pause();               
            }
            else {
                audioFiles[tracknb].play();
                btn.classList.remove("playBtn");
                btn.classList.add("pauseBtn");
            }
        } 
}