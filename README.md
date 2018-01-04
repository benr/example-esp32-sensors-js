# Mongoose ESP32 Sensor Example (JS)

## Overview

This is a single mJS example to demonstrate use of the onboard Touch and Hall Effect
sensors provided by the ESP32.

In addition to providing examples on the sensor use, it also provides a starting place
for interpreting sensor values.  You can test the sensors and tweek the code to experiment
with your intended deployment scenario.

Example console output:

```
[Jan  4 00:30:56.017] Touch Sensor 3 value 15568 -  --  Hall Sensor: 65478 - 
[Jan  4 00:30:57.022] Touch Sensor 3 value 15500 -  --  Hall Sensor: 65475 - 
[Jan  4 00:30:58.017] Touch Sensor 3 value 15703 -  --  Hall Sensor: 65479 - 
[Jan  4 00:30:59.019] Touch Sensor 3 value 15465 -  --  Hall Sensor: 65503 Magnet Detected? 
[Jan  4 00:31:00.019] Touch Sensor 3 value 15470 -  --  Hall Sensor: 65524 Magnet Detected? 
[Jan  4 00:31:01.021] Touch Sensor 3 value 15420 -  --  Hall Sensor: 65507 Magnet Detected? 
[Jan  4 00:31:02.018] Touch Sensor 3 value 15433 -  --  Hall Sensor: 9 Magnet Detected? 
[Jan  4 00:31:03.018] Touch Sensor 3 value 15418 -  --  Hall Sensor: 10 Magnet Detected? 
[Jan  4 00:31:04.017] Touch Sensor 3 value 15569 -  --  Hall Sensor: 65464 - 
[Jan  4 00:31:05.018] Touch Sensor 3 value 15546 -  --  Hall Sensor: 65487 - 
[Jan  4 00:31:06.017] Touch Sensor 3 value 15603 -  --  Hall Sensor: 65475 - 
[Jan  4 00:31:07.017] Touch Sensor 3 value 16340 -  --  Hall Sensor: 65463 - 
[Jan  4 00:31:08.018] Touch Sensor 3 value 15544 -  --  Hall Sensor: 65476 - 
[Jan  4 00:31:09.017] Touch Sensor 3 value 15552 -  --  Hall Sensor: 65478 - 
[Jan  4 00:31:10.024] Touch Sensor 3 value 15501 -  --  Hall Sensor: 65453 - 
[Jan  4 00:31:11.017] Touch Sensor 3 value 16438 -  --  Hall Sensor: 65470 - 
[Jan  4 00:31:12.018] Touch Sensor 3 value 10938 Touch?  --  Hall Sensor: 65471 - 
[Jan  4 00:31:13.018] Touch Sensor 3 value 10241 Touch?  --  Hall Sensor: 65480 - 
[Jan  4 00:31:14.022] Touch Sensor 3 value 15564 -  --  Hall Sensor: 65464 - 
[Jan  4 00:31:15.017] Touch Sensor 3 value 15576 -  --  Hall Sensor: 65475 - 
[Jan  4 00:31:16.017] Touch Sensor 3 value 15499 -  --  Hall Sensor: 65473 - 
[Jan  4 00:31:17.017] Touch Sensor 3 value 15515 -  --  Hall Sensor: 65476 - 
```

NOTE!  The interpretation of the values from the sensors is purely based on my own testing with a Huzzah32.  The values may or may not be valid for your use case.  To make this clear I suffix the messages with ?.  

The example code assumes you are using GPIO 15 (Touch Sensor 3) for the touch sensor.  Simply attach a bare wire to that pin, you do not need to ground it or attach the wire to anything in any way, just touch the bare wire with your fingers to activate.

For the Hall sensor, use a relatively powerful magnet.  The sensor is sensative to the magnets pole, so try both poles.  Please note that the sensor has an extremely limited range, in my tests the range is only approximately 1cm!

## How to install this app

- Install and start [mos tool](https://mongoose-os.com/software.html)
- Switch to the Project page, find and import this app, build and flash it:

<p align="center">
  <img src="https://mongoose-os.com/images/app1.gif" width="75%">
</p>

## Using this example from the CLI

To build and flash the code:

```bash
git clone https://github.com/mongoose-os-apps/example-esp32-sensors-js
cd example-esp32-sensors-js
mos build --platform esp32
mos flash
mos console
```

To quickly make code changes from the CLI:

```bash
cd example-esp32-sensors-js
vi fs/init.js
mos put fs/init.js
mos console
```

