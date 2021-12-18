input.onButtonPressed(Button.A, function () {
    signal = 1
})
input.onGesture(Gesture.Shake, function () {
    signal = 4
})
input.onButtonPressed(Button.AB, function () {
    signal = 3
})
input.onButtonPressed(Button.B, function () {
    signal = 2
})
let signal = 0
radio.setGroup(1)
radio.setTransmitPower(7)
signal = 0
basic.forever(function () {
    basic.showNumber(signal)
    radio.sendNumber(signal)
})
