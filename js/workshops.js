var myElement = $('.workshops h3');

myElement.on('click', function(){
    // $(this).toggleClass('hide');
    $(this).next().slideToggle();
});