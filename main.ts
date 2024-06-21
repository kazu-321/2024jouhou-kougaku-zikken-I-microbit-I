input.onButtonPressed(Button.A, function () {
    counter += 1
    if (counter == 3) {
        counter = 0
        basic.showIcon(IconNames.Heart)
    } else if (counter == 1) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let counter = 0
counter = 0
basic.showIcon(IconNames.Heart)
