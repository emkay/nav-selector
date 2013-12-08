var test = require('tape');
var navSelector = require('../');

test('test home page', function (t) {
    var body = document.querySelector('body');
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');

    navSelector('selected', '/');
    
    var homeLink = document.querySelector('li a[href="/"]');

    t.equal(homeLink.getAttribute('class'), 'selected');
    t.end();
});
