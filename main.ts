let TechnikLampe = 0
input.onButtonPressed(Button.A, function () {
    if (TechnikLampe == 0) {
        TechnikLampe = 1
    } else {
        TechnikLampe = 0
    }
})
basic.forever(function () {
    if (TechnikLampe == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (TechnikLampe == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(pins.analogReadPin(AnalogPin.P0) * 6)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
