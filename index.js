module.exports = function (selectedClass, context) {
    var selected = context || window.location.pathname;
    var navSelected = document.querySelector('nav li a[href="'+selected+'"]');
    var parent = navSelected.parentNode;
    var oldClass = parent.getAttribute('class');
    parent.setAttribute('class', oldClass + ' ' + selectedClass);
};
