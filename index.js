module.exports = function (selectedClass, context) {
    var selected = context || window.location.pathname;
    var navSelected = document.querySelector('nav li a[href="'+selected+'"]');
    navSelected.parentNode.setAttribute('class', selectedClass);
};
