$(document).ready(function () {
    // creating button elements and setting attribute for sound 
    let btnQ = document.createElement("audio");
    btnQ.setAttribute("src", "./Drum_Machine_Samples/Bld_H1.mp3")

    let btnW = document.createElement("audio");
    btnW.setAttribute("src", "./Drum_Machine_Samples/Brk_Snr.mp3")

    let btnE = document.createElement("audio");
    btnE.setAttribute("src", "./Drum_Machine_Samples/Cev_H2.mp3")

    let btnA = document.createElement("audio");
    btnA.setAttribute("src", "./Drum_Machine_Samples/Chord_3.mp3")

    let btnS = document.createElement("audio");
    btnS.setAttribute("src", "./Drum_Machine_Samples/Dry_Ohh.mp3")

    let btnD = document.createElement("audio");
    btnD.setAttribute("src", "./Drum_Machine_Samples/Give_us_a_light.mp3")

    let btnZ = document.createElement("audio");
    btnZ.setAttribute("src", "./Drum_Machine_Samples/Heater-4_1.mp3")

    let btnX = document.createElement("audio");
    btnX.setAttribute("src", "./Drum_Machine_Samples/Kick_n_Hat.mp3")

    let btnC = document.createElement("audio");
    btnC.setAttribute("src", "./Drum_Machine_Samples/punchy_kick_1.mp3")

    // click function
    $(".drum-pad").click(function () {
        if (this.value == "Qkey") {
            $("#display").text('Q')
            btnQ.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Wkey") {
            $("#display").text('W')
            btnW.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Ekey") {
            $("#display").text('E')
            btnE.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Akey") {
            $("#display").text('A')
            btnA.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Skey") {
            $("#display").text('S')
            btnS.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Dkey") {
            $("#display").text('D')
            btnD.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Zkey") {
            $("#display").text('Z')
            btnZ.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Xkey") {
            $("#display").text('X')
            btnX.play()
        }
    });
    $(".drum-pad").click(function () {
        if (this.value == "Ckey") {
            $("#display").text('C')
            btnC.play()
        }
    });

    // keyboard button audio
    $("body").keydown(function (event) {
        if (event.which === 81) {
            btnQ.play();
            $("#display").html("Q");
        }
        else if (event.which === 87) {
            btnW.play();
            $("#display").html("W");
        }
        else if (event.which === 69) {
            btnE.play();
            $("#display").html("E");
        }
        else if (event.which === 65) {
            btnA.play();
            $("#display").html("A");
        }
        else if (event.which === 83) {
            btnS.play();
            $("#display").html("S");
        }
        else if (event.which === 68) {
            btnD.play();
            $("#display").html("D");
        }
        else if (event.which === 90) {
            btnZ.play();
            $("#display").html("Z");
        }
        else if (event.which === 88) {
            btnX.play();
            $("#display").html("X");
        }
        else if (event.which === 67) {
            btnC.play();
            $("#display").html("C");
        }
    });
});
