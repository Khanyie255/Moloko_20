const accessButton = document.getElementById("accessButton");
console.log("ACCESS BUTTON:", accessButton);
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const loadingMessage = document.getElementById("loadingMessage");
const loadingComplete = document.getElementById("loadingComplete");


// ===============================
// SCREEN 1 → SCREEN 2
// ===============================

accessButton.addEventListener("click", () => {

    accessButton.disabled = true;
    accessButton.textContent = "VERIFYING IDENTITY...";

    setTimeout(() => {

        accessButton.textContent = "IDENTITY VERIFIED.";

        setTimeout(() => {

            screen1.classList.remove("active");
            screen2.classList.add("active");

            startLoadingSequence();

        }, 900);

    }, 1500);

});


// ===============================
// LOADING SEQUENCE
// ===============================

function startLoadingSequence() {

    const messages = [
        {
            percent: 10,
            text: "Locating subject... → MOLOKO FOUND ✓"
        },
        {
            percent: 25,
            text: "Loading birthday memories... → COMPLETE ✓"
        },
        {
            percent: 40,
            text: "Loading 3 years of evidence... → COMPLETE ✓"
        },
        {
            percent: 57,
            text: "Loading arguments about who's the better driver... → WARNING: TOO MUCH DATA"
        },
        {
            percent: 70,
            text: "Analysing music taste... → RESULT: BOTH REFUSE TO ADMIT THEY LIKE THE SAME MUSIC"
        },
        {
            percent: 80,
            text: "Loading dance footage... → PROCEED WITH CAUTION"
        },
        {
            percent: 90,
            text: "Loading embarrassing moments... → ERROR: TOO MANY TO COUNT"
        },
        {
            percent: 97,
            text: "Preparing birthday message... → WARNING: EMOTIONAL DAMAGE POSSIBLE."
        }
    ];

    let messageIndex = 0;
    let progress = 0;


    function showNextMessage() {

        if (messageIndex >= messages.length) {
            finishLoading();
            return;
        }

        const current = messages[messageIndex];

        loadingMessage.textContent = current.text;

        const startProgress = progress;
        const targetProgress = current.percent;

        const duration = 2200;
        const startTime = Date.now();


        function animateProgress() {

            const elapsed = Date.now() - startTime;

            const percentage = Math.min(
                elapsed / duration,
                1
            );

            progress = Math.round(
                startProgress +
                (targetProgress - startProgress) *
                percentage
            );

            progressFill.style.width = progress + "%";
            progressPercent.textContent = progress;


            if (percentage < 1) {

                requestAnimationFrame(animateProgress);

            } else {

                messageIndex++;

                setTimeout(() => {
                    showNextMessage();
                }, 700);

            }
        }


        animateProgress();
    }


    function finishLoading() {

        progress = 100;

        progressFill.style.width = "100%";
        progressPercent.textContent = "100";

        loadingMessage.textContent = "";

        setTimeout(() => {

            document.querySelector(".loading-container").style.display = "none";

            loadingComplete.classList.add("visible");

        }, 1000);

        setTimeout(() => {

    document.querySelector(".loading-container").style.display = "none";

    loadingComplete.classList.add("visible");

}, 1000);


setTimeout(() => {

    screen2.classList.remove("active");

    document.getElementById("screen3").classList.add("active");

}, 5000);
    }


    showNextMessage();

}

// SCREEN 3 → SCREEN 4

const letsGoButton = document.getElementById("letsGoButton");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

letsGoButton.addEventListener("click", () => {

    screen3.classList.remove("active");

    screen4.classList.add("active");

    window.scrollTo(0, 0);

});

// SCREEN 4 → SCREEN 5

const continueArchive = document.getElementById("continueArchive");
const screen5 = document.getElementById("screen5");

continueArchive.addEventListener("click", () => {

    screen4.classList.remove("active");

    screen5.classList.add("active");

    window.scrollTo(0, 0);

});

// DRIVE-OFF CHALLENGE

const acceptChallenge = document.getElementById("acceptChallenge");
const challengeAccepted = document.getElementById("challengeAccepted");

acceptChallenge.addEventListener("click", () => {

    acceptChallenge.style.display = "none";

    challengeAccepted.classList.add("visible");

    setTimeout(() => {

        screen5.classList.remove("active");

        screen6.classList.add("active");

        window.scrollTo(0, 0);

    }, 2200);

});

// =========================================
// SCREEN 6 — THE SOUNDTRACK
// =========================================

const screen6 = document.getElementById("screen6");

const tracks = document.querySelectorAll(".track");

const currentSong = document.getElementById("currentSong");
const currentArtist = document.getElementById("currentArtist");

const noteNumber = document.getElementById("noteNumber");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");

const previousTrack = document.getElementById("previousTrack");
const nextTrack = document.getElementById("nextTrack");
const playTrack = document.getElementById("playTrack");

const continueSoundtrack =
    document.getElementById("continueSoundtrack");

const audioCurrentTime =
    document.getElementById("audioCurrentTime");

const audioDuration =
    document.getElementById("audioDuration");

const audioProgressFill =
    document.getElementById("audioProgressFill");


// =========================================
// AUDIO PLAYER
// =========================================

const audio = new Audio();

audio.preload = "metadata";


// IMPORTANT:
// These filenames must match your music folder.

const audioFiles = [
    "music/music 1.mpeg",
    "music/music 2.mpeg",
    "music/music 3.mpeg",
    "music/music 4.mpeg",
    "music/music 5.mpeg",
    "music/music 6.mpeg"
];


// =========================================
// MEMORY NOTES
// =========================================

const memoryNotes = [

    {
        title: "ETERNAL FLAME",
        text:
        "This one feels like us. No matter how hard I try to stay away, somehow we always find our way back to each other. It doesn't matter how much time passes or how many times we've had to step away — your presence has always meant too much to me to simply disappear. I'm grateful for every time life somehow brought us back to one another. Maybe that's just our thing: we leave, we grow, we change, and somehow... we find our way back."
    },

    {
        title: "BURNING BLUE",
        text:
        "You've always been a little bit of both. You can be the coldest person in the room, but somehow you're also the person who knows how to bring warmth back into my life. We've had our cold seasons, our fires, our highs and our lows — but somehow, you're still my burning blue. I don't need everything to have been perfect. I just know that through every version of us, you've still been you. And somehow, that has always mattered to me."
    },

    {
        title: "NGIYAZ'FELA NGAWE",
        text:
        "Regardless of everything, I still love you. Somewhere along the way, you became more than just someone I loved. You became my friend when I needed a friend, my person to laugh with, cry with, argue with, and come back to. We've had rumours, misunderstandings, distance, and moments where everything felt impossible. But somehow we still come back. Life isn't easy, and neither are we. But I've always wanted you to know that you're worth so much — and if nobody reminds you of that, I'll always want you to remember that someone saw it in you."
    },

    {
    title: "RAINDANCE",
    text:
    "This one takes me straight back to the car rides. Driving at night. Red lights reflecting across our faces. Random conversations. Eye contact. Me sitting there as your passenger princess while simultaneously getting irritated because you were driving too fast. 😭 Not because I wanted you to slow down for me — but because I actually intended on seeing you alive. There was something about being beside you, watching the road disappear in front of us, with the wind coming through the windows, that made those rides feel so special to me. Sometimes it wasn't even about where we were going. I just liked being there with you. And somehow, it was just a car ride."
    },

    {
        title: "RATO LAKA",
        text:
        "Sometimes I genuinely cannot help myself from falling for you. No matter what anyone says. No matter what my family thinks. No matter how complicated everything becomes. I'm just grateful that I got to experience what it feels like to deeply love someone. Whatever life does with us from here, I'll always be grateful for the memories, the laughs, the tears, the arguments, the random moments, and everything in between. You gave me memories I'll always carry."
    },

    {
        title: "EVERYTHING IS ROMANTIC",
        text:
        "And then there's this one. Because somehow, even after not seeing you for what feels like forever, the moment I finally see you again, something in me resets. It's like meeting you for the first time all over again. The same excitement. The same familiarity. The same feeling of... there you are. And maybe that's what makes our memories so special to me. No matter how much time passes, some people don't feel like strangers when they come back. They just feel like home you've somehow found again."
    }

];


// =========================================
// TRACK SELECTION
// =========================================

let currentTrack = 0;
let isPlaying = false;


function selectTrack(index, autoplay = false) {

    const track = tracks[index];

    if (!track) return;

    currentTrack = index;

    const note = memoryNotes[index];


    // SONG INFORMATION

    currentSong.textContent =
        track.dataset.song.toUpperCase();

    currentArtist.textContent =
        track.dataset.artist.toUpperCase();


    // MEMORY NOTE

    noteNumber.textContent =
        String(index + 1).padStart(2, "0") + " / 06";

    noteTitle.textContent =
        note.title;

    noteText.textContent =
        note.text;


    // ACTIVE TRACK

    tracks.forEach(item => {

        item.classList.remove("active-track");

    });

    track.classList.add("active-track");


    // LOAD AUDIO

    audio.src = audioFiles[index];

    audio.load();


    // RESET PROGRESS

    audioProgressFill.style.width = "0%";

    audioCurrentTime.textContent = "00:00";

    audioDuration.textContent = "--:--";


    // PLAY IF REQUESTED

    if (autoplay) {

        audio.play()
            .then(() => {

                isPlaying = true;

                playTrack.textContent = "Ⅱ";

                document
                    .querySelector(".record")
                    ?.classList.remove("paused");

            })
            .catch(error => {

                console.log(
                    "Audio could not autoplay:",
                    error
                );

                isPlaying = false;

                playTrack.textContent = "▶";

            });

    } else {

        isPlaying = false;

        playTrack.textContent = "▶";

        document
            .querySelector(".record")
            ?.classList.add("paused");

    }

}


// =========================================
// TRACKLIST BUTTONS
// =========================================

tracks.forEach((track, index) => {

    track.addEventListener("click", () => {

        selectTrack(index, true);

    });

});


// =========================================
// PREVIOUS
// =========================================

previousTrack.addEventListener("click", () => {

    currentTrack--;

    if (currentTrack < 0) {

        currentTrack = tracks.length - 1;

    }

    selectTrack(currentTrack, true);

});


// =========================================
// NEXT
// =========================================

nextTrack.addEventListener("click", () => {

    currentTrack++;

    if (currentTrack >= tracks.length) {

        currentTrack = 0;

    }

    selectTrack(currentTrack, true);

});


// =========================================
// PLAY / PAUSE
// =========================================

playTrack.addEventListener("click", () => {

    if (audio.paused) {

        audio.play()
            .then(() => {

                isPlaying = true;

                playTrack.textContent = "Ⅱ";

                document
                    .querySelector(".record")
                    ?.classList.remove("paused");

            })
            .catch(error => {

                console.log(
                    "Audio could not play:",
                    error
                );

            });

    } else {

        audio.pause();

        isPlaying = false;

        playTrack.textContent = "▶";

        document
            .querySelector(".record")
            ?.classList.add("paused");

    }

});


// =========================================
// AUDIO LOADED
// =========================================

audio.addEventListener("loadedmetadata", () => {

    audioDuration.textContent =
        formatTime(audio.duration);

});


// =========================================
// AUDIO PROGRESS
// =========================================

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;


    const percentage =
        (audio.currentTime / audio.duration) * 100;


    audioProgressFill.style.width =
        percentage + "%";


    audioCurrentTime.textContent =
        formatTime(audio.currentTime);

});


// =========================================
// WHEN SONG ENDS
// =========================================

audio.addEventListener("ended", () => {

    currentTrack++;

    if (currentTrack >= tracks.length) {

        currentTrack = 0;

    }

    selectTrack(currentTrack, true);

});


// =========================================
// FORMAT TIME
// =========================================

function formatTime(seconds) {

    if (!seconds || isNaN(seconds)) {

        return "00:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        Math.floor(seconds % 60);


    return (
        String(minutes).padStart(2, "0")
        + ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


// =========================================
// CONTINUE
// =========================================

continueSoundtrack.addEventListener("click", () => {

    audio.pause();

    const screen7 =
        document.getElementById("screen7");


    if (!screen7) {

        console.warn(
            "SCREEN 7 has not been created yet."
        );

        return;

    }


    screen6.classList.remove("active");

    screen7.classList.add("active");

    window.scrollTo(0, 0);

});


// =========================================
// INITIAL TRACK
// =========================================

selectTrack(0);

// =========================================
// SCREEN 7 → SCREEN 8
// =========================================

const continuePersonalFile =
    document.getElementById("continuePersonalFile");

const screen7 =
    document.getElementById("screen7");

const screen8 =
    document.getElementById("screen8");


if (continuePersonalFile && screen7 && screen8) {

    continuePersonalFile.addEventListener("click", () => {

        screen7.classList.remove("active");

        screen8.classList.add("active");

        window.scrollTo(0, 0);

    });

}

// =========================================
// SCREEN 8 → SCREEN 9
// =========================================

const continueYears =
    document.getElementById("continueYears");

const screen9 =
    document.getElementById("screen9");

if (continueYears && screen9) {
    continueYears.addEventListener("click", () => {

        screen8.classList.remove("active");
        screen9.classList.add("active");

        window.scrollTo(0, 0);
    });
}

// =========================================
// SCREEN 9 — THE NEXT CHAPTER
// =========================================

const startDrive =
    document.getElementById("startDrive");

const driveIntro =
    document.querySelector(".drive-intro");

const driveScene =
    document.getElementById("driveScene");

const journeyVideo =
    document.getElementById("journeyVideo");

const journeyAudio =
    document.getElementById("journeyAudio");

const lightTransition =
    document.getElementById("lightTransition");

const verseScreen =
    document.getElementById("verseScreen");

const finalMessage =
    document.getElementById("finalMessage");


if (
    startDrive &&
    driveIntro &&
    driveScene &&
    journeyVideo &&
    journeyAudio &&
    lightTransition &&
    verseScreen &&
    finalMessage
) {

    // =========================================
    // INITIAL STATE
    // =========================================

    driveScene.classList.remove("drive-active");
    verseScreen.classList.remove("verse-active");
    finalMessage.classList.remove("message-active");


    // =========================================
    // START THE JOURNEY
    // =========================================

    startDrive.addEventListener("click", () => {

        // Prevent clicking twice
        startDrive.disabled = true;


        // Fade out intro
        driveIntro.classList.add("fade-out");


        setTimeout(() => {

            driveIntro.style.display = "none";

            // Show cinematic scene
            driveScene.classList.add("drive-active");


            // Start video
            journeyVideo.currentTime = 0;

            const videoPromise =
                journeyVideo.play();


            if (videoPromise !== undefined) {

                videoPromise.catch((error) => {

                    console.log(
                        "Video could not autoplay:",
                        error
                    );

                });

            }


            // Start music
            journeyAudio.currentTime = 0;
            journeyAudio.volume = 0.8;

            const audioPromise =
                journeyAudio.play();


            if (audioPromise !== undefined) {

                audioPromise.catch((error) => {

                    console.log(
                        "Music could not autoplay:",
                        error
                    );

                });

            }

        }, 1000);

    });


    // =========================================
    // VIDEO FINISHES
    // =========================================

    journeyVideo.addEventListener("ended", () => {

        // Pause video
        journeyVideo.pause();


        // Trigger golden light
        lightTransition.classList.add("light-active");


        // Slowly lower music
        let volume = journeyAudio.volume;

        const fadeMusic = setInterval(() => {

            volume -= 0.04;

            if (volume <= 0.2) {

                volume = 0.2;
                clearInterval(fadeMusic);

            }

            journeyAudio.volume = volume;

        }, 100);


        // =====================================
        // REVEAL VERSE
        // =====================================

        setTimeout(() => {

            verseScreen.classList.add("verse-active");

        }, 1200);


        // =====================================
        // MOVE TO FINAL MESSAGE
        // =====================================

        setTimeout(() => {

            verseScreen.classList.remove("verse-active");

            setTimeout(() => {

                finalMessage.classList.add("message-active");

            }, 1200);

        }, 5000);


        // =====================================
        // FADE MUSIC OUT AT THE END
        // =====================================

        setTimeout(() => {

            const finalFade =
                setInterval(() => {

                    journeyAudio.volume -= 0.03;

                    if (
                        journeyAudio.volume <= 0
                    ) {

                        journeyAudio.volume = 0;

                        journeyAudio.pause();

                        clearInterval(finalFade);

                    }

                }, 100);

        }, 18000);

    });

}