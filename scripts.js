$(document).ready(function(){
    $('#fig1').click(function(){
        $('.design').toggle();
        $('.design-hidden').toggle();
    })
    $('.design-hidden').click(function(){
        $('.design-hidden').toggle();
        $('.design').toggle();
    });
});