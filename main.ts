input.onPinPressed(TouchPin.P0, function () {
    if (Dice3R2 > 0) {
        Dice3R2 = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    Dice1 = Dice1R2
})
input.onPinPressed(TouchPin.P2, function () {
    Dice5 = Dice5R2
})
input.onButtonPressed(Button.B, function () {
    if (Dice3R2 > 0) {
        Dice3R2 = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Dice4R2 > 0) {
        Dice4R2 = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    shakecount = shakecount + 1
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
let Dice4 = 0
let Dice3 = 0
let Dice2 = 0
let shakecount = 0
let Dice5 = 0
let Dice1 = 0
let Dice5R2 = 0
let Dice4R2 = 0
let Dice3R2 = 0
let Dice1R2 = 0
Dice1R2 = randint(1, 6)
let Dice2R2 = randint(1, 6)
Dice3R2 = randint(1, 6)
Dice4R2 = randint(1, 6)
Dice5R2 = randint(1, 6)
basic.forever(function () {
	
})
