/*
* @Author: Administrator
* @Date:   2017-08-07 10:19:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-07 10:21:31
*/

'use strict';
            $(function(){
               var a=0;
               var time;
               var n=0;
               clearInterval(time);
                  time=setInterval(function(){
                    a++;
                    if(a==6){
                        a=1;
                    }
                    var src="../images/banner0"+a+".jpg";
                    $('.banner img').attr('src',src);
                    $('.lunbo li').eq(a-1).addClass('red').siblings('li').removeClass('red');
                    },2000)
              $('.cbottom li').click(function(event) {
                 $(this).addClass('a1').siblings('li').removeClass('a1');
              });
              $('.cleft li').click(function(event) {
                  
                   n = (n+180)%360;
                  $(this).children('div').children('a').children('img').css('transform', 'rotate('+n+'deg)');
              });
             $('.ul2 li').mouseenter(function(event) {
                $(this).children('p').hide();
             });
             $('.ul2 li').mouseleave(function(event) {
               $(this).children('p').show();
             });

              $('.in').click(function(event) {
                       $('.set').show();
                   });
                   $('.set button').click(function(event) {
                       $('.set').fadeOut(500);
                   });
                    $('.set span').click(function(event) {
                       $('.set').fadeOut(500);
                   });
                    $('.sta').click(function(event) {
                       $('.collect').fadeIn(500);
                   });
                    $('.collect button').click(function(event) {
                       $('.collect').fadeOut(500);
                   });

                     $('.collect span').click(function(event) {
                       $('.collect').fadeOut(500);
                   });



            })