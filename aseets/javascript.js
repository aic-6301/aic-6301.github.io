$(function() {
$('head').append("<link rel='stylesheet' href='/aseets/design.css?"+new Date().getTime()+"'>");
$('#headers').load("/head.html"+new Date().getTime());
  });