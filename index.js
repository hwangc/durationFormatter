/*
Duration Formatter


The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of 'years', 'days', 'hours', 'minutes' and 'seconds'.
It is much easier to understand with an example:
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
A year is 365 days and a day is 24 hours.

Note that spaces are important.



Detailed rules
The resulting expression is made of components like '4 seconds', '1 year', etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
A more significant units of time will occur before than a least significant one. Therefore, "1 second and 1 year" is not correct, but "1 year and 1 second" is.
Different components have different unit of times. So there is not repeated units like in "5 seconds and 1 second".
A component will not appear at all if its value happens to be zero. Hence, "1 minute and 0 seconds" is not valid, but it should be just "1 minute".
A unit of time must be used "as much as possible". It means that the function should not return "61 seconds", but "1 minute and 1 second" instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration(duration) {
  if (duration < 0) return;
  if (duration === 0) return "now";

  const Y = "year";
  const D = "day";
  const H = "hour";
  const M = "minute";
  const S = "second";
  const PL = "s";
  const CM = ",";

  const secBySec = 1;
  const minBySec = 60;
  const hourBySec = 60 * minBySec;
  const dayBySec = 24 * hourBySec;
  const yearBySec = 365 * dayBySec;

  let year = 0;
  let day = 0;
  let hour = 0;
  let min = 0;
  let sec = 0;
  let times = {};

  if (duration >= yearBySec) {
    year = parseInt(duration / yearBySec);
    times[Y] = year;
  }
  duration -= yearBySec * year;

  if (duration >= dayBySec) {
    day = parseInt(duration / dayBySec);
    times[D] = day;
  }
  duration -= dayBySec * day;

  if (duration >= hourBySec) {
    hour = parseInt(duration / hourBySec);
    times[H] = hour;
  }
  duration -= hourBySec * hour;

  if (duration >= minBySec) {
    min = parseInt(duration / minBySec);
    times[M] = min;
  }
  duration -= minBySec * min;

  if (duration >= secBySec) {
    sec = parseInt(duration / secBySec);
    times[S] = sec;
  }
  duration -= secBySec * sec;

  if (duration !== 0) {
    console.log("Error");
  }

  let strFormat = "";
  let timeBtwn = [];
  let timeUnits = Object.keys(times);

  for (let i = 0; i <= timeUnits.length - 1; i++) {
    if (i === 0) {
      continue;
    } else if (i === 1) {
      timeBtwn.push(" and ");
    } else {
      timeBtwn.push(", ");
    }
  }

  for (let i = 0; i <= timeUnits.length - 1; i++) {
    const unit = timeUnits[i];
    const time = times[unit];
    const plural = time * 1 > 1 ? PL : "";
    const btwn = timeBtwn.length ? timeBtwn.pop() : "";
    strFormat += `${time} ${unit}${plural}${btwn}`;
  }

  return strFormat;
}