// build time:Mon Aug 14 2017 21:39:57 GMT+0800 (CST)
$(document).ready(function(){var n=$(".header-inner"),e=$("#sidebar"),i=function(){return n.height()+CONFIG.sidebar.offset},t=function(n){return e.css({"margin-top":n})},r=window.matchMedia("(min-width: 991px)");t(i()).show(),r.addListener(function(n){n.matches&&t(i())})});
//rebuild by neat 