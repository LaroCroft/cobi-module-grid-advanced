// Initialize grip view
function initGrid() {
  document.querySelectorAll("[id]").forEach(function(entry) {
    var definition = definitions.filter(definition => definition.id == entry.id);
    if (definition.length > 0) {
//    	definition[0].unsubscribe();
        definition[0].subscribe(function(value) { $('#' + definition[0].id).html(`${definition[0].formatter(value)}`); });  
    }
  });
}

// Init Grid on Load
$(window).on('blur focus', function() {
  initGrid();
});

$(window).on('load', function(e) {
  initGrid();
});
