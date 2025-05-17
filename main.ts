basic.showIcon(IconNames.EighthNote)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        music.play(music.stringPlayable("C5 B A G A B C5 - ", 120), music.PlaybackMode.UntilDone)
        basic.showString("feliz")
    } else if (input.isGesture(Gesture.TiltRight)) {
        music.play(music.stringPlayable("E D C D E E E - ", 100), music.PlaybackMode.UntilDone)
        basic.showString("triste")
    } else if (input.isGesture(Gesture.LogoDown)) {
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
        basic.showString("techno! ")
    } else {
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
