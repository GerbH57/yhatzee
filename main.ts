let Dice3 = 0
let Dice1 = 0
let Dice5 = 0
let Dice2 = 0
let Dice4 = 0
input.onPinPressed(TouchPin.P0, function () {
    let Dice3R2 = 0
    Dice3 = Dice3R2
})
input.onButtonPressed(Button.A, function () {
    let Dice1R2 = 0
    Dice1 = Dice1R2
})
input.onPinPressed(TouchPin.P2, function () {
    let Dice5R2 = 0
    Dice5 = Dice5R2
})
input.onButtonPressed(Button.B, function () {
    let Dice2R2 = 0
    Dice2 = Dice2R2
})
input.onPinPressed(TouchPin.P1, function () {
    let Dice4R2 = 0
    Dice4 = Dice4R2
})
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    basic.showString("" + (Dice1))
    basic.pause(1000)
    Dice2 = randint(1, 6)
    basic.showString("" + (Dice2))
    basic.pause(1000)
    Dice3 = randint(1, 6)
    basic.showString("" + (Dice3))
    basic.pause(1000)
    Dice4 = randint(1, 6)
    basic.showString("" + (Dice4))
    basic.pause(1000)
    Dice5 = randint(1, 6)
    basic.showString("" + (Dice5))
    basic.pause(1000)
})
