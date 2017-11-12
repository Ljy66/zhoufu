/*
* @Author: Administrator
* @Date:   2017-08-07 11:10:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-09 10:46:51
*/

'use strict';
	$(function(){
		$('.cn-right .cn-ul1 li').hover(function(event) {
			$(this).addClass('red').siblings('li').removeClass('red');
			
		});
		$('.cn-right .cn-ul1 a').hover(function() {
			$(this).css('color', 'red');
			$(this).parent().siblings('.date').css('color', 'red');
		}, function() {
			$(this).css('color', '#ccc');
			$(this).parent().siblings('.date').css('color', '#ccc');
		});
		$('.cn-right .title').click(function(event) {
			$('.nd-text').fadeIn(100);
		});
		$('.nd-text span').click(function(event) {
			$('.nd-text').fadeOut(100);
		});

		$('.c-text a').click(function(event) {
			$(this).addClass('cta').parent().siblings('span').children('a').removeClass('cta');
		});
	})