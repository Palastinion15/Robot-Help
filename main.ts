input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.showArrow(ArrowNames.North)
})
input.onSound(DetectedSound.Loud, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
// among_us
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.showArrow(ArrowNames.South)
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        # # . # #
        # # . # .
        . # # # .
        . # . # .
        `)
}
// balls
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) <= 8) {
        basic.showIcon(IconNames.Yes)
        music.playTone(262, music.beat(BeatFraction.Whole))
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
        basic.pause(5000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) > 8) {
        basic.showIcon(IconNames.No)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(500)
    }
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0) <= 8) {
        for (let index = 0; index < 1; index++) {
            wuKong.setAllMotor(50, 0)
        }
    }
})
