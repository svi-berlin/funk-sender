input.onButtonPressed(Button.A, function () {
    music.playTone(131, music.beat(BeatFraction.Eighth))
    basic.showNumber(1)
    radio.sendNumber(1)
    basic.setLedColor(0xffff00)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showNumber(3)
    radio.sendNumber(3)
    basic.setLedColor(0xff0000)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Eighth))
    basic.showNumber(2)
    radio.sendNumber(2)
    basic.setLedColor(0x0000ff)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
