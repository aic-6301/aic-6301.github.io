$(function() {
$('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'>");
$('head').append("<link rel='stylesheet' href='/aseets/design.css?"+new Date().getTime()+"'>");
$('#headers').load("/head.html?"+new Date().getTime());
  });