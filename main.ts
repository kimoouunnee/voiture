input.onButtonPressed(Button.A, function () {
    radio.sendString("tourner_gauche")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("avance")
})
radio.onReceivedString(function (receivedString) {
    if ("avance" == receivedString && i == 0) {
        accélérer()
        i += 1
    } else if (i == 1) {
        CP.ArretMoteurs()
        i = 0
    }
    if ("tourner_gauche" == receivedString && ga == 0) {
        CP.ActiveMoteur(CP.moteurs.M1, -255)
        CP.ActiveMoteur(CP.moteurs.M2, 255)
        CP.ActiveMoteur(CP.moteurs.M3, 255)
        CP.ActiveMoteur(CP.moteurs.M4, -255)
        ga += 1
    } else if (ga == 1) {
        accélérer()
        ga = 0
    }
    if ("tourner_droite" == receivedString && d == 0) {
        CP.ActiveMoteur(CP.moteurs.M1, 255)
        CP.ActiveMoteur(CP.moteurs.M2, -255)
        CP.ActiveMoteur(CP.moteurs.M3, -255)
        CP.ActiveMoteur(CP.moteurs.M4, 255)
        d += 1
    } else if (d == 1) {
        accélérer()
        d = 0
    }
    if ("360" == receivedString && a == 0) {
        CP.ActiveMoteur(CP.moteurs.M1, 255)
        CP.ActiveMoteur(CP.moteurs.M2, 255)
        CP.ActiveMoteur(CP.moteurs.M3, -255)
        CP.ActiveMoteur(CP.moteurs.M4, -255)
        basic.pause(1000)
        CP.ArretMoteurs()
        a += 1
    } else if (a == 1) {
        CP.ArretMoteurs()
        a = 0
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("tourner_droite")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("360")
})
function accélérer () {
    CP.ActiveMoteur(CP.moteurs.M1, 255)
    CP.ActiveMoteur(CP.moteurs.M2, 255)
    CP.ActiveMoteur(CP.moteurs.M3, 255)
    CP.ActiveMoteur(CP.moteurs.M4, 255)
}
let a = 0
let d = 0
let ga = 0
let i = 0
radio.setGroup(4)
i = 0
ga = 0
d = 0
a = 0
basic.showIcon(IconNames.Heart)
