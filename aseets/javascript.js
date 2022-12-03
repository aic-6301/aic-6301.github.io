if ("http:" == location.protocol) {
  location.href = "https://aicy.aic-group.net"+location.pathname;
}
if ("aic-6301.github.io" === location.hostname) {
  location.href = "https://aicy.aic-group.net"+location.pathname;
}
$(function() {
$('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'>");
$('head').append("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'>");
$('head').append("<link rel='stylesheet' href='/aseets/design.css?"+new Date().getTime()+"'>");
$('#headers').load("/head.html?"+new Date().getTime());
});

function nav_close() {
  $('nav.nav').fadeOut(400);
  $('.nav-close').fadeOut(400);
}
function nav_open() {
  $('nav.nav').fadeIn(400);
  $('.nav-close').fadeIn(400);
}