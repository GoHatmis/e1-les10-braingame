let bewerking = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(randint(1, 9))
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
    }
    for (let index = 0; index < 2; index++) {
        bewerking = randint(1, 4)
        if (bewerking == 1) {
            basic.showString("+")
        } else if (bewerking == 2) {
            basic.showString("-")
        } else if (bewerking == 3) {
            basic.showString("x")
        } else {
            basic.showString(":")
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
    }
})
