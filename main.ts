input.onButtonPressed(Button.A, function () {
    basic.showNumber(A)
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + (B))
    basic.pause(500)
    basic.showString("" + (A))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(B)
    B += 1
    basic.showNumber(B)
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
    basic.clearScreen()
})
let B = 0
let A = 0
A = 0
B = 0
basic.showString("Start")
