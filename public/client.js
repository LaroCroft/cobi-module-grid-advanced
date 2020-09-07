COBI.init('token');

// Make clock appear in upper right corner
COBI.app.clockVisible.write(false);
// Also listen to standard controller events
COBI.devkit.overrideThumbControllerMapping.write(true);

// Disable Reordering in Experience
var inEditMode = (COBI.parameters.context() == COBI.context.offRideSettings || COBI.parameters.context() == COBI.context.onRideSettings);

// Display detailled item names if touch interaction is allowed
COBI.app.touchInteractionEnabled.subscribe(function(touchInteractionEnabled) {
  //updateInterfaceVisibility(touchInteractionEnabled);
});

// Define id, name, events, formatting functions, units and default value for each item
var definitions = [

  // Motor
  {
    id: 'motor_mode',
    subscribe: COBI.motor.driveMode.subscribe,
    unsubscribe: COBI.motor.driveMode.unsubscribe,
    formatter: formatDriveMode,
  },
  {
    id: 'motor_range',
    subscribe: COBI.motor.range.subscribe,
    unsubscribe: COBI.motor.range.unsubscribe,
    formatter: formatInt,
  }, 
  {
    id: 'motor_assistance',
    subscribe: COBI.motor.assistanceIndicator.subscribe,
    unsubscribe: COBI.motor.assistanceIndicator.unsubscribe,
    formatter: formatInt,
  }, 
  
  // Battery
  {
    id: 'battery_battery',
    subscribe: COBI.battery.state.subscribe,
    unsubscribe: COBI.battery.state.unsubscribe,
    formatter: formatBattery,
  },

  // Ride 
  {
    id: 'ride_speed',
    subscribe: COBI.rideService.speed.subscribe,
    unsubscribe: COBI.rideService.speed.unsubscribe,
    formatter: formatSpeedDot1,
  },
  {
    id: 'ride_power',
    subscribe: COBI.rideService.userPower.subscribe,
    unsubscribe: COBI.rideService.userPower.unsubscribe,
    formatter: formatInt,
  },
  {
    id: 'ride_cadence',
    subscribe: COBI.rideService.cadence.subscribe,
    unsubscribe: COBI.rideService.cadence.unsubscribe,
    formatter: formatInt,
  },
  {
    id: 'ride_heart_rate',
    subscribe: COBI.rideService.heartRate.subscribe,
    unsubscribe: COBI.rideService.heartRate.unsubscribe,
    formatter: formatInt,
  },
  
  // Tour
  {
    id: 'tour_calories',
    subscribe: COBI.tourService.calories.subscribe,
    unsubscribe: COBI.tourService.calories.unsubscribe,
    formatter: formatInt,
  },
  {
    id: 'tour_average_speed',
    subscribe: COBI.tourService.averageSpeed.subscribe,
    unsubscribe: COBI.tourService.averageSpeed.unsubscribe,
    formatter: formatSpeedDot1,
  },

  {
    id: 'tour_distance',
    subscribe: COBI.tourService.ridingDistance.subscribe,
    unsubscribe: COBI.tourService.ridingDistance.unsubscribe,
    formatter: formatDistanceDot1,
  },
  {
    id: 'tour_duration',
    subscribe: COBI.tourService.ridingDuration.subscribe,
    unsubscribe: COBI.tourService.ridingDuration.unsubscribe,
    formatter: formatStopwatch,
  },
  {
    id: 'tour_ascent',
    subscribe: COBI.tourService.ascent.subscribe,
    unsubscribe: COBI.tourService.ascent.unsubscribe,
    formatter: formatInt,
  },

  // Mobile
  {
    id: 'mobile_altitude',
    subscribe: COBI.mobile.location.subscribe,
    unsubscribe: COBI.mobile.location.unsubscribe,
    formatter: formatAltitude,
  },  
  {
    id: 'mobile_bearing',
    subscribe: COBI.mobile.location.subscribe,
    unsubscribe: COBI.mobile.location.unsubscribe,
    formatter: formatLocation,
  },  
  {
    id: 'mobile_speed',
    subscribe: COBI.mobile.location.subscribe,
    unsubscribe: COBI.mobile.location.unsubscribe,
    formatter: formatGPSSpeedDot1,
  },  

  // Navigation
  {
    id: 'route_distance',
    subscribe: COBI.navigationService.distanceToDestination.subscribe,
    unsubscribe: COBI.navigationService.distanceToDestination.unsubscribe,
    formatter: formatDistanceDot1,
  }, 
  {
    id: 'route_eta',
    subscribe: COBI.navigationService.eta.subscribe,
    unsubscribe: COBI.navigationService.eta.unsubscribe,
    formatter: formatInt,
  }, 
];
