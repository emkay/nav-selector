module.exports = function (selectedClass, context) {
    var selected = context || window.location.pathname;
    var navSelected = document.querySelector('nav li a[href="'+selected+'"]');
    var parent = navSelected && navSelected.parentNode;
    var oldClass = parent && parent.getAttribute('class');
    parent && parent.setAttribute('class', oldClass + ' ' + selectedClass);
};
