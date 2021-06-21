$(document).ready(function(){
//the first icon
    $('#fig1').click(function(){
        $('.design').toggle();
        $('.design-hidden').toggle();
    })
    $('.design-hidden').click(function(){
        $('.design-hidden').toggle();
        $('.design').toggle();
    });
//the second icon
    $('#fig2').click(function(){
        $('.development').toggle();
        $('.development-hidden').toggle();
    })
    $('.development-hidden').click(function(){
        $('.development-hidden').toggle();
        $('.development').toggle();
    });
//the third icon
    $('#fig3').click(function(){
        $('.product').toggle();
        $('.product-hidden').toggle();
    })
    $('.product-hidden').click(function(){
        $('.product-hidden').toggle();
        $('.product').toggle();
    });
});