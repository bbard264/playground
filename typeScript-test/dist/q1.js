"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getClockAngle(hh_mm) {
    const [hours, minutes] = hh_mm.split(':');
    let hoursNum = parseInt(hours);
    let minutesNum = parseInt(minutes);
    if (hoursNum > 12) {
        hoursNum -= 12;
    }
    let hoursDegree = hoursNum * (360 / 12);
    // housr hand degree should have some more degree follow the minutes change
    hoursDegree = hoursDegree + (minutesNum / 60) * (360 / 12);
    const minutesDegree = minutesNum * (360 / 60);
    // sperate is 2 case that depend on with hands have more degree
    const diffCaseOne = hoursDegree - minutesDegree < 0
        ? minutesDegree - hoursDegree
        : hoursDegree - minutesDegree;
    const diffCaseTwo = 360 +
        (hoursDegree - minutesDegree < 0
            ? hoursDegree - minutesDegree
            : minutesDegree - hoursDegree);
    return diffCaseOne < diffCaseTwo ? diffCaseOne : diffCaseTwo;
}
exports.default = getClockAngle;
