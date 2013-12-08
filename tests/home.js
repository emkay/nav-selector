var test = require('tape');
var nav = require('nav');
var navSelector = require('../');

test('test home page', function (t) {
    var items = [
        {'name': 'Home', 'href': '/'},
        {'name': 'Somewhere', 'href': '/somewhere/'},
        {'name': 'Another Place', 'href': '/another-place/'}
    ];

    nav('body', items);

    navSelector('selected', '/');
    
    var homeLink = document.querySelector('li a[href="/"]');
    var somewhereLink = document.querySelector('li a[href="/somewhere/"]');

    t.equal(homeLink.parentNode.getAttribute('class'), 'item selected');
    t.equal(somewhereLink.parentNode.getAttribute('class'), 'item');
    
    t.end();
});
