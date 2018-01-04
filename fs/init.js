
load("api_timer.js");
load("api_esp32.js");
load('api_esp32_touchpad.js');

// Touch sensors are numbered from 0 to 9.
// For convenience, TouchPad.GPIO map translates from GPIO number to sensor number.
let ts = TouchPad.GPIO[15];

TouchPad.init();
TouchPad.setVoltage(TouchPad.HVOLT_2V4, TouchPad.LVOLT_0V8, TouchPad.HVOLT_ATTEN_1V5);
TouchPad.config(ts, 0);

Timer.set(1000 /* 1 sec */, Timer.REPEAT, function() {
  let tv = TouchPad.read(ts);
  let td = (tv < 15000) ? 'Touch?' : '-';

  let h = ESP32.hall();
  let md = (h < 65450 || h > 65500) ? 'Magnet Detected?' : '-'; 

  print('Touch Sensor', ts, 'value', tv, td, 
	' -- ',
        'Hall Sensor:', h, md);

}, null);


