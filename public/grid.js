var touchInteractionEnabled = false;
var isPortrait = window.matchMedia('(orientation: portrait)').matches;

// Display detailled item names if touch interaction is allowed
function updateInterfaceVisibility(touchInteractionEnabled) {
  var elements = document.getElementsByClassName('label');
  for (var i in elements) {
    if (elements[i].style) elements[i].style.visibility = touchInteractionEnabled ? 'visible' : 'hidden';
  }
}

// Initialize grip view
function initGrid() {
  document.querySelectorAll("[id]").forEach(function(entry) {
    var definition = definitions.filter(definition => definition.id == entry.id);
    if (definition.length > 0) {
    	definition[0].unsubscribe();
        definition[0].subscribe(function(value) { $('#' + definition[0].id).html(`${definition[0].formatter(value)}`); });  
    }
  });
}

// Hook onto event that triggers on value change
function subscribeGridItemWith(definition) {
  var formatter = definition.formatter;
  definition.unsubscribe();
  
}

// Init Grid on Load
$(window).on('blur focus', function() {
  initGrid();
});

$(window).on('load', function(e) {
  initGrid();
});
