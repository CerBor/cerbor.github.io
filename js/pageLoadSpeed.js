window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    var tag = 'Page load time is '+ loadTime + 'ms.';
    $('head').append('<!--' + tag + "-->");
}