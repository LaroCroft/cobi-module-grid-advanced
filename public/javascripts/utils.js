// Formatters

function formatBatteryLevel(value) {
//  document.getElementById('battery_state').innerHTML = formatBatteryState(value);
  if (value.level !== undefined) return value.level.toString() + '%';
  if (value.batteryLevel !== undefined) return value.batteryLevel.toString() + '%';  
  return '—';
}

function formatBatteryState(value) {
  if (value.state == "UNKNOWN") return '-';
  if (value.state == "CHARGING") return 'CHARGE';
  if (value.state == "LOW_CHARGE") return 'LOW';
  if (value.state == "INTERMEDIATE_CHARGE") return 'MED';
  if (value.state == "FULL_CHARGE") return 'FULL';
}

function formatLocation(value) {
  return parseInt(value.bearing);
}

function formatAltitude(value) {
  return parseInt(value.altitude);
}

function formatGPSSpeedDot1(value) {
  var speed = formatDot1(value * 3.6).toString();
  return enforceDot1(speed);
}

function formatInt(value) {
  return parseInt(value);
}

function formatSpeedDot1(value) {
  var speed = formatDot1(value * 3.6).toString();
  return enforceDot1(speed);
}

function formatDistanceDot1(value) {
  var distance = formatDot1(value / 1000).toString();
  return enforceDot1(distance);
}

function formatStopwatch(value) {
  var min = parseInt(value / 60).toString();
  var sec = parseInt(value % 60).toString();
  // if (min.length == 1) min = '0' + min;
  if (sec.length == 1) sec = '0' + sec;
  return min + ':' + sec;
}

function formatDuration(value) {
  var hour = Math.floor(value / 3600);
  value = value - hour * 3600;
  var min = Math.floor(value / 60);
  if (min.toString().length == 1) min = '0' + min;
  return hour + ':' + min;
}

function formatEpoch(value) {
  var d = new Date(Date.UTC(1970, 0, 1));
  d.setUTCSeconds(value);
  var hour = d.getHours().toString();  
  var min = d.getMinutes().toString();
  if (hour.length == 1) hour = '0' + hours;
  if (min.length == 1) min = '0' + min;
  return hour + ':' + min;
}

function formatDriveMode(value) {
  if (value == 0) return 'OFF';
  if (value == 1) return 'ECO';
  if (value == 2) return 'TOUR';
  if (value == 3) return 'EMTB';
  if (value == 4) return 'TURBO';
}

function formatDot1(value) {
  return parseInt(value * 10) / 10;
}

function enforceDot1(stringValue) {
  return stringValue.indexOf('.') == -1 ? stringValue + '.0' : stringValue;
}

