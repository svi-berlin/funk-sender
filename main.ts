input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    radio.sendNumber(1)
    basic.setLedColor(0xffff00)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    radio.sendNumber(2)
    basic.setLedColor(0x0000ff)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
