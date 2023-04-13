input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.showIcon(IconNames.Sword)
})
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
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        basic.showIcon(IconNames.Heart)
    }
})
