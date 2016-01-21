$(document).ready(function(){

    $('.diamond').children('div:lt(4)').wrapAll('<div class="pyramid"></div>');
    $('.diamond').children('div:gt(0)').wrapAll('<div class="pyramid"></div>');
    $('.pyramid').children('div:lt(2)').wrapAll('<div class="face-wrapper"></div>');

    var $shapes = $('.cuboid,.cylinder,.prism,.pyramid');
    var $faces = $shapes.children('div');

    $shapes.addClass('shape');
    $faces.addClass('face');

    $('.prism').children('div:nth-child(3)').wrap('<div class="face-wrapper"></div>');
    $('.prism').children('div:nth-child(4)').wrap('<div class="face-wrapper"></div>');

    /*
    $faces.wrapInner('<div class="photon-shader"></div>');
    $('.cylinder').children('div:nth-child(1)').wrap('<div class="face-wrapper"></div>');
    $('.cylinder').children('div:nth-child(2)').wrap('<div class="face-wrapper"></div>');
    $('.pyramid').children('div:nth-child(1)').wrap('<div class="face-wrapper"></div>');
    $('.pyramid').children('div:nth-child(2)').wrap('<div class="face-wrapper"></div>');
    $('.pyramid').children('div:nth-child(3)').wrap('<div class="face-wrapper"></div>');
    $('.pyramid').children('div:nth-child(4)').wrap('<div class="face-wrapper"></div>');

    $.each($('.pyramid').children('div:lt(4)')).wrap('<div class="face-wrapper"></div>');

    $('.pyramid').children('div:lt(4)').each(function( index ) {
    index.wrapAll('<div class="face-wrapper"></div>');
    });
    */

});