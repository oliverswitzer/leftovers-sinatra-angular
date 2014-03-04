//websocket
var scheme   = "ws://";
var uri      = scheme + window.document.location.host + "/";
var ws       = new WebSocket(uri);
ws.onopen    = function()  { console.log('websocket opened'); };
ws.onclose   = function()  { console.log('websocket closed'); };
ws.onmessage = function(m) { angular.element($('#all-pickups')).scope().getPickups(); };


  