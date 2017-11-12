/*
* @Author: Administrator
* @Date:   2017-08-07 11:07:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-09 10:44:09
*/

'use strict';
            $(function(){
                 $('.p-list li').hover(function(event) {
                    $(this).children('.shade').stop().fadeIn(500);
                    $(this).children('img').stop().fadeTo('500', 0.5);

                }, function() {
                    
                    $(this).children('.shade').stop().fadeOut(100);
                    $(this).children('img').stop().fadeTo('500', 1);
                     
                 });
                $('.page li').mouseenter(function(event) {
                   $(this).addClass('red').siblings('li').removeClass('red');
                });
               


            	$('.ul1 li').mouseenter(function(event) {
        		var n=$(this).index();
        		n++;
        		if(n==4){
        			n=1;
        		        }
        		var src="images/pro_center0"+n+".jpg";
			 	$('.pd-l-img').attr('src',src);
			 	
                $(this).css('border-color', 'red');
        	});


            	$('.ul1 li').mouseleave(function(event) {
            		$(this).css('border-color', 'transparent');
            	});

                $('.pd-r li').click(function(event) {

                    $(this).addClass('btn-red').siblings('li').removeClass('btn-red');
                });


                $('.pd-r-img1').click(function(event) {
                	var a = $(".btn").attr("value");
                	a++;
                	$('.btn').val(a);
                });

                $('.pd-r-img2').click(function(event) {
                	var a = $(".btn").attr("value");
                	a--;
                	if(a<0){
                		a=0;
                	}
                	$('.btn').val(a);
                });

                $('.pd-r input').click(function(event) {
                $(this).css({
                	'color': 'red',
                	'border-color': 'red'}).siblings('input').css({'color': '#fff',
                     'border-color': '#fff'
                });

                });
                var bh=$('.content').height();
                var bw=$('.content').width();
                $('.shade').click(function(event) {
                    $('.ful').css({
                        'height': 'bh',
                       'width': 'bw',
                       'display':'block'
                    });
                   $('.pd-list').css('display', 'block');

                });

                $('.close').click(function(event) {
                   $('.pd-list').hide();
                });
            })