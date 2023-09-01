function getClockAngle(hh_mm: string): number {
  const [hours, minutes]: string[] = hh_mm.split(':');
  let hoursNum = parseInt(hours);
  let minutesNum = parseInt(minutes);
  if (hoursNum > 12) {
    hoursNum -= 12;
  }

  let hoursDegree: number = hoursNum * (360 / 12);
  // housr hand degree should have some more degree follow the minutes change
  hoursDegree = hoursDegree + (minutesNum / 60) * (360 / 12);

  const minutesDegree: number = minutesNum * (360 / 60);

  // sperate is 2 case that depend on with hands have more degree
  const diffCaseOne: number =
    hoursDegree - minutesDegree < 0
      ? minutesDegree - hoursDegree
      : hoursDegree - minutesDegree;
  const diffCaseTwo: number =
    360 +
    (hoursDegree - minutesDegree < 0
      ? hoursDegree - minutesDegree
      : minutesDegree - hoursDegree);

  return diffCaseOne < diffCaseTwo ? diffCaseOne : diffCaseTwo;
}
export default getClockAngle;
